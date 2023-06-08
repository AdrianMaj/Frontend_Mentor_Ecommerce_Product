const hamburgerBtn = document.querySelector('.header__hamburger')
const menu = document.querySelector('.menu')
const closeBtn = document.querySelector('.nav__close-btn')
const shadow = document.querySelector('.shadow')

const openMenu = () => {
	menu.classList.add('active')
	shadow.style.display = 'block'
}
const closeMenu = () => {
	menu.classList.remove('active')
	shadow.style.display = 'none'
}

$(document).ready(function () {
	$('.gallery').slick({
		prevArrow:
			'<button type="button" class="slick-prev"><img src="./img/icon-previous.svg" alt="Previous photo arrow button"></button>',
		nextArrow:
			'<button type="button" class="slick-next"><img src="./img/icon-next.svg" alt="Next photo arrow button"></button>',
	})
})

hamburgerBtn.addEventListener('click', openMenu)
closeBtn.addEventListener('click', closeMenu)
