import url from 'url'
import path from 'path'

window.addEventListener('load', () => {
	// document.querySelector('#message').innerHTML = 'This is a message from JS.'
	addImagesEvents()
	searImagesEvent()
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

function searImagesEvent() {
	const searchBox = document.querySelector('#search-box')

	searchBox.addEventListener('keyup', function() {
		const currentValue = this.value
		const regex = new RegExp(this.value.toLowerCase(), 'gi')
		const thumbs = document.querySelectorAll('li.list-group-item img')

		if(currentValue.length === 0) {
			thumbs.forEach(item => item.parentNode.classList.remove('hidden'))
		}

		for (let i = 0; i < thumbs.length; i++) {
			const fileUrl = url.parse(thumbs[i].src)
			const fileName = path.basename(fileUrl.pathname)

			if(fileName.match(regex))
				thumbs[i].parentNode.classList.remove('hidden')
			else
				thumbs[i].parentNode.classList.add('hidden')
		}

		selectFirstImage()
	})
}

function selectFirstImage() {
	const image = document.querySelector('li.list-group-item:not(.hidden)')
	changeImage(image)
}