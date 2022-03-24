<!DOCTYPE html>

<?php

    if(isset($_POST['add2'])){
        echo'<script async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAIWilWThH0ONE_t3Nb1NPvML_LvK2ItCc&libraries=localContext,places&v=beta&callback=initMap2">
        </script>';
    }

    if(isset($_POST['add1'])){
        echo'<script async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAIWilWThH0ONE_t3Nb1NPvML_LvK2ItCc&libraries=localContext&v=beta&callback=initMap">
        </script>';
    }

?>
<html lang=en>
  <head>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <link rel="stylesheet" type="text/css" href="css/website.css">
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
  <form method="post" action="">
    <input type="submit" value="Ort suchen" name="add1" id="add1">
    <input type="submit" value="Mich suchen" name="add2" id="add2">
  </form>
  

  



  </body>
</html>