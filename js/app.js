'use strict';

var Feedback = Feedback || {};

Feedback = new Marionette.Application();

Feedback.addRegions({
	nav: "nav",
	main: "#main"
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