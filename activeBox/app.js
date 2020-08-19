$(function() { //Позволяет дождаться загрузки всего элемента


	/* Fixed Header */
	let header = $("#header"); // Вот таки так и выгядит переменная указывающаяя, что мы собираемся делать 
	let intro = $("#intro");
	let introH = intro.innerHeight(); //обращаеться к итро и работает с высатой
	let scrollPos = $(window).scrollTop(); //Сколько проскролилти?
	let nav = $("#nav");
	let navToggle = $("#navToggle");

	checkScroll(scrollPos, introH);

	$(window).on("scroll resize",function() {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);
	});

	function checkScroll () {
		if( scrollPos > introH ) {
			header.addClass("fixed"); //Дабавляем класс "Фиксированный"
		} else {
			header.removeClass("fixed");
		}}

	/* Smooth scroll */
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		nav.removeClass("show");

		$("html, body").animate({
			scrollTop: elementOffset - 70
		}, 700);
	});



	/* Nav Toggle */
	navToggle.on("click", function(event) {
		event.preventDefault();

		nav.toggleClass("show");
	});



	/* Reviews: https://kenwheeler.github.io/slick/ */
	let slider = $("#reviewsSlider");

	slider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		dots: true
	});




});
 