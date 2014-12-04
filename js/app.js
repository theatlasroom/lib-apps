'use strict';

var Feedback = Feedback || {};

// override the marionette renderer to use our template manager
Backbone.Marionette.Renderer.render = function(template, data){
	console.log("Rendering new data with template " + template);
	console.log(data);
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

$(function(){
	$(document).foundation();
	Feedback.start();
});

