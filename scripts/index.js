const $Burger = document.querySelector('#burger'),
	$PlegableMenu = document.querySelector('.header__links--mobile')

document.addEventListener('click', e => {
	if (e.target.matches('#burger') || e.target.matches('#burger *')) {
		$PlegableMenu.classList.toggle('is-active')
		$Burger.classList.toggle('is-active')
	}
})
