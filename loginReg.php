<!--
  Funktionen und Methoden und Logik von index.php
-->
<?php
    session_start();
    // Hier wird geschaut, ob der Username und das Password in der Session gespeichert ist
    // Wenn es darin gespeichert ist, dann werden die Felder dafuer automatisch ausgefuellt
    if(isset($_SESSION['user']) && isset($_SESSION['password'])) {
        $s_user = $_SESSION['user'];
        $s_password = $_SESSION['password'];
        echo($_SESSION['user']);
    } else if(isset($_COOKIE['user']) && isset($_COOKIE['password'])) {
        $s_user = $_COOKIE['user'];
        $s_password = $_COOKIE['password'];
        echo($_COOKIE['user']);
    } else {
        $s_user = "";
        $s_password = "";
    }
?>