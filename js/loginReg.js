$('document').ready(function(){
    $('#regError').hide();
    var username_state = false;
    var email_state = false;
    var password_state = false;

    $('#vn').on('blur', function() {
        $('#vn').parent().addClass("form_success");
    });
    $('#nn').on('blur', function() {
        $('#nn').parent().addClass("form_success");
    });
    $('#gebDat').on('blur', function() {
        $('#gebDat').parent().addClass("form_success");
    });
    $('#telNr').on('blur', function() {
        var telNr = $('#telNr').val();
        if($.isNumeric(telNr)) {
            phonenumber_state = true;
            $('#telNr').parent().removeClass();
            $('#telNr').parent().addClass("form_success");
            $('#telNr').siblings("span").text('Telefonnummer passt');
        } else {
            phonenumber_state = false;
            $('#telNr').parent().removeClass();
            $('#telNr').parent().addClass("form_error");
            $('#telNr').siblings("span").text('Telefonnummer darf nur Zahlen enthalten!');
        }
    });

    $('#un').on('blur', function(){

        var username = $('#un').val();
        if (username == '') {
            username_state = false;
            return;
        }

        $.ajax({
        url: 'index.php',
        type: 'post',
        data: {
            'username_check' : 1,
            'username' : username,
        },
        success: function(response){
            var result = response.split(/\r\n|\n\r|\n|\r/);  // split by:     \r\n  \n\r  \n  or  \r
            console.log("asdfasdfasdffffffffffffffffff" + result);

            if (result[1] == 'taken') {
                username_state = false;
                $('#un').parent().removeClass();
                $('#un').parent().addClass("form_error");
                $('#un').siblings("span").text('Der Username ist leider schon besetzt');
            }else if (result[1] == 'not_taken') {
                username_state = true;
                $('#un').parent().removeClass();
                $('#un').parent().addClass("form_success");
                $('#un').siblings("span").text('Username ist verfügbar');
            }
        }
        });
    });
    function isEmail(email) {
        var EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return EmailRegex.test(email);
      }
    $('#email').on('blur', function(){
        var email = $('#email').val();
        if (email == '') {
            email_state = false;
            return;
        }
        $.ajax({
         url: 'index.php',
         type: 'post',
         data: {
             'email_check' : 1,
             'email' : email,
         },
         success: function(response){
            var result = response.split(/\r\n|\n\r|\n|\r/);  // split by:     \r\n  \n\r  \n  or  \r
             if (result[1] == 'taken' ) {
                email_state = false;
                $('#email').parent().removeClass();
                $('#email').parent().addClass("form_error");
                $('#email').siblings("span").text('Die Email ist leider schon besetzt');
             }else if (result[1] == 'not_taken') {
                if(!isEmail(email)) {
                    email_state = false;
                    $('#email').parent().removeClass();
                    $('#email').parent().addClass("form_error");
                    $('#email').siblings("span").text('Die Email muss so ausschauen: {etwas}@{etwas}.{domain}');
                } else {
                    email_state = true;
                    $('#email').parent().removeClass();
                    $('#email').parent().addClass("form_success");
                    $('#email').siblings("span").text('Email ist verfügbar');
                }
             }
         }
        });
    });
    $('#psw-repeat').on('input', function(){
        var psw1 = $('#psw').val();
        var psw2 = $('#psw-repeat').val();
        if (psw2 == psw1) {
            password_state = true;
            $('#psw-repeat').parent().removeClass();
            $('#psw-repeat').parent().addClass("form_success");
            $('#psw').parent().removeClass();
            $('#psw').parent().addClass("form_success");
            $('#psw-repeat').siblings("span").text('Die Passwörter stimmen überein!');
        } else {
            password_state = false;
            $('#psw-repeat').parent().removeClass();
            $('#psw-repeat').parent().addClass("form_error");
            $('#psw').parent().removeClass();
            $('#psw').parent().addClass("form_error");
            $('#psw-repeat').siblings("span").text('Die Passwörter stimmen nicht überein!');
        }
    });
    $('#psw').on('input', function(){
        var psw1 = $('#psw').val();
        var psw2 = $('#psw-repeat').val();
        if (psw2 == psw1) {
            password_state = true;
            $('#psw-repeat').parent().removeClass();
            $('#psw-repeat').parent().addClass("form_success");
            $('#psw').parent().removeClass();
            $('#psw').parent().addClass("form_success");
            $('#psw-repeat').siblings("span").text('Die Passwörter stimmen überein!');
        } else {
            password_state = false;
            $('#psw-repeat').parent().removeClass();
            $('#psw-repeat').parent().addClass("form_error");
            $('#psw').parent().removeClass();
            $('#psw').parent().addClass("form_error");
            $('#psw-repeat').siblings("span").text('Die Passwörter stimmen nicht überein!');
        }
    });

    $('#regiBtn2').on('click', function(){
        var vn = $('#vn').val();
        var nn = $('#nn').val();
        var username = $('#un').val();
        var gebDat = $('#gebDat').val();
        var email = $('#email').val();
        var telNr = $('#telNr').val();
        var password = $('#psw').val();
        console.log(password);

        if (username_state == false || email_state == false || password_state == false || phonenumber_state == false) {
            $('#regError').show();
            $('#regError').text('Bitte zuerst die Fehler bei der Eingabe richtigstellen!');
       }else{
            $('#regError').hide();
            $('#vn').siblings("span").text('');
            $('#vn').parent().removeClass();
            $('#nn').siblings("span").text('');
            $('#nn').parent().removeClass();
            $('#un').siblings("span").text('');
            $('#un').parent().removeClass();
            $('#gebDat').siblings("span").text('');
            $('#gebDat').parent().removeClass();
            $('#email').siblings("span").text('');
            $('#email').parent().removeClass();
            $('#telNr').siblings("span").text('');
            $('#telNr').parent().removeClass();
            $('#psw').siblings("span").text('');
            $('#psw').parent().removeClass();
            $('#psw-repeat').siblings("span").text('');
            $('#psw-repeat').parent().removeClass();

            // proceed with form submission
            $.ajax({
                url: 'index.php',
                type: 'post',
                data: {
                    'save' : 1,
                    'vn' : vn,
                    'nn' : nn,
                    'username' : username,
                    'gebDat' : gebDat, 
                    'email' : email,
                    'telNr' : telNr,
                    'password' : password,
                },
                success: function(response){
                    console.log(response);
                    alert('Neuer Benutzer wurde angelegt!\nWillkommen ' + username + " :)");
                    $('#vn').val('');
                    $('#nn').val('');
                    $('#un').val('');
                    $('#gebDat').val('');
                    $('#email').val('');
                    $('#telNr').val('');
                    $('#psw').val('');
                    $('#psw-repeat').val('');
                }
            });
        }
    });
});