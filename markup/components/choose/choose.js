

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
			$('.choose, .shema_footer').addClass('is-active');

			$('.week__to_cheet span').text(dose + ' мг');

			$('#' + showDrug).addClass('is-active').slideDown('400');
			body.stop().animate({scrollTop:toChoise}, 500, 'swing');

		} else {
			$('.page-popup').addClass('is-active');
		}

	});


});

	/*- show ppp  weight val -*/
	function getValue() {
    if( isNaN( $('.weight__input').val() ) ) {
      return false;
    } else {
  		 if ( $('.weight__input').val() < 60 ) {
  	    	return false;
  	    } else if( $('.weight__input').val() > 300 ) {
  	    	return false;
  	    } else {
  	    	return true;
  	    }
    }
	};

	function printDiv(divName) {
	    var element = document.getElementById(divName);
	    var val = $('.weight__input').val();

	    $('.weight__enter').hide();
	    $('[data-hide]').hide();
	    $('.choose, .shema_footer').addClass('is-print');

	    $('.js-text').each(function () {
	    	var finishText = $(this).attr('data-finishText');

	    	$(this).text(finishText);
	    });

	    $('.weight__wrap .desc__blue').append('<span class="weight__print">' + val +'кг. </span>');
	    html2pdf(element, {
	      margin:       1,
	      filename:     'дозировка_вальпроевой_кислоты.pdf',
	      image:        { type: 'jpeg', quality: 0.98 },
	      html2canvas:  { dpi: 192, letterRendering: true, imageTimeout: 600 },
	      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
	    });

	    $('.weight__enter').show();
	    $('.weight__print').remove();
	    $('[data-hide]').show();
	    $('.choose, .shema_footer').removeClass('is-print');

	    $('.js-text').each(function () {
	    	var startText = $(this).attr('data-startText');

	    	$(this).text(startText);
	    });


	}


	// function changeText() {
	// 	$('.js-text').each(function () {
	// 		var startText = $this.data('startText');
	// 		var finishText = $this.data('finishText');

	// 		$(this).text(finishText);
	// 	});
	// }