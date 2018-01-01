/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

/*jslint browser: true*/
/*global $, jQuery*/

// Come back to this when we land. Need to find how to continuously check scoll height when scrolls happen.

var scrollTop = 0;
var bool = false;
var boolCount = 0;

$(document).ready(function(){
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        
        if($(window).scrollTop() >= 75) {
            bool = true;
            
            if (bool == true) {
                if (boolCount == 0) {
                    $("#triDiv").css("opacity", "1");
                    $("#triDiv").animate({top: '0'},600);
                    $("#triLogo").animate({top: '0.3%'},600); 
                    $("#mainNav").animate({top: '-20%'},600);
                    
                }
                
                boolCount = 1;
            }
        }
        
        else {
            bool = false;
            
            if (bool == false) {
                if(boolCount == 1) {
                    $("#triDiv").animate({top: '-10%'},600);
                    $("#triLogo").animate({top: '-9.3%'},600);
                    $("#triDiv").delay(1).animate({opacity: "0"});
                    $("#mainNav").animate({top: '0'},600);
                }
                
                boolCount = 0
            }
            
            
        }
        
    });
});

//$(document).ready(function() {
//    $(window).scroll(function(){
//      console.log("scrollTop is " + $(window).scrollTop());  
//    })
//});


(function($) {
	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				mode: 'fade',
				noOpenerFade: true,
				alignment: 'center',
				detach: false
			});

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#navPanel" class="toggle"></a>' +
						'<span class="title">' + $('#logo').html() + '</span>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #navPanel, #page-wrapper')
						.css('transition', 'none');

	});

})(jQuery)