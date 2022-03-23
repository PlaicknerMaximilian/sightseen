<?php
    // Database configuration
    $dbservername = "10.171.153.47";
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