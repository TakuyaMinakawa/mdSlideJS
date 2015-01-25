/*!
 * jquery.mdSlide.js v0.1 - jQuery plugin.
 * License: MIT
 */
;(function ($) {
	var mdSlideJS = function(){
		this.h1 = $('h1');
		this.h2 = $('h2');
		this.wrapTitle = '<div class="jscWrapTitle wrapTitle"></div>';
		this.wrapPage = '<div class="jscWrapPage wrapPage"></div>';

		this.init();
	};
	mdSlideJS.prototype = {
		init: function() {

			this.createTitle().wrapAll(this.wrapTitle);
			this.countHead();
		},
		createTitle: function() {
			var num,
				$title = this.h1,
				$titleNextAll = $title.nextAll(),
				titleWrapContent = [$title[0]];

			for (var i=0, a=$titleNextAll.length; i<a; i++) {
				if ($($titleNextAll[i]).context.localName === 'h2') {
					num = i;
					break;
				} else if (i === length - 1) {
					num = i;
				}
			}

			for (var j = 0; j < num; j++) {
				titleWrapContent.push($titleNextAll[j]);
			}

			return $(titleWrapContent);
		},
		countHead: function() {
			var _self = this,
				headLength = this.h2.length;

			for (var i=0, a=headLength; i<a; i++) {
				_self.addPageWrap('h2', i).wrapAll(this.wrapPage);
			}

		},
		addPageWrap: function(targetHead, headNum) {
			var num,
				$head = $(this.h2[headNum]),
				$headNextAll = $head.nextAll(),
				wrapContent = [$head[0]];

			for (var i=0, a=$headNextAll.length; i<a; i++) {
				if ($($headNextAll[i]).context.localName === targetHead) {
					num = i;
					break;
				} else if (i === length - 1) {
					num = i;
				}
			}

			for (var j = 0, b=num; j < b; j++) {
				wrapContent.push($headNextAll[i]);
			}

			return $(wrapContent);
		},
		createPage: function() {

		},
		bindEvents: function() {

		}
	};
	new mdSlideJS ();
})(jQuery);