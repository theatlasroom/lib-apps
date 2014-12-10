Feedback.module('Posts', function(Posts, Feedback, Backbone, Marionette, $, _){

	/*Posts.Contstants = {
		campuses: [
			{campus: 'All campuses', id: -1}
			{campus: 'Albury-Wodonga', id: 1},
			{campus: 'Bendigo', id: 2},
			{campus: 'Melbourne', id: 3},
			{campus: 'Melbourne - Collins St', id: 4},
			{campus: 'Melbourne - Franklin St', id: 5},
			{campus: 'Mildura', id: 6},
			{campus: 'Shepparton', id: 7}
		],

		assigned_to: [
			{campus: 'Anyone', id: -1}
			{campus: 'Ezekiel Kigbo', id: 1},
			{campus: 'Andrew Tuft', id: 2},
			{campus: 'Nicole Sackers', id: 3},
			{campus: 'Kerryn Amery', id: 4}
		]
	};*/

	Posts.Router = Marionette.AppRouter.extend({
		appRoutes: {		
			"feedback/:id":"show",
			"*any":"home"
		}
	});


	Posts.Controller = Marionette.Controller.extend({
		initialize: function(){			
			console.log("POSTS CTRL: init");
			// add the layout to the app
			//Feedback.main.show(new Posts.Layout());
			var controller = this;
			
			Feedback.reqres.setHandler('posts:list', function(){
				console.log("PostsController: posts:list");
				controller.home();
			});

			Feedback.reqres.setHandler('posts:respond', function(route){
				console.log("PostsController: posts:respond");
				console.log(route);
				var id = route.replace("/feedback/", "");
				controller.show(id);
			});			

		},

		home: function(){
			console.log("POSTS CTRL: home route");
			var routerObj = new Posts.Router({ controller: this }); // replace with API call posts:router
			routerObj.navigate("/");
			// show the layout
			var pl = new Posts.Layout();			
			Feedback.content.show(pl);

			var filters = new Posts.FilterLayout();	
			pl.filters.show(filters);

			var postsReq = Feedback.reqres.request('posts:collection');
			filters.search.show(new Posts.SearchFilter());

			$.when(postsReq).done(function(posts){
				console.log("Posts fetched");
				console.log(posts);
				pl.main.show(new Posts.List({collection: posts}));								
			});

		},

		show: function(id){
			var routerObj = new Posts.Router({ controller: this }); // replace with API call posts:router
			routerObj.navigate("/feedback/" + id);
			console.log("Fetching feedback item#" + id);
			var postsReq = Feedback.reqres.request('posts:collection');

			$.when(postsReq).done(function(posts){
				console.log(posts);
				var post = posts.get(id);
				console.log(post);
				Feedback.content.show(new Posts.Item({model: post}));				
			});			
		}
	});

	Posts.Layout = Marionette.LayoutView.extend({
		template: "posts/layout.html",

		regions: {
			filters: "#filters",
			main: ".data-list-content"
		},

		initialize: function(){
			console.log("Posts.Layout: init");
		}
	});

	Posts.ListItem = Marionette.ItemView.extend({
		ui: {
			showButton: ".feedback-response-trigger"
		},

		events: {
			'click @ui.showButton':'showItem'
		},

		template: "posts/list-item.html",
		className: "row data-list-item",
		initialize: function(){
			//console.log("ListItemView: init");
		},

		onRender: function(){
			if (this.model.get('responded') == "1")
				$(this.el).addClass("feedback-has-response");
			else
				$(this.el).addClass("feedback-needs-response");
		},

		showItem: function(e){
			var route = $(e.target).attr('href')
			Feedback.reqres.request('posts:respond', route);
		}
	});

	Posts.List = Marionette.CollectionView.extend({
		className: "column",		
		childView: Posts.ListItem,
		className: "data-list",
		initialize: function(){
			console.log("ListView: init")
		},

		onBeforeRender: function(){
			$(this.el).hide();
		},

		onRender: function(){
			this.$('.expandable-text').expander();
			$(this.el).fadeIn(1000);
		}	
	});

	Posts.Item = Marionette.ItemView.extend({
		tagName: "article",
		id: "feedback-item",
		className: "small-12 small-centered column",

		ui: {
			back: '.back',
			cancel: '.cancel',
			save: '.save'
		},

		events: {
			'click @ui.back': 'showList'
		},

		template: "posts/item.html",
		initialize: function(){
			console.log("Posts.Item: init");
			console.log(this.model);
		},

		showList: function(){
			Feedback.reqres.request('posts:list');
		}
	});	

	Posts.UserFilterItem = Marionette.ItemView.extend({
		tagName: "li",
		template: "posts/user-filter-item.html",
		initialize: function(){
			//console.log("CampusFilterItemView: init");
		}
	});

	Posts.UserFilter = Marionette.CompositeView.extend({
		template: 'posts/user-filter.html',
		childView: Posts.UserFilterItem,
		childViewContainer: "ul#filter-user",

		ui: {
			button: 'button',			
			user: "#filter-user li"
		},

		events: {
			'click @ui.user':'changeUser'
		},

		initialize: function(){
			console.log("UserFilterView: init");
			this.model = !_.isUndefined(this.model) ? this.model : new Backbone.Model();			
			this.model.set('default_value', 'All Users');
			this.collection.unshift({id: -1, fullname: 'All Users'});			
		},

		changeUser: function(e){
			console.log(e);
			var user_id = $(e.target).data('user-id');
			var user = this.collection.get(user_id);
			$(this.ui.button).html("Assigned to: <br/>" + user.get('fullname'));
			Feedback.reqres.request('posts:filter:location', user);
		},

		onShow: function(){
			Feedback.reqres.request('ui:widget:rebind', 'dropdown');
		}
	});	

	Posts.SearchFilter = Marionette.ItemView.extend({
		className: "column",
		template: "posts/search-filter.html",

		initialize: function(){

		}
	});

	Posts.FilterLayout = Marionette.LayoutView.extend({
		template: "posts/filter-layout.html",
		regions: {
			search: "#search-filter-region",
			campus: "#campus-filter-region",
			user: "#user-filter-region"
		},
		initialize: function(){
			console.log("FilterView: init");
		},

		onRender: function(){
			Feedback.reqres.request('ui:widget:rebind', 'dropdown');
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