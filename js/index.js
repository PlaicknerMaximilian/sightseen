let map;
let l=0;
let b=0; 
let localContextMapView;
var newPoint;
var marker = null;
function initMap() {
  localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById("map"),
    placeTypePreferences: [
      { type: "restaurant" },
      { type: "tourist_attraction" },
    ],
    maxPlaceCount: 12,
  });

  navigator.geolocation.getCurrentPosition(function(position) {  
  newPoint = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  if(l==0){
    l=position.coords.latitude;  
    b=position.coords.longitude;
  }
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
  });
    
  
}




function initMap2() {
  localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById("map"),
    placeTypePreferences: [
      { type: "restaurant" },
      { type: "tourist_attraction" },
    ],
    maxPlaceCount: 12,
  });
  function autoUpdate() {
    navigator.geolocation.getCurrentPosition(function(position) {  
      newPoint = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    l=position.coords.latitude;  
    b=position.coords.longitude;       
    
    map = localContextMapView.map;
    map.setOptions({
      center: { lat: l, lng: b },
      zoom: 12,
    });
    });
    navigator.geolocation.getCurrentPosition(function(position) {  
      newpoint = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      if (marker) {
        // Marker already created - Move it
        console.log("aaa");
        marker.setPosition(newPoint);
      }
      else {
        // Marker does not exist - Create it
        console.log("aaa2");
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