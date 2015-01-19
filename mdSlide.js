/*!
 * jquery.mdSlide.js v0.1 - jQuery plugin.
 * License: MIT
 */
;(function ($) {
	var mdSlideJS = function(){
		this.h2 = $('h2');
		this.wrapPage = '<div class="jscWrapPage wrapPage"></div>';

		this.init();
	};
	mdSlideJS.prototype = {
		init: function() {

			this.countHead();
		},
		countHead: function() {
			var _self = this,
				headLength = this.h2.length;

			for (var i=0, a=headLength; i<a; i++) {
				_self.addPageWrap('h2', i).wrapAll(this.wrapPage);
			};
		},
		addPageWrap: function(targetHead, headNum) {
			var num,
				$head = $(this.h2[headNum]),
				$headNextAll = $head.nextAll(),
				wrapContent = [$head[0]];

			for (var i=0, a=$headNextAll.length; i<a; i++) {
				if ($($headNextAll[i]).context.localName === targetHead) {
					num = i
					break
				} else if(i === length - 1) {
					num = i
				}
			};

			for (var i = 0; i < num; i++) {
				wrapContent.push($headNextAll[i]);
			};

			return $(wrapContent);
		},
		createPage: function() {

		},
		bindEvents: function() {

		}
	};
	new mdSlideJS ();
})(jQuery);