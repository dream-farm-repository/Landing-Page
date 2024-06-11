const header = document.querySelector('.header')
const animate = document.querySelectorAll('.animate')

function activeNav() {
	if (window.scrollY > 100) {
		header.classList.add('active')
	} else {
		header.classList.remove('active')
	}
}

window.addEventListener('scroll', () => {
	activeNav()

	// console.log(window.scrollY);


	// animate.forEach((item) => {
	// 	if (item.offsetTop > window.scrollY) {
	// 		item.classList.add('animate__animated')
	// 		console.log(item);
	// 	}
	// })


})

window.addEventListener('load', () => {
	activeNav()


	AOS.init()

	document.documentElement.style.setProperty('--animate-duration', '0.5s');
})
