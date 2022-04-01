<!DOCTYPE HTML>
<?php include('loginReg.php'); ?>
<html>
    <head>
    <title>Sightseen Login</title>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="js/loginReg.js"></script>
      <link rel="stylesheet" href="css/login.css">
  </head>
  <body>
  <div class="login">
      <h1>Sightseen Login</h1>

      <div class="imgcontainer">
        <img src="avatar-default-icon.png" alt="Avatar" class="avatar">
      </div>

      <form method="POST">
        <label for="user">Username:</label>
        <input id="user" type="text" placeholder="Enter username" name="user" value="<?php echo $s_user?>"><br>
        <label for="password">Passwort:</label>
        <input id="password" type="password" placeholder="Enter password" name="password" value="<?php echo $s_password?>"><br>
        <input class="inpLogin" type="submit" value="Login">
        <label><input id="remember" type="checkbox" checked="checked" name="remember">Logindaten merken</label>
      </form>
      <p id="fehlermeldung" <?php echo $error;?>><?php echo $errorText;?></p>
      <p>Du hast noch keinen Accoutn?</p>
      <button id="regiBtn" onclick="document.getElementById('register').style.display='block'">Registrieren</button>

      <div id="register" class="modal">

        <form class="modal-content" method="POST">
          <h1>Registrieren</h1>
          <hr>
          <div>          
            <label for="vn"><b>Vorname</b></label>
            <input type="text" placeholder="Enter firstname" name="vn" id="vn" required>
          </div>

          <div>          
            <label for="nn"><b>Nachname</b></label>
            <input type="text" placeholder="Enter name" name="nn" id="nn" required>
          </div>

          <div>
            <label for="un"><b>Username</b></label><span></span>
            <input type="text" placeholder="Enter username" name="un" id="un" required>
          </div>
          
          <div>
            <label for="gebDat"><b>Geburtsdatum</b></label>
            <input type="date" name="gebDat" id="gebDat" required>
          </div>

          <div>
            <label for="email"><b>Email</b></label><span></span>
            <input type="email" placeholder="Enter email" name="email" id="email" required>
          </div>

          <div>
            <label for="telNr"><b>Telefonnummer</b></label><span></span>
            <input type="text" placeholder="Enter phonenumber" name="telNr" id="telNr" required>
          </div>

          <div>
            <label for="psw"><b>Passwort</b></label>
            <input type="password" placeholder="Enter password" name="psw" id="psw" required>
          </div>

          <div>
            <label for="psw-repeat"><b>Passwort wiederholen</b></label><span></span>
            <input type="password" placeholder="Enter repeat password" name="psw-repeat" id="psw-repeat" required>
          </div>
          <hr>

          <div id="error_msg"></div>
          <p id="regError"></p>
          <button type="button" name="register" id="regiBtn2">Registrieren</button>
        </form>
      </div>
    </div>

    <script>
      // Get the modal
      var modal = document.getElementById('register');

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    </script>
  </body>
</html>