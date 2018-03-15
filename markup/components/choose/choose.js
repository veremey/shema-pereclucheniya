

$(document).ready(function () {

	var centerWindowHeight = $(window).height() / 2;
	var target =  $('.weight__enter').offset().top - centerWindowHeight;
	var body = $("html, body");
	var toChoise = $('.choise').offset().top - 40;

	$('.popup__btn').on('click', function () {
		$('.page-popup').removeClass('is-active');
		body.stop().animate({scrollTop:target}, 500, 'swing');
	});

	$('.choise__item').on('click', function (e) {
		e.preventDefault();
		var showDrug = $(this).data('open');
		var dose = $('.weight__input').val() * 20;

		if(!!getValue()) {
			$('.choise__item').removeClass('is-active');
			$('.choose__item').slideUp('400').removeClass('is-active');
			$(this).addClass('is-active');
			$('.choose, .footer').addClass('is-active');

			$('.week__to_cheet span').text(dose);

			$('#' + showDrug).addClass('is-active').slideDown('400');
			body.stop().animate({scrollTop:toChoise}, 500, 'swing');

		} else {
			$('.page-popup').addClass('is-active');
		}

	});


});

	/*- show ppp  weight val -*/
	function getValue() {
    if( $('.weight__input').val() < 60 ) {
    	return false;
    } else if( $('.weight__input').val() > 300 ) {
    	return false;
    } else {
    	return true;
    }
	};