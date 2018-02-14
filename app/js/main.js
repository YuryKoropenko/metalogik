$(function() {
	$('.h-search__select').selectmenu();

	$('.p-bigslider').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		items:1
	});

	$('.h-nav__btn').on('click', function() {
		$(this).parent().children('.h-nav').slideToggle();
		$(document).click(function(event) {
			if ($(event.target).closest('.h-nav').length) return;
				$('.h-nav').slideUp();
				event.stopPropagation();
			});
		return false;
	});
});