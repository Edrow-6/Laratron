const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

app.on('ready', () => {
    createWindow()
});

var phpServer = require('node-php-server');
const port = 8000, host = '127.0.0.1';
const serverUrl = `http://${host}:${port}`;

let mainWindow;

function createWindow() {
    // Create a PHP Server.
    phpServer.createServer({
        port: port,
        hostname: host,
        base: `${__dirname}/www/public`,
        keepalive: false,
        open: false,
        bin: `${__dirname}/php-7.4-windows/php.exe`,
        router: __dirname + '/www/server.php'
    });

    // Create the browser window.
    const {
        width,
        height
    } = screen.getPrimaryDisplay().workAreaSize
    mainWindow = new BrowserWindow({
        width: width,
        height: height,
        show: false,
        autoHideMenuBar: true
    })

    mainWindow.loadURL(serverUrl)

    mainWindow.webContents.once('dom-ready', function () {
        mainWindow.show()
        mainWindow.maximize();
        // mainWindow.webContents.openDevTools()
    });

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        phpServer.close();
        mainWindow = null;
    })
}

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        phpServer.close();
        app.quit();
    }
})

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
})
