const { app, BrowserWindow, shell, ipcMain, Menu, TouchBar } = require('electron');
const { TouchBarButton, TouchBarLabel, TouchBarSpacer } = TouchBar;

const path = require('path');
const isDev = require('electron-is-dev');

if(isDev){ process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true }
/*
  From Electron 2.0 on, developers will see warnings and recommendations printed to the developer
  console. They only show up when the binary's name is Electron, indicating that a developer is
  currently looking at the console.
  You can force-enable or force-disable these warnings by setting ELECTRON_ENABLE_SECURITY_WARNINGS
  or ELECTRON_DISABLE_SECURITY_WARNINGS on either process.env or the window object.
  ref: https://electronjs.org/docs/tutorial/security#electron-security-warnings
 */

let mainWindow;

createWindow = () => {
  mainWindow = new BrowserWindow({
    // backgroundColor: '#F7F7F7',
    minWidth: 880,
    show: false,
    titleBarStyle: 'default', // 'default' | 'hidden' | 'hiddenInset' | 'customButtonsOnHover'
    webPreferences: {
      nodeIntegration: false,
      preload: __dirname + '/preload.js',
      /*
        preload String (optional) - Specifies a script that will be loaded before other scripts run
        in the page. This script will always have access to node APIs no matter whether node
        integration is turned on or off. The value should be the absolute file path to the script.
        When node integration is turned off, the preload script can reintroduce Node global symbols
        back to the global scope.
      */
    },
    height: 860,
    width: 1280,
  });

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  );

  if (isDev) {
    const {
      default: installExtension,
      REACT_DEVELOPER_TOOLS,
      REDUX_DEVTOOLS,
    } = require('electron-devtools-installer');

    installExtension(REACT_DEVELOPER_TOOLS)
      .then(name => {
        console.log(`Added Extension: ${name}`);
      })
      .catch(err => {
        console.log('An error occurred: ', err);
      });

    // ## uncomment the next lines if you need redux-devtul involved while development
    /*
    installExtension(REDUX_DEVTOOLS)
      .then(name => {
        console.log(`Added Extension: ${name}`);
      })
      .catch(err => {
        console.log('An error occurred: ', err);
      });
    */
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();

    ipcMain.on('open-external-window', (event, arg) => {
      shell.openExternal(arg);
    });
  });
};

generateMenu = () => {
  const template = [
    {
      label: 'File',
      submenu: [{ role: 'about' }, { role: 'quit' }],
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'pasteandmatchstyle' },
        { role: 'delete' },
        { role: 'selectall' },
      ],
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' },
        { type: 'separator' },
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { type: 'separator' },
        { role: 'togglefullscreen' },
      ],
    },
    {
      role: 'window',
      submenu: [{ role: 'minimize' }, { role: 'close' }],
    },
    {
      role: 'help',
      submenu: [
        {
          click() {
            require('electron').shell.openExternal(
              'https://getstream.io/winds',
            );
          },
          label: 'Learn More',
        },
        {
          click() {
            require('electron').shell.openExternal(
              'https://github.com/GetStream/Winds/issues',
            );
          },
          label: 'File Issue on GitHub',
        },
      ],
    },
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
};

app.on('ready', () => {
  createWindow();
  generateMenu();
});

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('load-page', (event, arg) => {
  mainWindow.loadURL(arg);
});
