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

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    
  
    directionsRenderer.setMap(map);
    
    document.getElementById("start").addEventListener("click", () => {
      calculateAndDisplayRoute(directionsService, directionsRenderer);
    });
  }
  
  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    
    const waypts = [];
    const waypts2 = [];
    const checkboxArray = document.getElementById("waypoints");
    console.log(checkboxArray);
    
    for (let i = 0; i < checkboxArray.length; i++) {
      if (checkboxArray.options[i].selected) {
        waypts.push({
          location: checkboxArray[i].value,
          stopover: true,
        });
      }
    }

    for(let i = 1; i<waypts.length-1;i++){
      waypts2[i-1]=waypts[i];
    }
    console.log(waypts);

    directionsService
      .route({
        origin: "Brixen, italy",
        destination: "Bozen, italy",
        waypoints: waypts2,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.WALKING,
      })
      .then((response) => {
        console.log("response");
        directionsRenderer.setDirections(response);
  
        const route = response.routes[0];
        const summaryPanel = document.getElementById("directions-panel");
  
        summaryPanel.innerHTML = "";
  
        // For each route, display summary information.
        for (let i = 0; i < route.legs.length; i++) {
          const routeSegment = i + 1;
  
          summaryPanel.innerHTML += "<b>Route Segment: " + routeSegment + "</b><br>";
          summaryPanel.innerHTML += route.legs[i].start_address + " to ";
          summaryPanel.innerHTML += route.legs[i].end_address + "<br>";
          summaryPanel.innerHTML += route.legs[i].distance.text + "<br><br>";
        }
      })
      .catch((e) => window.alert("Directions request failed due to " + e));

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

    var min = 12,
    max = 100,
    select = document.getElementById('waypoints');

    for (var i = 0; i<=results.length-1; i++){
      var opt = document.createElement('option');
      opt.value = JSON.stringify(results[i].formatted_address);
      opt.innerHTML = JSON.stringify(results[i].formatted_address);
      select.appendChild(opt);
    }
  
    /*
    for (var i = 0; i < results.length; i++) {
      
      document.getElementById('waypoints').innerHTML += '<option value="  montreal, quebec">' + JSON.stringify(results[i].formatted_address) + '</option>';
      //document.getElementById('waypoints').add(JSON.stringify(results[i].formatted_address));
    }*/
    
    map.fitBounds(bounds);
    map.setCenter(newPoint);
    map.setOptions({
      zoom: 12,
    });
    marker.setPosition(newPoint);
  } else console.log("callback.status=" + status);
}

