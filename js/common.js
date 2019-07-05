$(function() {

	// section Header
		$('.menu-icon').click(function(){
			$(this).toggleClass('clicked');
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
				console.log(indexMax);
				
			},

			this.events = function() {
				console.log('events!');
				$tabs.on('click', this.tabsClick);
			},
			this.tabsClick = function(e) {
				e.preventDefault();
				var $th = $(this),
					thIndex = $tabs.index($th);

				_self.indexProgress(thIndex);
				console.log("thIndex " + thIndex);
			},

			this.timer = function() {
				timer = setInterval(_self.indexProgress, 5000);
			},
			
			this.indexProgress = function(transitionedIndex) {
				console.log('transitionedIndex ' + transitionedIndex);
				if(transitionedIndex !== undefined){
					console.log('transitionedIndex is defined!');
					index = transitionedIndex;
				}else{
					
					index++;
					if(index > indexMax - 1){
						index = 0;
					}	
				}
				console.log('index on exit ' + index);
				this.counterRender();
				this.buttonsRender();
				this.textContentRender();
			},
			this.counterRender = function() {
				// console.log(index);
				$counter.text(+(index + 1));
			},
			this.buttonsRender = function() {
				$buttons.eq(index).addClass('tabs__item--active')
					.siblings()
					.removeClass('tabs__item--active');
			},
			this.textContentRender = function() {
				console.log("text render index " + index);
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
		$( ".custom-select" ).selectmenu({
			
		});
	// end popups

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
