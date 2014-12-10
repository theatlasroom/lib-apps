(function() {(window["feedback_templates"] = window["feedback_templates"] || {})["posts/campus-filter-item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href="#" data-campus-id="' +
((__t = ( id )) == null ? '' : __t) +
'">' +
((__t = ( campus )) == null ? '' : __t) +
'</a>';

}
return __p
}})();
(function() {(window["feedback_templates"] = window["feedback_templates"] || {})["posts/campus-filter.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<button href="#" data-dropdown="filter-campus" aria-controls="filter-campus" aria-expanded="false" class="button dropdown">\r\nLocation: <br/>' +
((__t = ( default_value )) == null ? '' : __t) +
'\r\n</button>\r\n<ul id="filter-campus" data-dropdown-content class="f-dropdown" aria-hidden="true" tabindex="-1">    \r\n</ul>';

}
return __p
}})();
(function() {(window["feedback_templates"] = window["feedback_templates"] || {})["posts/filter-layout.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="small-12 columns" id="search-filter-region"></div>\r\n<!--<div class="small-3 columns" id="campus-filter-region"></div>-->\r\n<!--<div class="small-4 columns" id="user-filter-region"></div>-->';

}
return __p
}})();
(function() {(window["feedback_templates"] = window["feedback_templates"] || {})["posts/item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<nav>\r\n\t<button class="back" href="/">\r\n\t\t<span class="fa fa-angle-left"></span>\r\n\t\t&nbsp;Return to list\r\n\t</button>\r\n</nav>\r\n<header class="row">\r\n\t<h4 class="small-12 columns">Feedback item#' +
((__t = ( id )) == null ? '' : __t) +
'</h4>\r\n</header>\r\n<section class="feedback-post row">\r\n\t<div class="feedback-post-content small-12">\r\n\t\t' +
((__t = ( feedback )) == null ? '' : __t) +
'\r\n\t</div>\r\n\t<hr>\r\n\t<div class="feedback-post-meta small-12">\r\n\r\n\t</div>\r\n</section>\r\n<section class="feedback-response row">\r\n\t<h4 class="small-12 columns">Response</h4>\r\n\t<div class="feedback-response-content small-8 columns">\r\n\t\t<textarea rows="8" name="response">' +
((__t = ( response )) == null ? '' : __t) +
'</textarea>\r\n\t\t<br>\r\n\t\t<button class="button">\r\n\t\t\tNotes and actions\r\n\t\t</button>\t\t\r\n\t\t<button class="button">\r\n\t\t\tView / Edit ratings\r\n\t\t</button>\t\t\r\n\t</div>\r\n\t<div class="feedback-response-actions small-4 columns">\r\n\r\n\t\t';
 if (!Number(emailed_response) && email.length > 0){ ;
__p += '\r\n\t\t<div class="switch round small">\r\n\t\t\t<input id="emailedResponse" type="checkbox" name="emailed_response">\r\n\t\t\t<label for="emailedResponse"></label>\r\n\t\t\t<span>Email this to the user?</span>\r\n\t\t</div>\t\r\n\t\t';
 } else { ;
__p += '\r\n\t\t\t';
 if (emailed_response){ ;
__p += '\r\n\t\t\t<p>A response has been sent</p>\r\n\t\t\t';
 } ;
__p += '\r\n\t\t';
 } ;
__p += '\r\n\r\n\t\t';
 if (permission_to_post){ ;
__p += '\r\n\t\t<div class="switch round small">\r\n\t\t\t<input id="postedOnline" type="checkbox" name="posted_online">\r\n\t\t\t<label for="postedOnline"></label>\r\n\t\t\t<span>Post this online?</span>\r\n\t\t</div>\r\n\t\t';
 } ;
__p += '\t\t\r\n\t</div>\r\n</section>\r\n<footer class="row">\r\n\t<div class="text-right small-12 columns">\r\n\t\t<button href="/" class="button cancel">\r\n\t\t\t<span class="fa fa-close"></span>\r\n\t\t\t&nbsp;Cancel\r\n\t\t</button>\r\n\t\t<button href="/" class="button save">\r\n\t\t\t<span class="fa fa-save"></span>\r\n\t\t\t&nbsp;Save changes\r\n\t\t</button>\t\t\r\n\t</div>\r\n</footer>';

}
return __p
}})();
(function() {(window["feedback_templates"] = window["feedback_templates"] || {})["posts/layout.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="filters" class="row"></div>\r\n<div id="data-list-pane" class="row columns">\r\n\t<div class="data-list-header row">\r\n\t\t<div class="small-2 medium-1 columns text-center">\r\n\t\t\t<span class="fa fa-caret-down"></span>\r\n\t\t\t&nbsp;ID\r\n\t\t</div>\r\n\t\t<div class="small-10 medium-11 columns">\r\n\t\t\t<span class="fa fa-caret-down"></span>\r\n\t\t\t&nbsp;Feedback\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="data-list-content row">\r\n\t</div>\r\n</div>\r\n';

}
return __p
}})();
(function() {(window["feedback_templates"] = window["feedback_templates"] || {})["posts/list-item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="small-2 medium-1 text-center columns">#' +
((__t = ( id )) == null ? '' : __t) +
'</div>\r\n<div class="small-8 medium-9 columns expandable-text">\r\n\t' +
((__t = ( feedback )) == null ? '' : __t) +
'\r\n</div>\r\n<div class="small-2 text-center columns">\r\n\t<button href="/feedback/' +
((__t = ( id )) == null ? '' : __t) +
'" class="button feedback-response-trigger">\r\n\t\tRespond\r\n\t\t&nbsp;<span class="fa fa-mail-reply"></span>\r\n\t</button>\r\n</div>';

}
return __p
}})();
(function() {(window["feedback_templates"] = window["feedback_templates"] || {})["posts/search-filter.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row collapse postfix-round">\r\n\t<div class="small-10 medium-11 columns">\r\n\t\t<input type="text" placeholder="Filter the feedback">\r\n\t</div>\r\n\t<div class="small-2 medium-1 columns">\r\n\t\t<a href="#" class="button postfix">\r\n\t\t\tFilter\r\n\t\t\t&nbsp;<span class="fa fa-filter"></span>\r\n\t\t</a>\r\n\t</div>\r\n</div>';

}
return __p
}})();
(function() {(window["feedback_templates"] = window["feedback_templates"] || {})["posts/user-filter-item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href="#" data-user-id="' +
((__t = ( id )) == null ? '' : __t) +
'">' +
((__t = ( fullname )) == null ? '' : __t) +
'</a>';

}
return __p
}})();
(function() {(window["feedback_templates"] = window["feedback_templates"] || {})["posts/user-filter.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<button href="#" data-dropdown="filter-user" aria-controls="filter-user" aria-expanded="false" class="button dropdown small-12">\r\nAssigned to: <br/>' +
((__t = ( default_value )) == null ? '' : __t) +
'\r\n</button>\r\n<ul id="filter-user" data-dropdown-content class="f-dropdown" aria-hidden="true" tabindex="-1">    \r\n</ul>';

}
return __p
}})();