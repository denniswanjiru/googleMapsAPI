function loadMap() {

	var city = new google.maps.LatLng(-1.1026, 37.0132);

	var mapOptions = {
	   center: city,
	   zoom: 11,
	   mapTypeControl: true,

	   mapTypeControlOptions: {
	   	style: google.maps.MapTypeControlStyle.HORIZONTAL_MENU,
	   	position: google.maps.ControlPosition.RIGHT_TOP,
	   	mapTypeIds: [
	   		 google.maps.MapTypeId.ROADMAP,
	   		 google.maps.MapTypeId.HYBRID,   		
	   		 google.maps.MapTypeId.TERRAIN,      		
	   	]
	   },

	   zoomControl: true,

	   zoomControlOptions: {
	   	style: google.maps.ZoomControlStyle.SMALL,
	   	position: google.maps.ControlPosition.LEFT_BOTTOM,

	   }
	   
	};

	var map = new google.maps.Map(document.getElementById("map"), mapOptions);

	var marker = new google.maps.Marker({
		position: map.getCenter(),

		icon: {
          path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
          scale: 5,
          strokeWeight:2,
          // fillColor: "#B40404",
          // fillOpacity: 2,
          strokeColor:"#B40404"
       	},
			
      	draggable:true,
		map: map,
		animation:google.maps.Animation.DROP,
		// icon: '../icons/delivery.png',
	});

	marker.setMap(map);

	var infoWindow = new google.maps.InfoWindow({
		content: "Juja city, a city of no return!",
	});

	// infoWindow.open(map, marker);
	// infoWindow.open(null);

	google.maps.event.addListener(marker, 'click', function(){
		infoWindow.open(map, marker);
	})

}

