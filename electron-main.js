const { app, BrowserWindow, ipcMain, dialog } = require('electron'); // Added dialog
const path = require('path');
const fs = require('fs');
const { parseFile } = require('music-metadata'); // Import parseFile

// --- Configuration ---
let userDataPath;
let settingsFilePath;
let libraryFilePath;
let albumArtDirPath;

function setupPaths() {
  userDataPath = app.getPath('userData');
  settingsFilePath = path.join(userDataPath, 'settings.json');
  libraryFilePath = path.join(userDataPath, 'library.json');
  albumArtDirPath = path.join(userDataPath, 'album_art');

  // Ensure album art directory exists
  if (!fs.existsSync(albumArtDirPath)) {
    fs.mkdirSync(albumArtDirPath, { recursive: true });
  }
  console.log("User data path:", userDataPath);
}

function createWindow () {
  const win = new BrowserWindow({
    width: 1440,
    height: 1024,
    autoHideMenuBar: true,
    frame: false, // Make the window frameless
    titleBarStyle: 'hidden', // Hides title bar while keeping traffic lights on macOS if needed
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false, // Keep false for security
      preload: path.join(__dirname, 'preload.js') // Use the preload script
    }
  });

  // --- Load the BUILT app ---
  const indexPath = path.join(__dirname, 'dist', 'index.html'); // Point to dist/index.html
  console.log(`Loading index.html from: ${indexPath}`);
  win.loadFile(indexPath).catch(err => {
      console.error('Failed to load index.html:', err);
      // Provide more guidance if the file isn't found
      if (err.code === 'ERR_FILE_NOT_FOUND') {
          console.error(`Error: ${indexPath} not found. Did you run the build process (e.g., 'npm run build' or 'vite build')?`);
      }
  });

  // win.webContents.openDevTools(); // Uncomment for debugging
}

// --- IPC Handlers ---

// Get User Data Path (for resolving relative art paths in renderer)
ipcMain.handle('get-user-data-path', () => {
    return userDataPath;
});

// Settings
ipcMain.handle('load-settings', async () => {
  try {
    if (fs.existsSync(settingsFilePath)) {
      const data = await fs.promises.readFile(settingsFilePath, 'utf-8');
      return JSON.parse(data);
    }
    return null; // Return null if file doesn't exist
  } catch (error) {
    console.error('Error loading settings:', error);
    return null; // Return null on error
  }
});

ipcMain.handle('save-settings', async (event, settings) => {
  try {
    await fs.promises.writeFile(settingsFilePath, JSON.stringify(settings, null, 2), 'utf-8');
    return { success: true };
  } catch (error) {
    console.error('Error saving settings:', error);
    return { success: false, error: error.message };
  }
});

// Library
ipcMain.handle('load-library', async () => {
  try {
    if (fs.existsSync(libraryFilePath)) {
      const data = await fs.promises.readFile(libraryFilePath, 'utf-8');
      return JSON.parse(data);
    }
    return []; // Return empty array if file doesn't exist
  } catch (error) {
    console.error('Error loading library:', error);
    return []; // Return empty array on error
  }
});

ipcMain.handle('save-library', async (event, library) => {
  try {
    await fs.promises.writeFile(libraryFilePath, JSON.stringify(library, null, 2), 'utf-8');
    return { success: true };
  } catch (error) {
    console.error('Error saving library:', error);
    return { success: false, error: error.message };
  }
});

// Album Art
ipcMain.handle('save-album-art', async (event, recordId, artData, format) => {
    try {
        const extension = format.split('/')[1] || 'png'; // Default to png if format is weird
        const filename = `${recordId}.${extension}`;
        const artFilePath = path.join(albumArtDirPath, filename);
        const relativePath = path.join('album_art', filename); // Path relative to userData

        // artData might be ArrayBuffer or similar, ensure it's a Buffer for writeFile
        const buffer = Buffer.from(artData);

        await fs.promises.writeFile(artFilePath, buffer);
        console.log(`Saved album art to: ${artFilePath}`);
        return { success: true, artPath: relativePath.replace(/\\/g, '/') }; // Return relative path with forward slashes
    } catch (error) {
        console.error('Error saving album art:', error);
        return { success: false, error: error.message };
    }
});

// --- Added IPC Handlers ---

// Show Open Dialog
ipcMain.handle('show-open-dialog', async (event, options) => {
    // Ensure 'properties' includes 'multiSelections' if options.multiple is true
    const properties = options.properties || [];
    if (options.multiple && !properties.includes('multiSelections')) {
        properties.push('multiSelections');
    }
    if (!properties.includes('openFile')) {
         properties.push('openFile'); // Ensure files can be selected
    }

    // --- Translate 'types'/'accept' to Electron 'filters' ---
    let filters = options.filters || []; // Use existing filters if provided
    if (options.types && Array.isArray(options.types) && options.types.length > 0) {
        filters = options.types.map(type => {
            let extensions = [];
            if (type.accept) {
                // Extract extensions from the accept object
                Object.values(type.accept).forEach(extArray => {
                    extensions = extensions.concat(
                        extArray.map(ext => ext.startsWith('.') ? ext.substring(1) : ext) // Remove leading dot
                    );
                });
            }
            return {
                name: type.description || 'Custom Files',
                extensions: extensions
            };
        });
    }
    // --- End Translation ---

    const result = await dialog.showOpenDialog({
        // Pass other options like title, defaultPath etc. if they exist
        title: options.title,
        defaultPath: options.defaultPath,
        buttonLabel: options.buttonLabel,
        // Use the translated filters and constructed properties
        filters: filters,
        properties: properties,
        // Security setting (optional but recommended)
        securityScopedBookmarks: true
    });
    // Ensure filePaths use forward slashes for consistency
    if (result.filePaths) {
        result.filePaths = result.filePaths.map(p => p.replace(/\\/g, '/'));
    }
    return result;
});

// Read File Buffer
ipcMain.handle('read-file-buffer', async (event, filePath) => {
    try {
        if (fs.existsSync(filePath)) {
            const buffer = await fs.promises.readFile(filePath);
            return buffer;
        }
        console.error(`File not found for reading buffer: ${filePath}`);
        return null;
    } catch (error) {
        console.error(`Error reading file buffer ${filePath}:`, error);
        return null;
    }
});

// Parse Metadata using music-metadata in the main process
ipcMain.handle('parse-metadata', async (event, filePath) => {
    try {
        console.log(`Main: Parsing metadata for ${filePath}`);
        const metadata = await parseFile(filePath, { duration: true });
        console.log(`Main: Metadata parsed for ${filePath}`);
        // Extract only necessary data to send back to renderer
        const common = metadata.common;
        const format = metadata.format;
        const picture = common.picture && common.picture.length > 0 ? common.picture[0] : null;

        return {
            success: true,
            title: common.title,
            artist: common.artist || common.albumartist,
            album: common.album,
            trackNumber: common.track?.no,
            duration: format.duration,
            picture: picture ? { data: picture.data, format: picture.format } : null // Send picture data as buffer
        };
    } catch (error) {
        console.error(`Main: Error parsing metadata for ${filePath}:`, error);
        return { success: false, error: error.message };
    }
});

// --- Quit App Handler ---
ipcMain.handle('quit-app', () => {
    console.log('Quit request received. Quitting app.');
    app.quit();
});

// --- App Lifecycle ---

app.whenReady().then(() => {
  setupPaths(); // Setup paths before creating window or handlers
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});