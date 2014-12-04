Feedback.module('Posts', function(Posts, App, Backbone, Marionette, $, _){

	Posts.Router = Marionette.AppRouter.extend({
		appRoutes: {		
			"*any":"home"
		}
	});


	Posts.Controller = Marionette.Controller.extend({
		initialize: function(){
			console.log("POSTS CTRL: init");
		},

		home: function(){
			console.log("POSTS CTRL: home route");
		}
	});


	Posts.addInitializer(function(){
		var pc = new Posts.Controller({

		});

		var router = new Posts.Router({
			controller: pc
		});
		console.log(pc);
	});

});