let map;

function initMap() {
  const localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById("map"),
    placeTypePreferences: [
      { type: "restaurant" },
      { type: "tourist_attraction" },
    ],
    maxPlaceCount: 12,
  });
  map = localContextMapView.map;
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });



  var marker = null;

  function autoUpdate() {
    navigator.geolocation.getCurrentPosition(function(position) {  
      var newPoint = new google.maps.LatLng(position.coords.latitude, 
                                            position.coords.longitude);

      if (marker) {
        // Marker already created - Move it
        marker.setPosition(newPoint);
      }
      else {
        // Marker does not exist - Create it
        marker = new google.maps.Marker({
          position: newPoint,
          map: map
        });
      }

      // Center the map on the new position
      map.setCenter(newPoint);
    }); 

    // Call the autoUpdate() function every 5 seconds
    //setTimeout(autoUpdate, 5000);
  }

  autoUpdate();
}