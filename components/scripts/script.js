$(function() {
    var topOffset = 43;

    //window Height
    var wheight = $(window).height(); // get height of window;
    $('.fullheight').css('height', wheight);

    $(window).resize(function() {
        var wheight = $(window).height(); // get height of window;
        $('.fullheight').css('height', wheight);
    }); // on resize

    // Animated scrolling
    // https://css-tricks.com/snippets/jquery/smooth-scrolling/
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - topOffset
                }, 1000);
                return false;
            } // if target.length
        } // location hostname
    }); // onClick

    // hightlight navigation
    $(window).scroll(function(){
    	var windowPos = $(window).scrollTop() + topOffset;
    	$('nav li a').removeClass('active');

    	if(windowPos > $('#hotelinfo').offset().top) {
    		$('nav li a').removeClass('active');
    		$('a[href$="#hotelinfo"]').addClass('active');
    	} // if windowPos

    	if(windowPos > $('#rooms').offset().top) {
    		$('nav li a').removeClass('active');
    		$('a[href$="#rooms"]').addClass('active');
    	} // if windowPos

    	if(windowPos > $('#dining').offset().top) {
    		$('nav li a').removeClass('active');
    		$('a[href$="#dining"]').addClass('active');
    	} // if windowPos

    	if(windowPos > $('#events').offset().top) {
    		$('nav li a').removeClass('active');
    		$('a[href$="#events"]').addClass('active');
    	} // if windowPos

    	if(windowPos > $('#attractions').offset().top) {
    		$('nav li a').removeClass('active');
    		$('a[href$="#attractions"]').addClass('active');
    	} // if windowPos
    }); // scroll function




    // setup scroll magic

    var controller = new ScrollMagic({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });

    // pin navigation
    var pin = new ScrollScene({
        triggerElement: '#nav',
    }).setPin('#nav').addTo(controller);

    // room animation
    var roomOrigin = {
    	bottom: -700,
    	opacity: 0,
    	scale: 0
    }

    var roomDest = {
    	repeat: 1,
    	yoyo: true,
    	bottom: 0,
    	opacity: 1, 
    	scale: 1,
    	ease: Back.easeOut
    }

    var roomtween = TweenMax.staggerFromTo(
    	'#piccadilly .content',
    	1, roomOrigin, roomDest);

    var pin = new ScrollScene({
    	triggerElement: '#piccadilly',
    	offset: -topOffset,
    	duration: 500  	
    }).setPin('#piccadilly')
    	.setTween(roomtween)
    	.addTo(controller);

    var roomtween = TweenMax.staggerFromTo(
    	'#cambridge .content',
    	1, roomOrigin, roomDest);

    var pin = new ScrollScene({
    	triggerElement: '#cambridge',
    	offset: -topOffset,
    	duration: 500  	
    }).setPin('#cambridge')
    	.setTween(roomtween)
    	.addTo(controller);

    var roomtween = TweenMax.staggerFromTo(
    	'#westminster .content',
    	1, roomOrigin, roomDest);

    var pin = new ScrollScene({
    	triggerElement: '#westminster',
    	offset: -topOffset,
    	duration: 500  	
    }).setPin('#westminster')
    	.setTween(roomtween)
    	.addTo(controller);

    var roomtween = TweenMax.staggerFromTo(
    	'#oxford .content',
    	1, roomOrigin, roomDest);

    var pin = new ScrollScene({
    	triggerElement: '#oxford',
    	offset: -topOffset,
    	duration: 500  	
    }).setPin('#oxford')
    	.setTween(roomtween)
    	.addTo(controller);

    var roomtween = TweenMax.staggerFromTo(
    	'#victoria .content',
    	1, roomOrigin, roomDest);

    var pin = new ScrollScene({
    	triggerElement: '#victoria',
    	offset: -topOffset,
    	duration: 500  	
    }).setPin('#victoria')
    	.setTween(roomtween)
    	.addTo(controller);

    var roomtween = TweenMax.staggerFromTo(
    	'#manchester .content',
    	1, roomOrigin, roomDest);

    var pin = new ScrollScene({
    	triggerElement: '#manchester',
    	offset: -topOffset,
    	duration: 500  	
    }).setPin('#manchester')
    	.setTween(roomtween)
    	.addTo(controller);


    // attactions animation 
    var attractionstween = TweenMax.staggerFromTo(
        '#attractions article', 1, {
            opacity: 0,
            scale: 0
        }, {
            delay: 1,
            opacity: 1,
            scale: 1,
            ease: Back.easeOut
        });

    var scene = new ScrollScene({
        triggerElement: '#attractions',
        offset: -topOffset
    }).setTween(attractionstween).addTo(controller);


}); // on load
