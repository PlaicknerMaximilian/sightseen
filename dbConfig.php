<?php
    // Database configuration
    $dbservername = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "sight";

    // Verbindung aufbauen
    $conn = new mysqli($dbservername, $dbusername, $dbpassword, $dbname);
    
    // Verbindung ueberpruefen
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
?>