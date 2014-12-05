Feedback.module('Posts', function(Posts, App, Backbone, Marionette, $, _){

	Posts.Router = Marionette.AppRouter.extend({
		appRoutes: {		
			"*any":"home"
		}
	});

	Posts.Controller = Marionette.Controller.extend({
		initialize: function(){
			console.log("POSTS CTRL: init");
			// add the layout to the app
			//Feedback.main.show(new Posts.Layout());
		},

		home: function(){
			console.log("POSTS CTRL: home route");
			var pc = new Posts.Collection();
			var pl = new Posts.Layout();

			Feedback.content.show(pl);

			pc.fetch().then(function(){
				pl.list.show(
					new Posts.ListView({collection:pc})
				);
			});
		}
	});

	Posts.Layout = Marionette.LayoutView.extend({
		template: "posts/layout.html",

		regions: {
			filters: "#filters",
			list: "#posts-list"
		},

		initialize: function(){
			console.log("Posts.Layout: init");
		}
	});

	Posts.Model = Backbone.Model.extend({
		url: "",
		defaults: {},
		initialize: function(){
			//console.log("Posts.Model: init");
		}		
	});

	Posts.Collection = Backbone.Collection.extend({
		url: "/sample-posts.json",
		model: Posts.Model,
        comparator: function(model){
            return -model.get('ID'); // sort by id
        },

		initialize: function(){
			console.log("Posts.Collection: init");
		}
	});

	Posts.ListItemView = Marionette.ItemView.extend({
		template: "posts/list-item.html",
		className: "row feedback-list-item",
		initialize: function(){
			//console.log("ListItemView: init");
		},

		onRender: function(){
			console.log("Rendered");
			if (this.model.get('Responded') == "1")
				$(this.el).addClass("feedback-has-response success");
			else
				$(this.el).addClass("feedback-needs-response warning");
		}
	});

	Posts.ListView = Marionette.CollectionView.extend({
		childView: Posts.ListItemView,
		className: "feedback-list",
		initialize: function(){
			console.log("ListView: init")
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