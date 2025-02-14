jQuery(function($) {

	//Preloader
	var preloader = $('.preloader');
	$(window).load(function(){
		preloader.remove();
	});

	//#main-slider
	var slideHeight = $(window).height();
	$('#home-slider .item').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#home-slider .item').css('height',slideHeight);
	});
	
	//Scroll Menu
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>slideHeight ){
			$('.main-nav').addClass('navbar-fixed-top');
		} else {
			$('.main-nav').removeClass('navbar-fixed-top');
		}
	});
	
	// Navigation Scroll
	$(window).scroll(function(event) {
		Scroll();
	});

	$('.navbar-collapse ul li a').on('click', function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
		return false;
	});

	// User define function
	function Scroll() {
		var contentTop      =   [];
		var contentBottom   =   [];
		var winTop      =   $(window).scrollTop();
		var rangeTop    =   200;
		var rangeBottom =   500;
		$('.navbar-collapse').find('.scroll a').each(function(){
			contentTop.push( $( $(this).attr('href') ).offset().top);
			contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
		})
		$.each( contentTop, function(i){
			if ( winTop > contentTop[i] - rangeTop ){
				$('.navbar-collapse li.scroll')
				.removeClass('active')
				.eq(i).addClass('active');			
			}
		})
	};

	$('#tohash').on('click', function(){
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
		return false;
	});
	
	//Initiat WOW JS
	new WOW().init();
	//smoothScroll
	smoothScroll.init();

	// Ensure jQuery is loaded before running this script
$(document).ready(function () {
    // Fetch latitude and longitude from the #google-map element
    var latitude = $('#google-map').data('latitude');
    var longitude = $('#google-map').data('longitude');

    // Check if latitude and longitude are defined
    if (!latitude || !longitude) {
        console.error("Latitude or longitude is missing from #google-map.");
        return;
    }

    // Initialize the Google Map
    function initialize_map() {
		// Fetch latitude and longitude
		var latitude = $('#google-map').data('latitude');
		var longitude = $('#google-map').data('longitude');
	
		// Create the map centred at the given coordinates
		var myLatlng = new google.maps.LatLng(latitude, longitude);
		var mapOptions = {
			zoom: 14,
			scrollwheel: false,
			center: myLatlng
		};
		var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
	
		// Content for the InfoWindow
		var contentString = `
			<div class="map-info">
				<h4>Office Location</h4>
				<p>116 Westfield Avenue<br>South Croydon<br>CR2 9JW</p>
			</div>
		`;
	
		// Create the InfoWindow
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});
	
		// Create the marker
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: "Office Location"
		});
	
		// Show InfoWindow on marker hover (mouseover)
		marker.addListener('mouseover', function () {
			infowindow.open(map, marker);
		});
	
		// Hide InfoWindow when the mouse leaves the marker (mouseout)
		marker.addListener('mouseout', function () {
			infowindow.close();
		});
	}
	
	// Trigger map initialisation on page load
	google.maps.event.addDomListener(window, 'load', initialize_map);
	