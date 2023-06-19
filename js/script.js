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
const cartProduct = document.querySelector('.product')
const cartCheckoutBtn = document.querySelector('.cart__checkout')
const cartEmpty = document.querySelector('.cart__empty')
const productDeleteBtn = document.querySelector('.product__delete')
const cartColour = document.querySelector('.cart__colour')

const addToCartBtn = document.querySelector('.info__add-to-cart-btn')
const productQuantity = document.querySelectorAll('.product__quantity')

const productFinalPrice = document.querySelector('.product__final-price')
//gallery
const photos = document.querySelectorAll('.gallery__photo')
const thumbnails = document.querySelectorAll('.gallery-desktop__thumbnail')
const lightbox = document.querySelector('.lightbox')
const lightboxCloseBtn = document.querySelector('.lightbox__close-btn')

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
		if (quantity > 0) {
			e.textContent = quantity
			cartProduct.style.display = 'flex'
			cartCheckoutBtn.style.display = 'block'
			cartEmpty.style.display = 'none'
		} else if (quantity == 0) {
			e.style.display = 'none'
			cartProduct.style.display = 'none'
			cartCheckoutBtn.style.display = 'none'
			cartEmpty.style.display = 'block'
		}
	})
	productFinalPrice.textContent = `$${(price * quantity).toFixed(2)}`
}
const clearBasket = () => {
	quantityInput.value = 0
	addToCart()
}
const toggleBasket = () => {
	cartMenu.classList.toggle('open')
	if (cartColour.getAttribute('fill') === 'black') {
		cartColour.setAttribute('fill', '#69707D')
	} else {
		cartColour.setAttribute('fill', 'black')
	}
}

// SLICK
$(document).ready(function () {
	$('.gallery').slick({
		prevArrow:
			'<button type="button" class="slick-prev"><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg></button>',
		nextArrow:
			'<button type="button" class="slick-next"><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg></button>',
		// swipe: false,
	})
	$('.gallery-desktop').slick({
		slidesToShow: 4,
		slidesToScroll: 0,
		asNavFor: '.gallery',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
	})
})

//LISTENERS
hamburgerBtn.addEventListener('click', openMenu)
closeBtn.addEventListener('click', closeMenu)

addQuantityBtn.addEventListener('click', addQuantity)
subtractQuantityBtn.addEventListener('click', subtractQuantity)
basketIcon.addEventListener('click', toggleBasket)
productDeleteBtn.addEventListener('click', clearBasket)

addToCartBtn.addEventListener('click', addToCart)
