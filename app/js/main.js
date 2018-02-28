$(function() {
	$('.h-search__select').selectmenu();

	$('.p-bigslider').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		items:1
	});


	if ($(window).width() > 767) {
		$('.p-cardslider__big').owlCarousel({
			items: 1,
			loop: true,
			dots: true,
			dotsContainer: '.p-cardslider__left .p-cardslider__thumbs'
		});
		$('.p-menu__link').on('click', function() {
			$(this).parent('.p-menu__item').toggleClass('p-menu__item-active');
			$(this).parent('.p-menu__item').children('.p-menu__submenu').slideToggle();
			return false;
		});
	}
	if ($(window).width() <= 767) {
		$('.p-cardslider__big').owlCarousel({
			items: 1,
			loop: true,
			dots: true,
			dotsContainer: '.p-cardslider__mob .p-cardslider__thumbs'
		});
		$('.p-menu__link').on('click', function() {
			$(this).parent('.p-menu__item').toggleClass('p-menu__item-active');
			$(this).parent('.p-menu__item').children('.p-menu__submenu').slideToggle();
			$(document).click(function(event) {
			if ($(event.target).closest('.p-menu__submenu').length) return;
				$('.p-menu__submenu').slideUp();
				$('.p-menu__item').removeClass('p-menu__item-active');
				event.stopPropagation();
			});
		return false;
		});
	}


	$('.h-nav__btn').on('click', function() {
		$(this).parent().children('.h-nav').slideToggle();
		$(document).click(function(event) {
			if ($(event.target).closest('.h-nav').length) return;
				$('.h-nav').slideUp();
				event.stopPropagation();
			});
		return false;
	});
	$('.h-nav__close').on('click', function() {
		$(this).parent('.h-nav').slideUp();
		return false;
	});

	$('.h-callback').fancybox();
	$('.btn__buyoneclick').fancybox();
});