function ibg(){
	let ibg=document.querySelectorAll(".ibg"); for (var i = 0; i < ibg.length; i++) { if(ibg[i].querySelector('img')){ ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; } }

}
ibg();

function autoheight(){
	var width = $('.block__tiels__img').width();
	$('.block__tiels__img').height(width);
} autoheight();


$(window).resize(function() {
	autoheight();
});

$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 8000,
		autoplaySpeed: 800,
		autoplayHoverPause: true,
	});           
	$('.owl-carousel-1').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 10000,
		autoplaySpeed: 800,
		autoplayHoverPause: true,
		nav: false,
	});
	$.fn.equivalent = function (){
		var $blocks = $(this),
		maxH    = $blocks.eq(0).height();
		$blocks.each(function(){
			maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
		});
		$blocks.height(maxH);
	}
	$('#equivalent .block__carousel__item__line').equivalent(); 
	$('.owl-carousel-2').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 10000,
		autoplaySpeed: 800,
		autoplayHoverPause: true,
		nav: true,
	});
	$('.pop_up').click(function() {
		$('.overlay_popup, #popup1').show();
	});
	$('.overlay_popup').click(function() { // Обрабатываем клик по заднему фону
    $('.overlay_popup, .popup').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
	});
	$('.block-12 .item-1').click(function() {
		$('.overlay_popup, #popup2').show();
	});
	$('.block-12 .item-2').click(function() {
		$('.overlay_popup, #popup3').show();
	});
	$('.block-12 .item-3').click(function() {
		$('.overlay_popup, #popup4').show();
	});
	$('.block-12 .item-4').click(function() {
		$('.overlay_popup, #popup5').show();
	});		
});
