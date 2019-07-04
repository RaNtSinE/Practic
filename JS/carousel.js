var i=0;

	$(document).ready(function() {

		    var speed=300
				var carusel=$(".carousel-wrapper").parents('.carousel');
		    var f=true;
		    function s(){
		        f=false;
		        function d() {
		            f=true;
		        }
		        setTimeout(d, speed);
		    }s();

		    $(window).on('mousewheel', function(event) {
		        if(event.deltaY<0 && f==true && i<3 && window.innerWidth/window.innerHeight>=24/15){
		            right_carusel(carusel);
								i=i+1;
								if(i>0){
								add();}
		            s();
		        }
		        if(event.deltaY>0 && f==true && i>0){
		            left_carusel(carusel);
								i=i-1;
								if(i==0){
								remove();}
		            s();
		        }
						if(window.innerWidth/window.innerHeight<=24/15) {
							remove();
						}
		    });
		});

function add(){
	$('#menu').addClass('active')
	$('#ham').addClass('active')
}

function remove(){
	$('#menu').removeClass('active')
	$('#ham').removeClass('active')
}

function left_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items"));
   $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();
   $(carusel).find(".carousel-items").animate({left: "0px"}, 250);
}

function right_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 250, function(){
	  $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items"));
      $(carusel).find(".carousel-items .carousel-block").eq(0).remove();
      $(carusel).find(".carousel-items").css({"left":"0px"});
   });
}
