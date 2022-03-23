<!DOCTYPE html>
<html lang=en>
  <head>
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.js"></script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <link rel="stylesheet" href="css/website.css">
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <script src="js/index.js"></script>
  </head>
  <body>

  <div class="header">
    <h1>Sightseeing</h1>
  </div>

  <div class="navbar">
    <a href="#" class="active">Home</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="logout.php" class="right">Logout</a>
  </div>

  <div id="map"></div>

  <!-- Async script executes immediately and must be after any DOM elements used in callback. -->
  <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAIWilWThH0ONE_t3Nb1NPvML_LvK2ItCc&callback=initMap&v=weekly"
      async
    ></script>


  </body>
</html>