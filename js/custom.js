
(function ($) {
	"use strict";
	//For background slider
	$(function () {

		$('#ri-grid').gridrotator({
			rows: 10,
			columns: 8,
			animType: 'fadeInOut',
			animSpeed: 1000,
			interval: 300,
			step: 1,

			w1024: {
				rows: 20,
				columns: 6
			},
			w768: {
				rows: 10,
				columns: 4
			},
			w480: {
				rows: 10,
				columns: 3
			},
			w320: {
				rows: 10,
				columns: 2
			},
			w240: {
				rows: 10,
				columns: 2
			}
		});

	});



	// for banner height js
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	$('.banner').css({ 'width': windowWidth, 'height': windowHeight - "60" });




	// for portfoli filter jquary
	$(window).load(function () {
		var $container = $('.portfolioContainer');
		$container.isotope({
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});

		$('.portfolioFilter a').click(function () {
			$('.portfolioFilter .current').removeClass('current');
			$(this).addClass('current');

			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
			return false;
		});
	});




	// for portfoli lightbox jquary
	jQuery(function ($) {
		var $chosenSheet,
			$stylesheets = $("a[id^=theme-]");

		// run rlightbox
		$(".lb").rlightbox();
		$(".lb_title-overwritten").rlightbox({ overwriteTitle: true });
	});





	// for skill chat jquary
	$(document).ready(function (e) {
		//var windowBottom = $(window).height();
		var index = 0;
		$(document).scroll(function () {
			var top = $('.technical').height() - $(window).scrollTop();

			if (top < -300) {
				if (index == 0) {

					$('.chart').easyPieChart({
						easing: 'easeOutBounce',
						onStep: function (from, to, percent) {
							$(this.el).find('.percent').text(Math.round(percent));
						}
					});

				}
				index++;
			}
		})
		//console.log(nagativeValue)
	});




	// Somth page scroll
	$(function () {
		$('a[href*=#]:not([href=#])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top - 60
					}, 1000);
					return false;
				}
			}
		});
	});




	// Initialization of the EasyPieChart with barColor set to blue
	$('.chart').easyPieChart({
		barColor: '#22599d', // Sets the bar color to blue.
		// Other options...
		onStep: function (from, to, percent) {
			$(this.el).find('.percent').text(Math.round(percent));
		}
	});

	$(window).load(function () {

		var chart = window.chart = $('.chart').data('easyPieChart');
		$('.js_update').on('click', function () {
			chart.update(Math.random() * 100);
		});
	});

}(jQuery));
