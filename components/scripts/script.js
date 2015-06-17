$(function() {
    var topOffset = 43;
    var wheight = $(window).height(); // get height of window;
    $('.fullheight').css('height', wheight);

    $(window).resize(function() {
        var wheight = $(window).height(); // get height of window;
        $('.fullheight').css('height', wheight);
    }); // on resize


    // https://css-tricks.com/snippets/jquery/smooth-scrolling/
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - topOffset
                    }, 1000);
                    return false;
                }
            }
        });
    });


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
