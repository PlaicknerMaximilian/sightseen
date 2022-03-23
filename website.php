<!DOCTYPE html>

<?php
    echo'<script async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAIWilWThH0ONE_t3Nb1NPvML_LvK2ItCc&libraries=localContext&v=beta&callback=initMap">
    </script>';
    if(isset($_POST['add'])){
        echo'<script async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAIWilWThH0ONE_t3Nb1NPvML_LvK2ItCc&libraries=localContext&v=beta&callback=initMap">
</script>';
    }
    if(isset($_POST['add2'])){
        echo'<script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAIWilWThH0ONE_t3Nb1NPvML_LvK2ItCc&callback=initMap2&v=weekly"
      async
    ></script>';
    }
    ?>

<html lang=en>
  <head>
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.js"></script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="css/website.css">
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <script src="js/index.js"></script>
    <link rel="shortcut icon" href="#">
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

  <form method="post" action="">
    <span id="locationSpan">Live location: </span><input type="submit" value="On" name="on" id="on">
    <input type="submit" value="Off" name="off">
  </form>
  </body>
</html>