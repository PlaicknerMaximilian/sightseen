<!DOCTYPE html>
<?php
    if(isset($_POST['add'])){
        echo'<script async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAIWilWThH0ONE_t3Nb1NPvML_LvK2ItCc&libraries=localContext&v=beta&callback=initMap">
</script>';
    }
    if(isset($_POST['add2'])){
        echo'<script
       async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAIWilWThH0ONE_t3Nb1NPvML_LvK2ItCc&libraries=localContext&v=beta&callback=initMap2"></script>';
    }
    ?>
<html>
  <head>
    <title>Event Click LatLng</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <link rel="stylesheet" type="text/css" href="./style.css" />
    <script src="./index.js"></script>
  </head>
  <body>
    <div id="map"></div>

    <!-- Async script executes immediately and must be after any DOM elements used in callback. -->
    <form method="post" action="">
        <input type="submit" value="Ort suchen" name="add" id="add">
        <input type="submit" value="Ort suchen" name="add2" id="add2">
    </form>
    
  </body>
</html>

