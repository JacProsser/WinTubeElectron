const {app, BrowserWindow, screen} = require('electron');
const path = require('path')


let mainWindow;

function createWindow () {

    const { width, height } = screen.getPrimaryDisplay().workAreaSize
    mainWindow = new BrowserWindow({
        width,
        height,
        frame: false,
        icon: path.join(__dirname, '/icons/main.png'),
        backgroundColor: '#FFF',
        webPreferences: {
            nodeIntegration: true
        }
    });


    mainWindow.loadFile('index.html');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});


