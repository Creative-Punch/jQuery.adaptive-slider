/* jshint debug: true, expr: true */
/* global RGBaster:false */

(function($) {
	'use strict';

	var itemSelector = '.slider-item';

	var DEFAULTS = {
		opacity: 1,
		normalizedTextColors: {
			light: '#fff',
			dark: '#000'
		},
	};

	$.fn.adaptiveSlider = function(options) {
		var $slider = $(this);
		var opts = $.extend({}, DEFAULTS, options);

		var isActive = false;
		$slider.find('li').each(function() {
			$(this).addClass(itemSelector.replace('.',''));

			if(!isActive) {
				$(this).addClass('active');
				isActive = true;
			}
		});

		$slider.prepend('<li unselectable class="slider-nav next">&gt;</li>');
		$slider.prepend('<li unselectable class="slider-nav prev">&lt;</li>');

		// Image info
		var images;
		var currentImage;
		var nextImage;
		var prevImage;

		var firstImage = true; // For the slider navigation coloring

		// Initialize the image variables.
		images = $slider.find(itemSelector);
		currentImage = images.first();
		nextImage = currentImage.next(itemSelector);
		// The previous image of the first image is the last image.
		prevImage = images.last();

		$slider.find(itemSelector + ' figure img').each(function() {
			var $this = $(this);

			var handleColors = function() {
				var img = $this[0];
				
				RGBaster.colors(img, function(colors) {
					$this.trigger('color-found', {
						color: colors.dominant,
					});
				}, 20);
			};

			// Helper function to calculate yiq - http://en.wikipedia.org/wiki/YIQ
			var getYIQ = function(color) {
				var rgb = color.match(/\d+/g);
				return ((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000;
			};

			var getNormalizedTextColor = function(color) {
				return getYIQ(color) >= 128 ? opts.normalizedTextColors.dark : opts.normalizedTextColors.light;
			};

			var rgbToRgba = function(rgb, alpha) {
				rgb = rgb.replace(')', ',' + alpha + ')');
				rgb = rgb.replace('rgb', 'rgba');
				return rgb ? rgb : null;
			};

			$this.on('color-found', function(event, data) {
				var $colorme = $this.siblings('figcaption');
				
				if($colorme.length) {
					var bgcolor = data.color;

					if (opts.opacity) {
						bgcolor = rgbToRgba(bgcolor, opts.opacity);
					}

					$colorme.css({
						backgroundColor: bgcolor,
						color: getNormalizedTextColor(data.color)
					});

					if($('.slider-item.active figure figcaption').attr('style') && firstImage) {
						$('.slider-nav').css({
							backgroundColor : bgcolor,
							color : getNormalizedTextColor(data.color)
						});

						firstImage = false;
					}
				}
			});

			handleColors();
		});

		$slider.on('click', '.slider-nav.next', function(e) {
			e.preventDefault();

			nextImage.toggleClass('active', true);
			currentImage.toggleClass('active', false);

			prevImage = currentImage;
			currentImage = nextImage;
			nextImage = nextImage.next(itemSelector);

			if (!nextImage.length) {
				nextImage = images.first();
			}

			var figcaption = currentImage.find('figcaption');
			var activeBgColor = figcaption.css('background-color');
			var activeColor = figcaption.css('color');
			$('.slider-nav').css({
				backgroundColor : activeBgColor,
				color : activeColor
			});

		});

		$slider.on('click', '.slider-nav.prev' , function(e) {
			e.preventDefault();

			prevImage.toggleClass('active', true);
			currentImage.toggleClass('active', false);

			nextImage = currentImage;
			currentImage = prevImage;
			prevImage = prevImage.prev(itemSelector);

			if (!prevImage.length) {
				prevImage = images.last();
			}

			var figcaption = currentImage.find('figcaption');
			var activeBgColor = figcaption.css('background-color');
			var activeColor = figcaption.css('color');
			$('.slider-nav').css({
				backgroundColor : activeBgColor,
				color : activeColor
			});

		});

	};

})(jQuery);