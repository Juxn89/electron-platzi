window.addEventListener('load', () => {
	// document.querySelector('#message').innerHTML = 'This is a message from JS.'
	addImagesEvents()
})

function addImagesEvents() {
	const thumbs = document.querySelectorAll('li.list-group-item')

	for (let index = 0; index < thumbs.length; index++) {
		thumbs[index].addEventListener('click', function() { changeImage(this) })
	}
}

function changeImage(node) {
	document.querySelector('li.selected').classList.remove('selected')
	node.classList.add('selected')
	document.querySelector('#image-displayed').setAttribute('src', node.querySelector('img').src)
}