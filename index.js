const { app, BrowserWindow } = require('electron')

console.dir(app)

app.on('before-quit', () => {
  console.log('Saliendo...')
})

app.on('ready', () => {
	let initialWindow = new BrowserWindow({
		width: 800,
		height: 600,
		title: 'Hello world',
		center: true,
		maximizable: false
	})

	initialWindow.on('move', () => {
		const position = initialWindow.getPosition()
		console.log(`The window position is: ${ position }`)
	})

	initialWindow.once('ready-to-show', () => {
		initialWindow.show()
	})

	initialWindow.on('close', () => {
		initialWindow = null
		app.quit()
	})

	initialWindow.loadURL('https://devdocs.io/')
})

//app.quit()