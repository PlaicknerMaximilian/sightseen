let map;
let l=50;
let b=10; 
let localContextMapView;
function initMap() {
  localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById("map"),
    placeTypePreferences: [
      { type: "restaurant" },
      { type: "tourist_attraction" },
    ],
    maxPlaceCount: 12,
  });

  map = localContextMapView.map;
  map.setOptions({
    center: { lat: l, lng: b },
    zoom: 12,
  });

  // Create the initial InfoWindow.
  let infoWindow = new google.maps.InfoWindow({
    content: "Click the map to get Lat/Lng!",
    position: { lat: l, lng: b },
  });

  infoWindow.open(map);
  // Configure the click listener.
  map.addListener("click", (mapsMouseEvent) => {
    // Close the current InfoWindow.
    infoWindow.close();
    //Create a new InfoWindow.
    infoWindow = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    });
    infoWindow.setContent(
      JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
    );
    const myArray = JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2).split(" ");
    l=parseFloat(myArray[3].split(",")[0]);
    b=parseFloat(myArray[6].split("}")[0]);
    console.log(l);
    infoWindow.open(map);

    initMap();
    
  });

}




function initMap2() {
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