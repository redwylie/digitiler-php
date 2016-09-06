$("document").ready (function(){	
	setProps();

});

function setProps(){
	var currentYear = new Date().getFullYear();
	$("#year").text(currentYear);

	
}