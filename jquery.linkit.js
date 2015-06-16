/**
 * @name:		LinkIt
 * @author:		Gleb Zaveruha
 * @version:	0.1.0
 * @license: 	MIT
 */

(function($) {
	$.fn.linkIt = function(options) {
		// Default Setting

		var settings = $.extend({
			href : null,
			text : null,
			target : '_self'
		}, options);

		//Validation
		if (settings.href == null) {
			console.log('You need a href option for LinkIt to work');
			return this;
		}

		return this.each(function() {
			var object = $(this);
			if (settings.text == null) {
				settings.text = object.text();
			}
			object.wrap('<a href="'+settings.href+'" target="'+settings.target+'"></a>').text(settings.text);
		});
	};
})(jQuery);
