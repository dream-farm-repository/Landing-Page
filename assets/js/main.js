const header = document.querySelector('.header')

function activeNav() {
	if (window.scrollY > 100) {
		header.classList.add('active')
	} else {
		header.classList.remove('active')
	}
}

window.addEventListener('scroll', () => {
	activeNav()
})

window.addEventListener('load', () => {
	activeNav()
})
