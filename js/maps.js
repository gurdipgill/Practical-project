function myMap() {
	
	var SandwellCollege = {
		info: '<strong>Sandwell College</strong><br>\
					1 Spon Ln<br> West Bromwich B70 6AW<br>\
					<a href="https://www.google.co.uk/maps/dir/52.6278656,-1.1419648/Sandwell+College,+1+Spon+Ln,+West+Bromwich+B70+6AW/@52.5294902,-2.1275569,9z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x4870bd69c8c84f47:0x891436e3ac44957d!2m2!1d-1.9920136!2d52.5150835!3e0">Get Directions</a>',
		lat: 52.5151,
		long: -1.9920
	};

	var De = {
		info: '<strong>Chipotle on Belmont</strong><br>\
					1025 W Belmont Ave<br> Chicago, IL 60657<br>\
					<a href="https://goo.gl/maps/PHfsWTvgKa92">Get Directions</a>',
		lat: 41.939670,
		long: -87.655167
	};

	var sheridan = {
		info: '<strong>Chipotle on Sheridan</strong><br>\r\
					6600 N Sheridan Rd<br> Chicago, IL 60626<br>\
					<a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
		lat: 42.002707,
		long: -87.661236
	};

	var locations = [
      [SandwellCollege.info, SandwellCollege.lat, SandwellCollege.long, 0],
      [belmont.info, belmont.lat, belmont.long, 1],
      [sheridan.info, sheridan.lat, sheridan.long, 2],
    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: new google.maps.LatLng(41.976816, -87.659916),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}