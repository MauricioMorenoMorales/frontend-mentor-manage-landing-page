const $Burger = document.querySelector('#burger'),
	$PlegableMenu = document.querySelector('.header__links--mobile'),
	$Slider = document.querySelector('.slider'),
	$Slider_container = document.querySelector('.slider__container')

// let isDown = false,
// 	startX,
// 	scrollLeft

let pressed = false
let startx
let x

document.addEventListener('click', e => {
	if (e.target.matches('#burger') || e.target.matches('#burger *')) {
		$PlegableMenu.classList.toggle('is-active')
		$Burger.classList.toggle('is-active')
	}
})

$Slider.addEventListener('mousedown', e => {
	pressed = true
	startx = e.offsetX - $Slider_container.offsetLeft
	$Slider.style.cursor = 'grabbing'
	console.log($Slider_container.offsetLeft)
})

$Slider.addEventListener('mouseenter', () => {
	$Slider.style.cursor = 'grab'
})

$Slider.addEventListener('mouseup', () => {
	$Slider.style.cursor = 'grab'
})

window.addEventListener('mouseup', () => {
	pressed = false
})

$Slider.addEventListener('mousemove', e => {
	if (!pressed) return
	e.preventDefault()
	x = e.offsetX
	$Slider_container.style.left = `${x - startx}px`
})

//! Anterior slider
// $Slider.addEventListener('mousedown', e => {
// 	isDown = true
// 	startX = e.pageX - $Slider.offsetLeft
// 	scrollLeft = $Slider.scrollleft
// 	console.log(startX)
// })
// $Slider.addEventListener('mouseleave', e => {
// 	isDown = false
// })
// $Slider.addEventListener('mouseup', e => {
// 	isDown = false
// })
// $Slider.addEventListener('mousemove', e => {
// 	if (!isDown) return
// 	e.preventDefault()
// 	const x = e.pageX - $Slider.offsetLeft
// 	console.log([x, startX])
// 	const walk = x - startX
// 	$Slider.scrollLeft = scrollLeft - walk
// 	console.log(walk)
// 	$Slider.style.marginLeft = $Slider.style.marginLeft + walk
// })

// $Slider.addEventListener('pointerdown', e => {
// 	isDown = true
// 	startX = e.pageX - $Slider.offsetLeft
// 	scrollLeft = $Slider.scrollleft
// 	console.log(startX)
// })
// $Slider.addEventListener('pointerleave', e => {
// 	isDown = false
// })
// $Slider.addEventListener('pointerup', e => {
// 	isDown = false
// })
// $Slider.addEventListener('pointermove', e => {
// 	if (!isDown) return
// 	e.preventDefault()
// 	const x = e.pageX - $Slider.offsetLeft
// 	console.log([x, startX])
// 	const walk = x - startX
// 	console.log(walk)
// 	$Slider.scrollLeft = walk
// })
