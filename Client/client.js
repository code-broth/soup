const electron = require('electron')
const {app} = electron
const {BrowserWindow} = electron

function createWindow() {
  win = new BrowserWindow({fullscreen:true});

  win.loadURL(`file://${__dirname}/index.html`)

  /*win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });*/
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
