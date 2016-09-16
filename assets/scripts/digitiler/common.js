$("document").ready (function(){	
	setProps();

});

function setProps(){

	$('.hidden-info').hide();
	$('.show-info').click(function() {
		$('.hidden-info').toggle();
	});

	var currentYear = new Date().getFullYear();
	$("#year").text(currentYear);

	var width = $(window).width();
	width = width - 30;
  	$('#openseadragon').css({'width' : width})

	var height = $(window).height();
	height = height - 120;
	$('#openseadragon').css({'height' : height})

	
}