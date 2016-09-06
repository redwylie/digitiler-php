$("document").ready (function(){	
	setProps();
	enableStudyNavigation();
});

function setProps(){
	var currentYear = new Date().getFullYear();
	$("#year").text(currentYear);

	$('#studyTabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});

	$('.btn-more-filters').click(function (e) {
        console.log(".btn-more-filters clicked...");
	  e.preventDefault()
	  $('#more-filters').toggle();
	});

	var keywordsEngine = new Bloodhound({
		datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		remote: {
			url: '/search/suggest/%QUERY',
			wildcard: '%QUERY'
		}
	});

	$('#nav-search').typeahead({
			minLength: 2,
			highlight: true,
			hint: false // If the input should display the top result hinted in the input box.
		}, {
			name: 'keyword-search',
			display: 'text',
			source: keywordsEngine
		});

	keywordsEngine.initialize();

	$('#nav-search').keypress(function(e) {
	    if(e.which == 13) {
	    	e.preventDefault();
			var value = $(this).val();
			console.log("nav-search.value: " + value);
			if (value) {
				$(location).attr('href','/search?q=' + encodeURI(value));
			} else {
				$(location).attr('href','/search');
			}
	    }
	});

	$('.carousel').carousel({
	  interval: 12000
	})

	
	// *********************************************************** //
	// **** DEMO ONLY JS ***************************************** //
	// *********************************************************** //
	$('.development-layout-link').click(function (e) {
		e.preventDefault();
		$('#demoModal').modal('show');
	});

	$(document).on("click", ".development-layout-link", function(e) {
		e.preventDefault();
		$('#demoModal').modal('show');
	});

	$('.development-link-category').click(function (e) {
		e.preventDefault();
		$('#categoriesModal').modal('show');
	});

	$('.development-link-eligible').click(function (e) {
		e.preventDefault();
		$('#eligibleModal').modal('show')
	});

	$('.development-link-post-study').click(function (e) {
		e.preventDefault();
	  	$('#postModal').modal('show');
	});

	$('#postModal').on('hidden.bs.modal', function (e) {
  		document.location.href = '/post'
	});
}

function enableStudyNavigation() {
    $( "body" ).on( "click", ".study-card", function() {
        console.log("enableStudyNavigation.click");
        var studyId = $(this).attr("study");

        if (studyId && studyId.length > 0) {
            window.location = "/study/" + studyId;
        }



    });
}
