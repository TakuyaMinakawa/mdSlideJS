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

			// this.createTitle().wrapAll(this.wrapTitle);
			this.countHead();
		},
		// createTitle: function() {
		// 	var num,
		// 		$title = this.h1,
		// 		$titleNextAll = $title.nextAll(),
		// 		titleWrapContent = [$title[0]];

		// 	for (var i=0, a=$titleNextAll.length; i<a; i++) {
		// 		if ($($titleNextAll[i]).context.localName === 'h2') {
		// 			num = i;
		// 			break;
		// 		} else if (i === length - 1) {
		// 			num = i;
		// 		}
		// 	}

		// 	for (var j = 0; j < num; j++) {
		// 		titleWrapContent.push($titleNextAll[j]);
		// 	};

		// 	return $(titleWrapContent);
		// },
		countHead: function() {
			var _self = this,
				hoge = [],
				count,
				h2Length = this.h2.length;

			for (var i=0, a=this.h2.length; i<a; i++) {
				var currentH2 = this.h2[i],
					nextAll = $(currentH2).nextAll();

				for (var j = 0; b=nextAll.length; ) {

				}

				if ($(currentH2).context.localName === 'h2') {
					hoge.push(nextAll);
				}
			}
console.log(hoge);
		},
		addPageWrap: function(targetHead, headNum) {
			var num,
				$head = $(this.h2[headNum]),
				$headNextAll = $head.nextAll(),
				wrapContent = [$head[0]];

			for (var i=0, a=$headNextAll.length; i<a; i++) {
				if ($($headNextAll[i]).context.localName === targetHead) {
					num = i;
//					break;
				} else if(i === length) {
					num = i;
				}
			}

			for (var i = 0; i <= num; i++) {
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