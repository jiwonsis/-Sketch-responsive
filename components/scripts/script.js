$(function(){
	var wheight = $(window).height(); //Height of window;
	$('.fullheight').css('height', wheight);

	$(window).resize(function(){
		var wheight = $(window).height(); //Height of window;
		$('.fullheight').css('height', wheight);
	});
});