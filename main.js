const { app, BrowserWindow, Tray } = require("electron");
const path = require("path");
const env = process.env.NODE_ENV || 'development';
require('dotenv').config();
app.getName();
process.env.GOOGLE_API_KEY;


if(env === 'development'){
  require('electron-reload')(__dirname, {
    electron:path.join(__dirname, 'node_modules', '.bin', 'electron'), 
    hardResetMethod: 'exit'
  });
}

function createWindow() {

  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    titleBarStyle: 'hidden' ,
    resizable: true
  });

  mainWindow.loadFile(path.join(__dirname,"index.html"));

  //... Dev  Tools in Chromeium 
  //.
  //.
 //mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
