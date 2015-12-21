$("document").ready(function (){
	$('#navMenu').css('left', '-136px');
	$('#menuBtn').click(function (event){
		event.preventDefault();
		var $navMenu = $('#navMenu');
		if($('i').hasClass('fa-bars')){
			$navMenu.animate({left: "0px"}, 300, 'linear');
			//if logo has shrunk, align nav header image with nav body
			if($('#mainLogo').hasClass('shrinkLogo')){
				$('#topNav header').animate({width: '136px'}, 300, 'linear');
			}

		} else {
			$navMenu.animate({left: "-135px"}, 300);
			if($('#mainLogo').hasClass('shrinkLogo')){
				$('#topNav header').delay(200).animate({width: '100%'}, 300);
			}
		}
		//toggle between open and close icon for menuBtn on click
		if ($('i').hasClass('fa-bars')){
			$('i').removeClass('fa-bars').addClass('fa-times');
		}else{
			$('i').removeClass('fa-times').addClass('fa-bars');
		}

		//rotate menuBtn on click
		$(this).toggleClass('rotate');


	});

	//scroll to #contact from menu
	$('#navMenu li').last().click(function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop: $('#contact').offset().top
		}, 1000);
		$('#navMenu').animate({left: '-135px'}, 100);
		$('#topNav header').animate({width: '100%'}, 800);
	
		//change icon back to hamburger bar
		$('i').removeClass('fa-times').addClass('fa-bars');
		//hide menu
		
	});

	//scroll to contact on any a link pointing to #contact
	$("a[href='#contact']").click(function(e){
		 e.preventDefault(); //stops weird flashing when clicked
		$('html, body').animate({
			scrollTop: $('#contact').offset().top
		}, 1000);
	});

	//when window is greater than 700px and scrolls 50px, shrink main logo
	$(document).on('scroll', function(){
		if($(window).width() >= 700 ){
			if($(document).scrollTop() > 30){
				$('#mainLogo').addClass('shrinkLogo');
			}else{
				$('#mainLogo').removeClass('shrinkLogo');
			}
		}
	})

	// shrink navigation on events page at mobile size
	if($(window).width() <= 480){
		$('#previous').html('<i class="fa fa-arrow-left"></i>');
		$('#next').html('<i class="fa fa-arrow-right"></i>');
	}

	//if size of window on load is >= 990
	if($(window).width() >= 990){
			//about page
			$('#aboutImg').html('<img src="img/galleryInteriorCrop.jpg" class="img-responsive">');
			//services page
			$('#servicesImg').html('<img src="img/servicesCrop.jpg" class="img-responsive">');
		}
	//if window is resized (if ipad is rotated) change image
	$(window).resize(function(){
		if($(window).innerWidth() >= 990){
			//about page
			$('#aboutImg').html('<img src="img/galleryInteriorCrop.jpg" class="img-responsive">');
			//services page
			$('#servicesImg').html('<img src="img/servicesCrop.jpg" class="img-responsive">');
		} else {
			//about page
			$('#aboutImg').html('<img src="img/galleryInterior.jpg" class="img-responsive">');
			//services page
			$('#servicesImg').html('<img src="img/services.jpg" class="img-responsive">');
		}
	});


});
