const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 620,
        webPreferences: {
            preload: path.join(__dirname, 'renderer.js'),
        },
        resizable: false,
        autoHideMenuBar: true,
    });

    mainWindow.loadFile('index.html');
});
