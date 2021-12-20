const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const app = electron.app
const Tray = electron.Tray;

app.on('ready', function () {
    mainWindow = new BrowserWindow({ width: 350, height: 440 });
    mainWindow.setMenu(null);
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    // var appIcon = new Tray(`file://${__dirname}/icon.png`);
    // appIcon.on('clicked', function clicked(e, bounds) {
    //     if (appIcon.window.isVisible()) {
    //         appIcon.window.hide();
    //     } else {
    //         appIcon.window.show();
    //     }
    // });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    };
});