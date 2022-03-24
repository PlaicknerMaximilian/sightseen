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
      { type: "tourist_attraction" },
      { type: "movie_theater"},
      { type: "park"},
      { type: "shopping_mall"},
      { type: "stadium"},
      { type: "tourist_attraction"},
    ],
    maxPlaceCount: 20,
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

    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 40.76, lng: -73.983 },
      zoom: 15,
    });
  

    localContextMapView = new google.maps.localContext.LocalContextMapView({
      element: document.getElementById("map"),
      placeTypePreferences: [
        { type: "tourist_attraction" },
        { type: "movie_theater"},
        { type: "park"},
        { type: "shopping_mall"},
        { type: "stadium"},
        { type: "tourist_attraction"},
      ],
      maxPlaceCount: 20,
    });

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
    function location(){
      navigator.geolocation.getCurrentPosition(function(position) {  
        newpoint = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        if(newPoint==null){
          location();
          return;
        }
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
  
        getNearbyPlaces(newPoint);
  
        // Center the map on the new position
        map.setCenter(newPoint);
        
      });
    }
    location();
     

    

    // Call the autoUpdate() function every 5 seconds
    //setTimeout(initMap2, 5000);

}

function getNearbyPlaces(position) {

  request = {
    location: position,
    radius: '500',
    query: 'restaurant'
  };

  service = new google.maps.places.PlacesService(map);
  
  
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    console.log("callback received " + results.length + " results");
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < results.length; i++) {
      console.log(JSON.stringify(results[i].formatted_address));
    }
    map.fitBounds(bounds);
    map.setCenter(newPoint);
    map.setOptions({
      zoom: 12,
    });
  } else console.log("callback.status=" + status);
}