$(function() {
    var topOffset = 43;
    var wheight = $(window).height(); // get height of window;
    $('.fullheight').css('height', wheight);

    $(window).resize(function() {
        var wheight = $(window).height(); // get height of window;
        $('.fullheight').css('height', wheight);
    }); // on resize


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

    var pin = new ScrollScene({
        triggerElement: '#nav',
    }).setPin('#nav').addTo(controller);

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
