const { contextBridge, ipcRenderer } = require('electron'); // Removed 'app' and 'path'

contextBridge.exposeInMainWorld('electronAPI', {
  // --- Basic IPC ---
  invoke: (channel, ...args) => ipcRenderer.invoke(channel, ...args),
  send: (channel, ...args) => ipcRenderer.send(channel, ...args),
  on: (channel, func) => {
    // Deliberately strip event as it includes `sender`
    const subscription = (event, ...args) => func(...args);
    ipcRenderer.on(channel, subscription);
    // Return a function to remove the listener
    return () => ipcRenderer.removeListener(channel, subscription);
  },
  removeAllListeners: (channel) => ipcRenderer.removeAllListeners(channel),

  // --- Specific File Operations ---
  loadSettings: () => ipcRenderer.invoke('load-settings'),
  saveSettings: (settings) => ipcRenderer.invoke('save-settings', settings),
  loadLibrary: () => ipcRenderer.invoke('load-library'),
  saveLibrary: (library) => ipcRenderer.invoke('save-library', library),
  saveAlbumArt: (recordId, artData, format) => ipcRenderer.invoke('save-album-art', recordId, artData, format),
  getUserDataPath: () => ipcRenderer.invoke('get-user-data-path'), // Expose user data path
  // --- Added Handlers ---
  showOpenDialog: (options) => ipcRenderer.invoke('show-open-dialog', options),
  readFileBuffer: (filePath) => ipcRenderer.invoke('read-file-buffer', filePath),
  quitApp: () => ipcRenderer.invoke('quit-app') // Expose quit-app
});

console.log('Preload script loaded.');
