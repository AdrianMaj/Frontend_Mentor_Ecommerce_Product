const hamburgerBtn = document.querySelector('.header__hamburger')
const menu = document.querySelector('.menu')
const closeBtn = document.querySelector('.nav__close-btn')
const shadow = document.querySelector('.shadow')

//pricing
const price = 125
const productPrice = document.querySelector('.product__price')
productPrice.textContent = `$${price.toFixed(2)}`
//quantity consts
const addQuantityBtn = document.querySelector('.quantity__btn--add')
const subtractQuantityBtn = document.querySelector('.quantity__btn--subtract')
const quantityInput = document.querySelector('.quantity__number')
//basket and addToCart consts
const basketIcon = document.querySelector('.header__cart-icon')
const cartMenu = document.querySelector('.cart')

const addToCartBtn = document.querySelector('.info__add-to-cart-btn')
const productQuantity = document.querySelectorAll('.product__quantity')

const productFinalPrice = document.querySelector('.product__final-price')

// MENU FUNCTIONS (MOBILE)
const openMenu = () => {
	menu.classList.add('active')
	shadow.style.display = 'block'
}
const closeMenu = () => {
	menu.classList.remove('active')
	shadow.style.display = 'none'
}
//QUANTITY FUNCTIONS
const addQuantity = () => {
	if (quantityInput.value < 999) {
		quantityInput.value++
	}
}
const subtractQuantity = () => {
	if (quantityInput.value > 0) {
		quantityInput.value--
	}
}
//Add to Cart
const addToCart = () => {
	const quantity = quantityInput.value
	productQuantity.forEach(e => {
		e.textContent = quantity
	})
	productFinalPrice.textContent = `$${(price * quantity).toFixed(2)}`
}
const toggleBasket = () => {
	cartMenu.classList.toggle('open')
}

// SLICK
$(document).ready(function () {
	$('.gallery').slick({
		prevArrow:
			'<button type="button" class="slick-prev"><img src="./img/icon-previous.svg" alt="Previous photo arrow button"></button>',
		nextArrow:
			'<button type="button" class="slick-next"><img src="./img/icon-next.svg" alt="Next photo arrow button"></button>',
	})
})

//LISTENERS
hamburgerBtn.addEventListener('click', openMenu)
closeBtn.addEventListener('click', closeMenu)

addQuantityBtn.addEventListener('click', addQuantity)
subtractQuantityBtn.addEventListener('click', subtractQuantity)
basketIcon.addEventListener('click', toggleBasket)

addToCartBtn.addEventListener('click', addToCart)
