jQuery(function() {

	jQuery(document).ready(function() {
		svg4everybody();
		// lazy load
			$('[data-src]').Lazy();
		
		// end lazy load

		// to fixed menu
			// var headerHeight;
			// $(window).scroll(function() {
			// 	headerHeight = $('.header').height();
			// 	if($(this).scrollTop() > headerHeight){
			// 		$('.header').addClass('header--fixed');
			// 		$('body').css('padding-top', headerHeight + 'px');
					
			// 	}else{
			// 		$('.header').removeClass('header--fixed');
			// 		$('body').css('padding-top', 0);
			// 	}
			// });
			var options = {
				offset: 100,
				offsetSide: 'top',
				classes: {
					clone:   'banner--clone header--fixed',
					stick:   'banner--stick',
					unstick: 'banner--unstick'
				},
				onInit: function () {
					console.log(this);
					$(this.clonedElem).find('[data-src]').Lazy();
				},
			};
			var header = new Headhesive('.header', options);
		// end to fixed menu

		// mob-menu toggle
			$(".toggle-mnu").click(function() {
				$(this).toggleClass("on");
				$(".header-bottom .header-menu").stop(true, true).fadeToggle(100);
				var $html = $('html'); 
				$html.hasClass('freezed') ? $html.removeClass('freezed') : $html.addClass('freezed');
				return false;
			});

		// end mob-menu toggle


		// dropdown
			$('.header-loc select').dropdown({
				toggleText: $('.header-loc select option').first().text(), //текст в главном поле, по умолчанию
				autoToggle: true,
				autoToggleHTML: true,
				margin: 0,
				autoResize: 0,
				titleText: '',
				collision: false
			});
		// end dropdown

		// slick
			$('.slider-general').slick({
				// arrows: false,
				lazyLoad: 'ondemand',
				dots: false
				// prevArrow: $('.main-slider .slider-handlers__prev .icon'),
				// nextArrow: $('.main-slider .slider-handlers__next .icon')
			});

			$('.cards-slider').slick({
				slidesToShow: 4,
  			slidesToScroll: 1,
  			dots: true,
  			lazyLoad: 'ondemand',
				infinite: true,
				appendDots: $('.cards-slider-wrapper .slider-handlers__dots'),
				prevArrow: $('.cards-slider-wrapper .slider-handlers__prev .icon'),
				nextArrow: $('.cards-slider-wrapper .slider-handlers__next .icon'),
				responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 561,
					settings: {
						slidesToShow: 1
					}
				}
				]
			});

			$('.histories-reviews').slick({
				lazyLoad: 'ondemand',
				infinite: true,
				arrows: false,
				asNavFor: '.histories-logos'
			});

			$('.histories-logos').slick({
				lazyLoad: 'ondemand',
				infinite: true,
				asNavFor: '.histories-reviews',
				slidesToShow: 7,
				slidesToScroll: 1,
				focusOnSelect: true,
				centerMode: true,
				centerPadding: 0,
				prevArrow: $('.histories-logos-wrapper .slider-handlers__prev'),
				nextArrow: $('.histories-logos-wrapper .slider-handlers__next'),
				responsive: [
				{
					breakpoint: 1100,
					settings: {
						slidesToShow: 6
					}
				},
				{
					breakpoint: 960,
					settings: {
						slidesToShow: 5
					}
				},
				{
					breakpoint: 780,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint: 650,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 375,
					settings: {
						slidesToShow: 1
					}
				}
				]

			});

			$('.managers-slider').slick({
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				lazyLoad: 'ondemand',
				prevArrow: $('.managers-bottom .slider-handlers__prev'),
				nextArrow: $('.managers-bottom .slider-handlers__next'),
				responsive: [
				{
					breakpoint: 1100,
					settings: {
						slidesToShow: 3
					}
				}
				]

			});

			$('.card-display').slick({
				lazyLoad: 'ondemand',
				infinite: true,
				arrows: false,
				fade: true,
				asNavFor: '.card-display-nav'
			});

			$('.card-display-nav').slick({
				lazyLoad: 'ondemand',
				infinite: true,
				asNavFor: '.card-display',
				slidesToShow: 3,
				slidesToScroll: 1,
				focusOnSelect: true,
				centerMode: true,
				centerPadding: 0
			});
		// end slick

		// tabs

			var $tabs = $('.tabs__link');

			$tabs.on('click', function(e) {
				e.preventDefault();
				var $th = $(this),
				$href = $th.attr('href'),
				$parent = $th.parent(),
				$currentContentTab = $('.tabs__content').find($href);

				$parent.addClass('tabs__item--active')
				.siblings()
				.removeClass('tabs__item--active');

				$currentContentTab
					.addClass('active')
					.siblings()
					.removeClass('active');

				$currentContentTab.find('.cards-chars__toggle')
					.addClass('active')
					.siblings()
					.find('.cards-chars__toggle')
					.removeClass('active');
			});


			$('.cards-chars__toggle').click(function() {
				var $th = $(this),
						$thParent = $th.closest('.tabs__item'),
						$tabsTop = $('.tabs__content').offset().top,
						heightHeader = $('.header').outerHeight(),
						$thMirrorHref = '#' + $thParent.attr('id'),
						$thMirror = $('.card-chars__tabs .tabs__list').find('[href=' + $thMirrorHref +']');
				

				$('html, body').animate({scrollTop: $tabsTop - heightHeader - 30}, 100);
				
				$th.toggleClass('active');
				$thParent
					.toggleClass('active')
					.siblings()
					.removeClass('active')
					.find('.cards-chars__toggle')
					.removeClass('active');

				$thMirror
					.closest('.card-chars__tabs-item')
					.addClass('tabs__item--active')
					.siblings()
					.removeClass('tabs__item--active');

				return false;
			});

		// end tabs


	});
});
