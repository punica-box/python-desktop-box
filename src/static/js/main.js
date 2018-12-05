const {app, BrowserWindow} = require('electron');
var {PythonShell} = require('python-shell');
var path = require("path")

function createWindow() {
    let rootPath = path.dirname((path.dirname(__dirname)))
    let enginePath = path.join(rootPath,'engine.py')
    let iconPath = path.join(rootPath,'static', 'favicon.png')
    PythonShell.run(enginePath, null, function (err) {
        if (err) throw err;
        console.log('finished');
      });
    window = new BrowserWindow({
        title: 'PikachuBox',
        width: 1500, 
        height: 800,
        icon: iconPath,
    });
    window.loadURL('http://127.0.0.1:5001/')
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
    PythonShell.end()
});