jQuery(function() {
	jQuery(document).ready(function() {
		// section Header
			var hHoptions = {
				offset: $('.header').height(),
				offsetSide: 'top',
				classes: {
					clone:   'banner--clone header-top--fixed',
					stick:   'banner--stick',
					unstick: 'banner--unstick'
				},
				 onUnstick: function () {
				 		menuHamburgerClose();
				 }
				// onInit: function () {
				// 	$(this.clonedElem).find('.menu-icon').on('click', menuHamburgerClick);
				// },
			};

			var header = new Headhesive('.header-top', hHoptions);

			$('.menu-icon').on('click', menuHamburgerClick);

			function menuHamburgerClick() {
				var $th = $(this),
					$iconParent = $th.closest('.header-top');
				
				$('.menu-icon').toggleClass('clicked');

				if(screen.width >= 992){
					$('.header-top--fixed').toggleClass('banner--stick');
					$('.header-top--fixed').removeClass('banner--unstick');
					

					return false;
				}
					
				$('html').toggleClass('menu-opened');
				$iconParent.toggleClass('menu-opened');
				$('.header-top--fixed').removeClass('banner--unstick');
				// $iconParent.siblings().removeClass('menu-opened');


			}

			function menuHamburgerClose() {
				$('.menu-icon').removeClass('clicked');
			}

			$(window).scroll(function() {
					var headerHeight = $('.header').height();

					if($(this).scrollTop() > headerHeight){
						$('.header-top--fixed .wrapper').addClass('hamburger-hidden');
					}else{
						
						$('.header-top--fixed .wrapper').removeClass('hamburger-hidden');
					}
			});

			var $menuLinks = $('.header-menu ul li a');
				$menuLinks.click(function(e){
				if(screen.width > 768){

					e.preventDefault();
					var location = $(this).attr('href'), //секция с id, равным href текущей ссылки
						headerFixedHeight = $('.banner--clone').height();
						sectionCoord = $(location).offset().top - headerFixedHeight;


					$('html, body').animate({scrollTop: sectionCoord}, 800);
				}
				$('.header-top').removeClass('menu-opened');
				$('html').removeClass('menu-opened');
				$('.menu-icon').removeClass('clicked');
			});
	
		// end section Header

		// section we-work

			(function howWorkdHandler(index) {
				var $counter = $('.we-work-informer__counter'),
					$tabs = $('.we-work-informer__handler .tabs__link'),
					$informerTextItems = $('.we-work-informer__text .tabs__item'),
					$buttons = $('.we-work-informer__handler .tabs__list .tabs__item'),
					timer,
					index  = 0,
					indexMax = $buttons.length,
					_self = this;

				this.init = function() {
					this.events();
					this.timer();				
				},

				this.events = function() {
					$tabs.on('click', this.tabsClick);
				},
				this.tabsClick = function(e) {
					e.preventDefault();
					var $th = $(this),
						thIndex = $tabs.index($th);

					_self.indexProgress(thIndex);
				},

				this.timer = function() {
					timer = setInterval(_self.indexProgress, 5000);
				},
				
				this.indexProgress = function(transitionedIndex) {
					if(transitionedIndex !== undefined){
						index = transitionedIndex;
					}else{
						
						index++;
						if(index > indexMax - 1){
							index = 0;
						}	
					}

					this.counterRender();
					this.buttonsRender();
					this.textContentRender();
				},
				this.counterRender = function() {
					$counter.text(+(index + 1));
				},
				this.buttonsRender = function() {
					$buttons.eq(index).addClass('tabs__item--active')
						.siblings()
						.removeClass('tabs__item--active');
				},
				this.textContentRender = function() {
					$informerTextItems.eq(index)
						.removeClass('we-work-hidden')
						.siblings()
						.addClass('we-work-hidden');
				}

				this.init();
			})();
			
		// end section we-work

		// section .experience
			var $tabs = $('.tabs-default .tabs__link');

			$tabs.on('click', function(e) {
				e.preventDefault();
				var $th = $(this),
					$href = $th.attr('href'),
					$parent = $th.parent(),
					$parentTabs = $th.closest('.tabs');

				$parent.addClass('tabs__item--active')
						.siblings()
						.removeClass('tabs__item--active');
								
				$parentTabs.find($href)
					.addClass('active')
					.siblings()
					.removeClass('active');
			});

			$('.tabs-link__mob-toggle').click(function() {
				var $th = $(this),
					$parentItem = $th.closest('.tabs__item');

				$parentItem.toggleClass('active')
					.siblings()
					.removeClass('active');

				return false;

			});
		// end section .experience

		// section stars
		$('.stars-slider').slick({
			slidesToScroll: 1,
			slidesToShow: 4,
			responsive: [

			{
				breakpoint: 1101,
				settings: {

					slidesToShow: 3,

				}	
			},
			{
				breakpoint: 992,
				settings: {

						slidesToShow: 2

				}	
			},
			{
				breakpoint: 600,
				settings: {

						slidesToShow: 1

				}	
			}
			]
		});
		// end section stars

		// section reviews
			$('.reviews-slider').slick({
				responsive: [
					
					{
						breakpoint: 560,
						settings: {
							
							slidesPerRow: 2

						}	
					},
					{
						breakpoint: 400,
						settings: {
							
							rows: 1,
							slidesPerRow: 1

						}	
					}
				]
			});
		// end section reviews

		// section faq
			// Accordeon-----------------------------------
				$('.acordeon-link').click(function(e) {
					e.preventDefault();
					var $currentItem = $(this).closest('.acordeon-item');
					if($currentItem.hasClass('acordeon-item-with-sublist')){

						$currentItem.find('.acordeon-sublist')
						.stop(true, true)
						.slideToggle(150);

						$currentItem.toggleClass('active')
							.siblings()
							.removeClass('active');

						$currentItem.siblings()
						.find('.acordeon-sublist')
						.stop(true, true)
						.slideUp(150);

					}else{
						return;
					}
				});
			// end Accordeon-----------------------------------
		// end section faq

		// popups
			$( ".custom-select" ).selectmenu({});

			$('.to-popup').magnificPopup({
				type: 'inline',
				preloader: false,
				focus: '#name',

				// When elemened is focused, some mobile browsers in some cases zoom in
				// It looks not nice, so we disable it:
				callbacks: {
					beforeOpen: function() {
						if($(window).width() < 700) {
							this.st.focus = false;
						} else {
							this.st.focus = '#name';
						}
					}
				}
			});
		// end popups


		//Chrome Smooth Scroll
		try {
			$.browserSelector();
			if($("html").hasClass("chrome")) {
				$.smoothScroll();
			}
		} catch(err) {

		};

		$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});/*document-ready*/
});
