<!DOCTYPE html>
  <?php
    $way = "hidden";
    $active1 = "";
    $active2 = "";
    $active3 = "";
    echo'<script src="js/index.js"></script>';
    
    if(isset($_GET['was'])){
      if($_GET['was']=="ortsuchen"){
        $way = "hidden";
        $active2 = "class = 'active'";

        echo'<script async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAIWilWThH0ONE_t3Nb1NPvML_LvK2ItCc&libraries=localContext&v=beta&callback=initMap">
        </script>';
      }
      if($_GET['was']=="michsuchen"){
        $way = "hidden";
        $active1 = "class = 'active'";

        echo'<script async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAIWilWThH0ONE_t3Nb1NPvML_LvK2ItCc&libraries=places,localContext&v=beta&callback=initMap2">
        </script>';
      }
      if($_GET['was']=="route"){
        $way = "";
        $active3 = "class = 'active'";
        echo'<script async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAIWilWThH0ONE_t3Nb1NPvML_LvK2ItCc&libraries=localContext,places&v=beta&callback=initMap3">
        </script>';
      }
    }
  ?>
<html lang=en>
  <head>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <script src="https://code.jquery.com/jquery-3.2.0.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/website.css">
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    
  </head>
  <body>
    <script></script>

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
    <a href="?was=michsuchen" <?php echo $active1 ?>>Mich suchen</a>
    <a href="?was=ortsuchen" <?php echo $active2 ?>>Ort suchen</a>
    <a href="?was=route" <?php echo $active3 ?>>Routenplaner</a>
    <div class="dropdown">
    <button class="dropbtn">Kategorie wählen 
      <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
      <label class="container">Touristen Attraktion
        <input type="checkbox" checked="checked" onclick="selectAttraction()" name="selector" value="tourist_attraction">
        <span class="checkmark"></span>
      </label>
      <label class="container">Kino
        <input type="checkbox" onclick="selectAttraction()" name="selector" value="movie_theater">
        <span class="checkmark"></span>
      </label>
      <label class="container">Park
        <input type="checkbox" onclick="selectAttraction()" name="selector" value="park">
        <span class="checkmark"></span>
      </label>
      <label class="container">Stadium
        <input type="checkbox" onclick="selectAttraction()" name="selector" value="stadium">
        <span class="checkmark"></span>
      </label>
      <label class="container">Einkaufszentrum
        <input type="checkbox" onclick="selectAttraction()" name="selector" value="shopping_mall">
        <span class="checkmark"></span>
      </label>
      </div>
    </div> 
    <a href="logout.php" class="right">Logout</a>
  </div>

  <div id="map"></div>

  <button <?php echo $way ?> class="open-button" onclick="openForm()">Route auswählen</button>
  <button <?php echo $way ?> class="route-button" id="myButton">Routensegmente anzeigen</button>

  <div class="form-popup" id="myForm">
      <div class="form-container">
        <h1>Select places</h1>

        <select id="waypoints" multiple></select>
        <input type="submit" value="Starten" name="start" id="start" class="btn">
        <button type="button" class="btn cancel" onclick="closeForm()">Schließen</button>
      </div>
    </div>

  <div id="directions-panel"></div>
    <script>
        document.getElementById("myButton").onclick = function () {
          location.href = "route.php";
        };
    </script>
  </body>
</html>