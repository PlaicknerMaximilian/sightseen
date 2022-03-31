<!DOCTYPE html>
<html lang=en>
  <head>

    <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        background-color: #7dd1c0;
      }
      .button {
        background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.4s;
        position:absolute;
        top:10px;
        right:6px;
      }

      .button:hover {
       box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
      }
    </style>

  </head>
  <body>

  <div>
    <h1>Routen Segmente</h1>
  </div>

  <div id="directions-panel">
  </div>

  <button onclick="location.href='website.php'" class="button">Zurück zur Website</button>

  <script>
    const summaryPanel = document.getElementById("directions-panel");

    summaryPanel.innerHTML = "";

    const mode = sessionStorage.getItem("data");
    console.log(mode);

    summaryPanel.innerHTML += mode;


  </script>

  </body>
</html>