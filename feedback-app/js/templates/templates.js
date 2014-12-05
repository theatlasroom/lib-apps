(function() {(window["feedback_templates"] = window["feedback_templates"] || {})["posts/layout.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="filters"></div>\n<div id="posts-list"></div>';

}
return __p
}})();
(function() {(window["feedback_templates"] = window["feedback_templates"] || {})["posts/list-item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="small-3 columns"><p>' +
((__t = ( ID )) == null ? '' : __t) +
'</p></div>\n<div class="small-6 columns">\n\t' +
__e( Feedback ) +
'\n</div>\n<div class="small-3 columns">\n\t<button class="button feedback-response-trigger">Respond</button>\n</div>';

}
return __p
}})();