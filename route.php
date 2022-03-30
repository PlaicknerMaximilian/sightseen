<!DOCTYPE html>
<html lang=en>
    <?php

    ?>
  <head>

  </head>
  <body>

  <div>
    <h1>Sightseeing</h1>
  </div>

  <div id="directions-panel">
  </div>

  <script>
    const summaryPanel = document.getElementById("directions-panel");

    summaryPanel.innerHTML = "";

    const mode = sessionStorage.getItem("data");
    console.log(mode); // 'dark'

    summaryPanel.innerHTML += mode;


  </script>

  </body>
</html>