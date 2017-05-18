var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -1.1026,
      lng: 37.0132
    },

    zoom: 12
  });
}