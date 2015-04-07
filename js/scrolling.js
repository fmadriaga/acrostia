$( document ).ready(function() {
	$('header nav ul li:nth-child(1)').css('background-color','rgba(0,0,0, 0.5)');
    $('.servicios section article').fadeOut();
    $('.nosotros section article').fadeOut();
    $('.trabajos section article').fadeOut();

    $('#galeria>article').click(
    	function(){
    		actuateLink($(this).find('a'));
    		//$('#galeria>article>div>a').click()
    	});

    // Initialize popup as usual
	$('.test-popup-link').magnificPopup({ 
	  type: 'image',
		// other options
	  // Delay in milliseconds before popup is removed
	  removalDelay: 300,

	  // Class that is added to popup wrapper and background
	  // make it unique to apply your CSS animations just to this exact popup
	  mainClass: 'mfp-fade'
	});

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

function scroller(pOffset){
	$('html, body').animate({scrollTop: $(pOffset).offset().top},1000)
}



 function actuateLink(link)
 {
      var allowDefaultAction = true;

      if (link.click)
      {
          link.click();
          return;
      }
      else if (document.createEvent)
      {
          var e = document.createEvent('MouseEvents');
          e.initEvent(
               'click'     // event type
               ,true      // can bubble?
               ,true      // cancelable?
          );
          allowDefaultAction = link.dispatchEvent(e);           
      }

      if (allowDefaultAction)       
      {
          var f = document.createElement('form');
          f.action = link.href;
          document.body.appendChild(f);
          f.submit();
      }
}