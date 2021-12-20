const electron = require("electron");
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;
const Tray = electron.Tray;

app.on("ready", function () {
  mainWindow = new BrowserWindow({ width: 350, height: 440 });
  mainWindow.setMenu(null);
  mainWindow.loadURL(`${__dirname}/../html/index.html`);
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
