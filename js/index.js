var map;
let l=0;
let b=0; 
var newPoint;
var marker = null;
var pos;
var categriesAreSet = false;
var tourist_attraction = "tourist_attraction"
var movie_theater = "";
var park = "";
var shopping_mall = "";
var stadium = "";
var isInitMap = false;
var isInitMap2 = false;
var isInitMap3 = false;

let localContextMapView;

function initMap(localContextMapView = new google.maps.localContext.LocalContextMapView({
  element: document.getElementById("map"),
  placeTypePreferences: [
    { type: "tourist_attraction" },
  ],
    maxPlaceCount: 20,
  })
)
{
  isInitMap = true;
  isInitMap2 = false;
  isInitMap3 = false;
  
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
    content: "Click the map to show the landmarks of the location!",
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

function initMap2(localContextMapView = new google.maps.localContext.LocalContextMapView({
  element: document.getElementById("map"),
  placeTypePreferences: [
    { type: "tourist_attraction" },
  ],
  maxPlaceCount: 20,
})) {

  isInitMap = false;
  isInitMap2 = true;
  isInitMap3 = false;  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();

  /*map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.76, lng: -73.983 },
    zoom: 15,
  });*/

  /*localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById("map"),
    placeTypePreferences: [
      { type: "tourist_attraction" },
      { type: "movie_theater"},
      { type: "park"},
      { type: "shopping_mall"},
      { type: "stadium"},
    ],
    maxPlaceCount: 20,
  });*/

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
        console.log("aaa--------------------------");
        marker.setPosition(newPoint);
      }
      else {
        // Marker does not exist - Create it
        console.log("aaa2------------------------");
        marker = new google.maps.Marker({
          position: newPoint,
          map: map
        });
      }
      console.log(newPoint);
      // Center the map on the new position
      map.setCenter(newPoint);
    });
  }
  location();

  directionsRenderer.setMap(map);
}

function initMap3() {

  isInitMap = false;
  isInitMap2 = false;
  isInitMap3 = true;

  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: { lat: 41.85, lng: -87.65 },
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
     console.log(newPoint);
     getNearbyPlaces(newPoint);
     // Center the map on the new position
     map.setCenter(newPoint);
   });
 }
 location();

  directionsRenderer.setMap(map);
  
  document.getElementById("start").addEventListener("click", () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer, newPoint);
  });
}
  
function calculateAndDisplayRoute(directionsService, directionsRenderer, location) {
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

  for(let i = 0; i<waypts.length-1;i++){
    waypts2[i]=waypts[i];
  }
  console.log(waypts[waypts.length - 1]);
  console.log(waypts[waypts.length - 1].location);

  console.log(location);

  console.log(location.location);

  console.log("---------------------");

  directionsService
    .route({
      origin: location,
      destination: waypts[waypts.length - 1].location,
      waypoints: waypts2,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.WALKING,
    })
    .then((response) => {
      console.log("response");
      directionsRenderer.setDirections(response);

      const route = response.routes[0];
      var data = "";

      // For each route, display summary information.
      for  (let i = 0; i < route.legs.length; i++) {
        const routeSegment = i + 1;

        data += "<b>Route Segment: " + routeSegment + "</b><br>";
        data += route.legs[i].start_address + " to ";
        data += route.legs[i].end_address + "<br>";
        data += route.legs[i].distance.text + "<br><br>";
      }
      sessionStorage.setItem("data", data);
      console.log(sessionStorage.getItem("data"));
      console.log("-------asdfadsfasdf");

    })
    .catch((e) => window.alert("Directions request failed due to " + e));

  // Call the autoUpdate() function every 5 seconds
  //setTimeout(initMap2, 5000);

}

function getNearbyPlaces(position) {
  console.log(position + "##################################");

  request = {
    location: position,
    radius: '3',
    query: ['tourist_attraction']
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

    // Add places to the select as options
    for (var i = 0; i<=results.length-1; i++){
      var opt = document.createElement('option');
      opt.value = JSON.stringify(results[i].formatted_address);
      opt.innerHTML = JSON.stringify(results[i].name);
      select.appendChild(opt);
    }
    
    map.fitBounds(bounds);
    map.setCenter(newPoint);
    map.setOptions({
      zoom: 12,
    });
    marker.setPosition(newPoint);
  } else console.log("callback.status=" + status);
}

function selectAttraction() {
  let checkboxes = document.querySelectorAll('input[name="selector"]:checked');
  let values = [];
  checkboxes.forEach((checkbox) => {
      values.push(checkbox.value);
  });
  tourist_attraction = values[0];
  movie_theater = values[1];
  park = values[2];
  stadium = values[3];
  shopping_mall = values[4];
  let length = values.length;

  console.log(tourist_attraction + " - " + movie_theater + " - " + park + " - " + stadium + " - " + shopping_mall + " + " + length);

  if(!isInitMap3) {
    if(length == 0) {
      localContextMapView = new google.maps.localContext.LocalContextMapView({
        element: document.getElementById("map"),
        placeTypePreferences: [
          { type: "tourist_attraction" },
        ],
        maxPlaceCount: 20,
      });
    } else if(length == 1) {
      localContextMapView = new google.maps.localContext.LocalContextMapView({
        element: document.getElementById("map"),
        placeTypePreferences: [
          { type: values[0] },
        ],
        maxPlaceCount: 20,
      });
    } else if(length == 2) {
      localContextMapView = new google.maps.localContext.LocalContextMapView({
        element: document.getElementById("map"),
        placeTypePreferences: [
          { type: values[0] },
          { type: values[1]},
        ],
        maxPlaceCount: 20,
      });
    } else if(length == 3) {
      localContextMapView = new google.maps.localContext.LocalContextMapView({
        element: document.getElementById("map"),
        placeTypePreferences: [
          { type: values[0] },
          { type: values[1]},
          { type: values[2]},
        ],
        maxPlaceCount: 20,
      });
    } else if(length == 4) {
      localContextMapView = new google.maps.localContext.LocalContextMapView({
        element: document.getElementById("map"),
        placeTypePreferences: [
          { type: values[0] },
          { type: values[1]},
          { type: values[2]},
          { type: values[3]},
        ],
        maxPlaceCount: 20,
      });
    } else if(length == 5) {
      localContextMapView = new google.maps.localContext.LocalContextMapView({
        element: document.getElementById("map"),
        placeTypePreferences: [
          { type: values[0] },
          { type: values[1]},
          { type: values[2]},
          { type: values[3]},
          { type: values[4]},
        ],
        maxPlaceCount: 20,
      });
    }
  
    if(isInitMap) {
      initMap(localContextMapView);
    } else if(isInitMap2) {
      initMap2(localContextMapView);
    }
  }
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}