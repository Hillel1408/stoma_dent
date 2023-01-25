

window.onload = function () {
	document.addEventListener("click", documentActions);
	function documentActions(e){
		const targetElement = e.target;

		if (window.innerWidth < 991.98){
			if (targetElement.classList.contains('header__nav-link_btn')){
				targetElement.closest('.header__nav-item').classList.toggle('_active');
			}
		}
	}

	let menu = document.querySelector('.header__nav-list');
	let button = document.querySelector('.header__nav-icon');
	let body = document.querySelector('.body');
	let call = document.querySelector('.header__btn');

	button.onclick = function() {
		menu.classList.toggle('_active');
		button.classList.toggle('_active');
		body.classList.toggle('lock');
		call.classList.toggle('btn-none');
	};
}