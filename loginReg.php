<?php
    include 'dbConfig.php';
    session_start();

    // Hier wird geschaut, ob der Username und das Password in der Session gespeichert ist
    // Wenn es darin gespeichert ist, dann werden die Felder dafuer automatisch ausgefuellt
    if(isset($_SESSION['user']) && isset($_SESSION['password'])) {
        $s_user = $_SESSION['user'];
        $s_password = $_SESSION['password'];
        checkPasswordAndUsername();
    } else if(isset($_COOKIE['user']) && isset($_COOKIE['password'])) {
        $s_user = $_COOKIE['user'];
        $s_password = $_COOKIE['password'];
        checkPasswordAndUsername();
    } else {
        $s_user = "";
        $s_password = "";
        checkPasswordAndUsername();
    }

    //Schauen, ob Username und Password gesetzt sind und ob dann, ob sie in der Datenbank gespeichert sind
    function checkPasswordAndUsername() {
        if(isset($_POST['user']) && isset($_POST['password'])) {
            $tempUser = $_POST['user'];
            $tempPassword = $_POST['password'];
            if($tempUser == "" || $tempPassword == "") {
                // User and Password can't be not set!
                // User and Password must be correct!
                $message = "Fehler beim Einloggen. Bitte stelle sicher, dass Username und Passwort nicht leer sind!";
                echo "<script type='text/javascript'>alert('$message');</script>";  // Javascript for alert message
            } elseif(!checkPasswordUserInDatabase($tempUser, $tempPassword)) {
                // When checkPasswordUser is false something is wrong
                // When checkPasswordUser is true it skipps this if and goes on
            } else {
                echo("asdfasdfasdfasdf");
                $user =  $_POST['user'];
                $password = $_POST['password'];

                $_SESSION['user'] = $user;
                $_SESSION['password'] = $password;
                $_SESSION['isAuth'] = "yes";

                if(isset($_POST['remember'])) {
                    // TODO check the cookies
                    setcookie("user", $user, time() + (86400), "/"); // 86400 = 1 day
                    setcookie("password", $password, time() + (86400), "/"); // 86400 = 1 day
                }
                header('Location: website.php');
                exit();                
            }
        }
    }

    //In der Datenbank schauen, ob Passwort und Username stimmen
    function checkPasswordUserInDatabase($user, $password) {
        global $conn;
        $sql = "SELECT username, passwort FROM login";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // Jede Zeile der Tabelle durchgehen
            while($row = $result->fetch_assoc()) {
                if($row["username"] == $user && $row["passwort"] == $password) {
                    $conn->close();
                    return true;
                }
            }
        }
        // Mit error wird der Style der Fehlermeldung gesetzt.
        global $error;
        $error = 'style="display: block;"';
        global $errorText;
        $errorText = "Benutzername oder Passwort ist falsch. Bitte überprüfen.";
        return false;
    }

    //Schauen, ob der Username schon besetzt ist
    if (isset($_POST['username_check'])) {
        $username = $_POST['username'];
        $sql = "SELECT * FROM login WHERE username='$username'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
          echo "taken";
          exit();

        }else{
          echo 'not_taken';
          exit();

        }
    }

    //Schauen, ob die Email schon besetzt ist
    if (isset($_POST['email_check'])) {
        $email = $_POST['email'];
        $sql = "SELECT * FROM benutzer WHERE email='$email'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
          echo "taken";	
        }else{
          echo 'not_taken';
        }
        exit();
    }

    //Neuen Benutzer erstellen
    if (isset($_POST['save'])) {
        echo("asdfasdffffffffffffffffffffffffffffffffffffffff.-.---------------");
        $vn = $_POST['vn'];
        $nn = $_POST['nn'];
        $un = $_POST['username'];
        $gebDat = $_POST['gebDat'];
        $email = $_POST['email'];
        $telNr = $_POST['telNr'];
        $password = $_POST['password'];
        
        $sql = "INSERT INTO benutzer (vn, nn, gebDat, email, telNr)
        VALUES ('$vn', '$nn', '$gebDat', '$email', '$telNr');";

        if ($conn->query($sql) === TRUE) {
            $last_id = $conn->insert_id;
            echo "New record created successfully. Last inserted ID is: " . $last_id;

            $sql = "INSERT INTO login (username, passwort, benutzer_id)
            VALUES ('$un', '$password', '$last_id');";

            if ($conn->query($sql) === TRUE) {
                echo "New record created successfully";

        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        $conn->close();
        echo 'Saved!';
        exit();
    }
?>