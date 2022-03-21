<!--
  Loginscreen + Registrieren
-->
<!DOCTYPE HTML>
<?php include('loginReg.php'); ?>
<html>
    <head>
      <title>Sightseeing</title>
      <link rel="stylesheet" href="css/login.css">
  </head>
  <body>
  <div class="login">
      <h1>Login</h1>

      <div class="imgcontainer">
        <img src="avatar.png" alt="Avatar" class="avatar">
      </div>

      <form method="POST">
        <label for="user">Username:</label>
        <input id="user" type="text" placeholder="Enter username" name="user" value="<?php echo $s_user?>"><br>
        <label for="password">Password:</label>
        <input id="password" type="password" placeholder="Enter password" name="password" value="<?php echo $s_password?>"><br>
        <input class="inpLogin" type="submit" value="Login">
        <label><input id="remember" type="checkbox" checked="checked" name="remember">Remember me</label>
      </form>
      <p id="fehlermeldung" <?php echo $error;?>><?php echo $errorText;?></p>
      <p>You don't have an account.</p>
      <button id="regiBtn" onclick="document.getElementById('register').style.display='block'">Register</button>

      <div id="register" class="modal">

        <form class="modal-content" method="POST">
          <h1>Register</h1>
          <hr>
          <div>          
            <label for="vn"><b>Firstname</b></label>
            <input type="text" placeholder="Enter firstname" name="vn" id="vn" required>
          </div>

          <div>          
            <label for="nn"><b>Name</b></label>
            <input type="text" placeholder="Enter name" name="nn" id="nn" required>
          </div>

          <div>
            <label for="un"><b>Username</b></label><span></span>
            <input type="text" placeholder="Enter username" name="un" id="un" required>
          </div>
          
          <div>
            <label for="gebDat"><b>Birthdate</b></label>
            <input type="date" name="gebDat" id="gebDat" required>
          </div>

          <div>
            <label for="email"><b>Email</b></label><span></span>
            <input type="email" placeholder="Enter email" name="email" id="email" required>
          </div>

          <div>
            <label for="telNr"><b>Phonenumber</b></label><span></span>
            <input type="text" placeholder="Enter phonenumber" name="telNr" id="telNr" required>
          </div>

          <div>
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter password" name="psw" id="psw" required>
          </div>

          <div>
            <label for="psw-repeat"><b>Repeat password</b></label><span></span>
            <input type="password" placeholder="Enter repeat password" name="psw-repeat" id="psw-repeat" required>
          </div>
          <hr>

          <div id="error_msg"></div>
          <p id="regError"></p>
          <button type="button" name="register" id="regiBtn2">Register</button>
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