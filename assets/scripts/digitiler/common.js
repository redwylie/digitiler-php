$("document").ready (function(){	
	setProps();

});

function setProps(){
	var currentYear = new Date().getFullYear();
	$("#year").text(currentYear);

	var width = $(window).width()
  	$('#openseadragon').css({'width' : width})

	var height = $(window).height()
	$('#openseadragon').css({'height' : height})

	
}