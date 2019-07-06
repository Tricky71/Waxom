$(document).ready(function() {

	$(".main-menu__button--toggle").click(function() {
		$(".main-nav__list").slideToggle();
		$(".promo__content").slideToggle();
		$(".promo__slider-pagination").slideToggle();
	});

	// $(".main-menu__toggle").click(function() {
	// 	$(".promo__content").slideToggle();
	
	
	// });


//     $(function() {
//   // Owl Carousel
//   var owl = $(".owl-carousel");
//   owl.owlCarousel({
//     items: 1,
//     margin: 10,
//     loop: true,
//     nav: true
//   });
 

 
    

	// Каруселька
	// Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".slider-1");
	owl.owlCarousel({
		items : 1,
		loop: true,
		nav: false,
		dots: false,
	});

	var owl_1 = $(".slider-2");
	owl_1.owlCarousel({
		items : 3,
		loop: true,
		margin: 30,
		nav: false,
		dots: false,
		responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            768:{
                items:2
            },
            1200:{
                items:3
            }
        }
	});

	var owl_3 = $(".slider-3");
	owl_3.owlCarousel({
		items : 1,
		loop: true,
		nav: false,
		dots: false,
		autoplay: true,
	});

	

	owl.owlCarousel({
    dotsContainer: ".promo__slider-pagination"
    });

	owl_3.owlCarousel({
    dotsContainer: ".slider__pagination"
    });
// 	owl.on("mousewheel", ".owl-wrapper", function (e) {
// 		if (e.deltaY > 0) {
// 			owl.trigger("owl.prev");
// 		} else {
// 			owl.trigger("owl.next");
// 		}
// 		e.preventDefault();
// 	});
// 	$(".next_button").click(function(){
// 		owl.trigger("owl.next");
// 	});
// 	$(".prev_button").click(function(){
// 		owl.trigger("owl.prev");
// });
    $(".next").click(function(){
		owl.trigger("next.owl.carousel");
	});
    $(".prev").click(function(){
		owl.trigger("prev.owl.carousel");
	});

	$(".next_button").click(function(){
		owl_1.trigger("next.owl.carousel");
	});
    $(".prev_button").click(function(){
		owl_1.trigger("prev.owl.carousel");
	});


$('.promo__slider-dot').click(function () {
  owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});

$('.slider__dot').click(function () {
  owl_3.trigger('to.owl_3.carousel', [$(this).index(), 300]);
});



	});



