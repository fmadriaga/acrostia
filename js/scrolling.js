$( document ).ready(function() {
	$('header nav ul li:nth-child(1)').css('background-color','rgba(0,0,0, 0.5)');
    $('.servicios section article').fadeOut();
    $('.nosotros section article').fadeOut();
    $('.trabajos section article').fadeOut();

});

function parallax(){
    	var scrolled = $(window).scrollTop();	
    	$('.inicio').css('background-position-y',50+(scrolled/ 100) + '%');

    	if (scrolled > 0){
	    	$('header nav ul li:nth-child(1)').css('background-color','rgba(0,0,0, 0.5)');
	    	$('header nav ul li:nth-child(2)').css('background-color','transparent');
	    	$('header nav ul li:nth-child(3)').css('background-color','transparent');
	    	$('header nav ul li:nth-child(4)').css('background-color','transparent');
	    	$('header nav ul li:nth-child(5)').css('background-color','transparent');
	    }

	    var servScroll = $('.inicio').height() - 10;
	    if (scrolled > servScroll){
	    	$('.servicios>div>section>article').fadeIn(1000);
	    	$('header nav ul li:nth-child(1)').css('background-color','transparent');
	    	$('header nav ul li:nth-child(2)').css('background-color','rgba(0,0,0, 0.5)');
	    	$('header nav ul li:nth-child(3)').css('background-color','transparent');
	    	$('header nav ul li:nth-child(4)').css('background-color','transparent');
	    	$('header nav ul li:nth-child(5)').css('background-color','transparent');
	    }

	    var servScroll = servScroll + $('.servicios').height() - 10;
	    if (scrolled > servScroll){
	    	$('.nosotros>div>section>article').fadeIn(1000);
	    	$('header nav ul li:nth-child(1)').css('background-color','transparent');
	    	$('header nav ul li:nth-child(2)').css('background-color','transparent');
	    	$('header nav ul li:nth-child(3)').css('background-color','rgba(0,0,0, 0.5)');
	    	$('header nav ul li:nth-child(4)').css('background-color','transparent');
	    	$('header nav ul li:nth-child(5)').css('background-color','transparent');
	    }

	    var servScroll = servScroll + $('.nosotros').height() - 10;
	    if (scrolled >servScroll){
	    	$('.trabajos>div>section>article').fadeIn(1000);
	    	$('header nav ul li:nth-child(1)').css('background-color','transparent');
	    	$('header nav ul li:nth-child(2)').css('background-color','transparent');
	    	$('header nav ul li:nth-child(3)').css('background-color','transparent');
	    	$('header nav ul li:nth-child(4)').css('background-color','rgba(0,0,0, 0.5)');
	    	$('header nav ul li:nth-child(5)').css('background-color','transparent');
	    }

	    var servScroll = servScroll + $('.trabajos').height() - 10;
	    if (scrolled > servScroll){
	    	$('.contacto article').fadeIn(1000);
	    	$('header nav ul li:nth-child(1)').css('background-color','transparent');
	    	$('header nav ul li:nth-child(2)').css('background-color','transparent');
	    	$('header nav ul li:nth-child(3)').css('background-color','transparent');
	    	$('header nav ul li:nth-child(4)').css('background-color','transparent');
	    	$('header nav ul li:nth-child(5)').css('background-color','rgba(0,0,0, 0.5)');
	    }
	}

$( window ).scroll(function() {
	parallax();
});
