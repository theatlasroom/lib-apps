'use strict';

var Feedback = Feedback || {};

// override the marionette renderer to use our template manager
Backbone.Marionette.Renderer.render = function(template, data){
	console.log("Rendering new data with template " + template);
	//console.log(data);
	return feedback_templates[template](data);
};

Feedback = new Marionette.Application();

Feedback.addRegions({
	nav: "nav",
	main: "#main",
	content: "#content"
});

Feedback.on('initialize:after', function(){
	console.log("init after");
});

Feedback.on('start', function(){
	console.log("app start");
	Backbone.history.start();
});

Feedback.reqres.setHandler('ui:widget:rebind', function(elem){
	console.log("Rebind some ui elements: " + elem);
	// rebinds / sets up ui elements after ajax request
	if (typeof elem !== undefined)
		$(document).foundation(elem,'reflow');
	else
		$(document).foundation('reflow');		
});


$(function(){
	$(document).foundation(); // run foundation
	Feedback.start();


	// fixes an issue with foundation 5 not closing dropdowns when you select an elemnts
	$("body").on('click','[data-dropdown-content] a', function(){
	  	var content = $(this).parent().parent();
	  	var id = content.attr('id');
		$('[data-dropdown=' + id + ']').trigger('click');
	});

});

