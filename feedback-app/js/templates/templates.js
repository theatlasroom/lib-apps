(function() {(window["feedback_templates"] = window["feedback_templates"] || {})["posts/filters.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form action="/posts/filter">\n    <div class="large-6 columns">\n      <div class="row collapse postfix-round">\n        <div class="small-9 columns">\n          <input type="text" placeholder="Value">\n        </div>\n        <div class="small-3 columns">\n          <a href="#" class="button postfix">Go</a>\n        </div>\n      </div>\n    </div>\n  </div>\t\n</form>\n';

}
return __p
}})();
(function() {(window["feedback_templates"] = window["feedback_templates"] || {})["posts/layout.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="filters" class="column"></div>\n<div id="data-list-pane" class="column"></div>';

}
return __p
}})();
(function() {(window["feedback_templates"] = window["feedback_templates"] || {})["posts/list-item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="small-2 medium-1 text-center columns">#' +
((__t = ( ID )) == null ? '' : __t) +
'</div>\n<div class="small-8 medium-9 columns expandable-text">\n\t' +
((__t = ( Feedback )) == null ? '' : __t) +
'\n</div>\n<div class="small-2 text-center columns">\n\t<button class="button feedback-response-trigger">Respond</button>\n</div>';

}
return __p
}})();