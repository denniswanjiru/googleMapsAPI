var map;

function initMap() {
var juja =  {
    lat: -1.1026,
    lng: 37.0132
  };

map = new google.maps.Map(document.getElementById('map'), {
  center: juja,
  zoom: 10,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
});

var marker = new google.maps.Marker({
  position: juja,
  map: map
});
}