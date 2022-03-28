<!DOCTYPE html>

<?php
    echo'<script src="js/index.js"></script>';
    
    if(isset($_GET['was'])){
      if($_GET['was']=="route"){
        echo'<script async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAIWilWThH0ONE_t3Nb1NPvML_LvK2ItCc&libraries=places&v=beta&callback=initMap3">
        </script>';
      }if($_GET['was']=="ortsuchen"){
        echo'<script async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAIWilWThH0ONE_t3Nb1NPvML_LvK2ItCc&libraries=localContext&v=beta&callback=initMap">
        </script>';
      }if($_GET['was']=="michsuchen"){
        echo'<script async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAIWilWThH0ONE_t3Nb1NPvML_LvK2ItCc&libraries=localContext,places&v=beta&callback=initMap2">
        </script>';
      }
    }

?>
<html lang=en>
  <head>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <link rel="stylesheet" type="text/css" href="css/website.css">
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    
  </head>
  <body>

  <div class="header">
    <h1>Sightseeing</h1>
  </div>

  <div class="navbar">
  <!--
    <a href="10.10.30.51:8080?was=michsuchen">Dich suchen</a>
    <a href="10.10.30.51:8080?was=ortsuchen">Ort suchen</a>
    <a href="10.10.30.51:8080?was=route">Routenplaner</a>
    <a href="logout.php" class="right">Logout</a>
  -->
    <a href="?was=michsuchen">Dich suchen</a>
    <a href="?was=ortsuchen">Ort suchen</a>
    <a href="?was=route">Routenplaner</a>
    <a href="logout.php" class="right">Logout</a>
  </div>

  <div id="map"></div>

  <!-- Async script executes immediately and must be after any DOM elements used in callback. -->
  

  <select id="waypoints" multiple>
        
  </select>


  <input type="submit" value="Starten" name="start" id="start">
  <div id="directions-panel"></div>



  </body>
</html>