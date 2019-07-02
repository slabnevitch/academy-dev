$(function() {

	// section Header
		$('.menu-icon').click(function(){
			$(this).toggleClass('clicked');
		});
	
	// end section Header

	// section we-work

		(function howWorkdHandler(index) {
			var $counter = $('.we-work-informer__counter'),
				$tabs = $('.tabs__link'),
				$informerTextItems = $('.we-work-informer__text .tabs__item'),
				$buttons = $('.we-work-informer__handler .tabs__list .tabs__item'),
				timer,
				index  = 0,
				_self = this;

			this.init = function() {
				this.events();
				this.timer();
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
				console.log('index on tabs ' + thIndex);
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
					if(index > 3){
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
				$informerTextItems.eq(index)
					.removeClass('hidden')
					.siblings()
					.addClass('hidden');
			}

			// this.init();
		})();
		
	// end section we-work


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
