$(document).ready(function() {
 
	

	$("#sponsors-logo").owlCarousel({
			items : 4,
			navigation : true,
			navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			pagination : false
		  });
		 
		

	// hide #back-top first
	$(".back-top").hide();
		
	// fade in #back-top
	$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$('.back-top').fadeIn();
				} else {
					$('.back-top').fadeOut();
				}
			});

			// scroll body to 0px on click
			$('.back-top a').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 800);
				return false;
			});
		});


	$(function(){
		  $('#Container').mixItUp();
	});



	$("#bg-slider").skippr({
				transition: 'fade',
				speed: 1000,
				easing: 'easeOutQuart',
				navType: 'bubble',
				childrenElementType: 'div',
				arrows: true,
				autoPlay: false,
				autoPlayDuration: 5000,
				keyboardOnAlways: true,
				hidePrevious: false

			});


	$('#slides').superslides({
		  animation: 'fade'
		});


	google.maps.event.addDomListener(window, 'load', init);
		function init() {
			var mapOptions = {
				zoom: 14,
				center: new google.maps.LatLng(24.904539, 91.86110110000004), // New York
				styles: [{"featureType":"all","elementType":"all","stylers":[{"visibility":"simplified"},{"weight":"3.21"},{"gamma":"0.85"},{"lightness":"-24"},{"saturation":"1"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#26c281"},{"visibility":"on"}]}]
			};
			var mapElement = document.getElementById('map');
			var map = new google.maps.Map(mapElement, mapOptions);
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(24.904539, 91.86110110000004),
				map: map,
				title: 'Snazzy!'
			});
		}
		

});