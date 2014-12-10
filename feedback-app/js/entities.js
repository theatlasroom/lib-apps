/*
* This Api object is used to fetch data from the server
 */
Feedback.module('Entities', function(Entities, Feedback, Backbone, Marionette, $, _){
	
	var baseUrl = "/ci-apps/api/feedback";

	// Feedback Users 	
	Entities.User = Backbone.Model.extend({
		defaults: {},
		initialize: function(){
			//console.log("Posts.Model: init");
		}		
	});

	Entities.Users = Backbone.Collection.extend({
		url: baseUrl + "/users",
		model: Entities.User,
        comparator: function(model){
            return -model.get('ID'); // sort by id
        },

		initialize: function(){
			console.log("Entities.Users: init");
		}
	});

	var users;
	var initUsers = function(){ users = new Entities.Users();};

	// Feedback Posts 	
	Entities.Campus = Backbone.Model.extend({
		defaults: {
			id: null,
			campus: null
		},
		initialize: function(){
			//console.log("Posts.Model: init");
		}
	});

	Entities.Campuses = Backbone.Collection.extend({
		url: baseUrl + "/campuses",
		model: Entities.Campus,
        comparator: function(model){
            return -model.get('ID'); // sort by id
        },

		initialize: function(){
			console.log("Entities.Campuses: init");
		}
	});

	var campuses;
	var initCampuses = function(){ 
		campuses = new Entities.Campuses();
	};

	// Feedback Posts 	
	Entities.Post = Backbone.Model.extend({
		url: "",
		defaults: {},
		initialize: function(){
			//console.log("Posts.Model: init");
		}		
	});

	Entities.Posts = Backbone.Collection.extend({
		// url: baseUrl + "/posts",
		url: "/feedback-app/sample-posts.json",
		model: Entities.Post,
        comparator: function(model){
            return -model.get('id'); // sort by id
        },

		initialize: function(){
			console.log("Entities.Posts: init");
		}
	});

	var posts;
	var initPosts = function(){ posts = new Entities.Posts();};
	
 	// expose the API

	var API = {};


	Entities.fetch = function(dataSource){
		var defer = $.Deferred();
		dataSource.fetch({
			success: function(data){
				defer.resolve(data);
			},
			error: function(data){
				defer.resolve(undefined);
			}			
		});

		// return the promise
		return defer.promise();			
	};

	API.getPosts = function(){
		// returns a posts entity
		if (posts === undefined)
			initPosts();
		// create the deferred objects
		return Entities.fetch(posts);
	};

	API.getCampuses = function(){
		// returns a post entity
		if (campuses === undefined)
			initCampuses();
		
		// create the deferred objects
		return Entities.fetch(campuses);		
	};

	API.getUsers = function(){
		// returns a post entity
		if (users === undefined)
			initUsers();
		// create the deferred objects
		return Entities.fetch(users);			
	};

	Feedback.reqres.setHandler("posts:collection", function(){return API.getPosts();});
	Feedback.reqres.setHandler("campuses:collection", function(){return API.getCampuses();});
	Feedback.reqres.setHandler("users:collection", function(){return API.getUsers();});
});