const { app, BrowserWindow, Menu, MenuItem } = require('electron');
const path = require('path');


if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  const menu = Menu.buildFromTemplate(menubar);
  Menu.setApplicationMenu(menu);



 // mainWindow.webContents.openDevTools();
};


app.on('ready', createWindow);

const menubar = [
  {
    label: 'Exit',
    submenu: [
      {
        label: 'Quit',
        click: () => app.quit(),
        accelator: 'CmdOrCtrl+Q'
      }
    ]
  }
];

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
