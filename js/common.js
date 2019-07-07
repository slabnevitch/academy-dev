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
				 onStick:   function () {

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

				if(screen.width > 992){
					$('.header-top--fixed').addClass('banner--stick');
					$('.header-top--fixed').removeClass('banner--unstick');
					

					return false;
				}
					
					$(this).toggleClass('clicked');
				$('html').toggleClass('menu-opened');
				$iconParent.toggleClass('menu-opened');
				$('.header-top--fixed').removeClass('banner--unstick');
				// $iconParent.siblings().removeClass('menu-opened');


			}

	
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
;
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
						.removeClass('hidden')
						.siblings()
						.addClass('hidden');
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
					.removeClass('hidden')
					.siblings()
					.addClass('hidden');
			});
		// end section .experience

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
