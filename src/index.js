const path = require('path')
import { app, BrowserWindow, ipcMain } from 'electron'

import devtools from './devtools'

// console.dir(app)

if(process.env.NODE_ENV === 'development') {
	devtools()
}

app.on('before-quit', () => {
  // console.log('Saliendo...')
})

app.on('ready', () => {
	let initialWindow = new BrowserWindow({
		width: 800,
		height: 600,
		title: 'Hello world',
		center: true,
		maximizable: false,
		webPreferences: {
      nodeIntegration: true, // Habilita el uso de módulos de Node.js en el proceso de renderizado
      contextIsolation: false // Desactiva el aislamiento de contexto
    }
	})

	initialWindow.on('move', () => {
		const position = initialWindow.getPosition()
		// console.log(`The window position is: ${ position }`)
	})

	initialWindow.once('ready-to-show', () => {
		initialWindow.show()
	})

	initialWindow.on('close', () => {
		initialWindow = null
		app.quit()
	})

	// initialWindow.loadURL('https://devdocs.io/')
	initialWindow.loadFile( path.join(__dirname, 'renderer', 'index.html') )
	//initialWindow.toggleDevTools()
})

ipcMain.on('ping', (event, arg) => {
	console.log(`Reciving ping - ${ arg }`)
	event.sender.send('pong', new Date())
})

//app.quit()
