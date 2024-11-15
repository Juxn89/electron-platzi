import { ipcRenderer } from 'electron'

function setIpc() {
	ipcRenderer.on('pong', (event, arg) => {
		console.log(`Pong recibido - ${arg}`)
	})
}

function sendIpc() {
	ipcRenderer.send('ping', new Date())
}

module.exports = {
	setIpc,
	sendIpc
}