$(document).ready(function(){
  $('.field input').keyup(function() {
    var empty = false;
    $('.field input').each(function() {
        if ($(this).val().length == 0) {
            empty = true;
        }
    });

    if (empty) {
        $('.btn[type="submit"]').attr('disabled', 'disabled');
    } else {
        $('.btn[type="submit"]').removeAttr('disabled');
    }
  });



   $('#mail').submit(function(e) {
     e.preventDefault();
     Email.send({
Host : "https://mandrillapp.com/api/1.0/messages/send.json",
Username : "rvsatyam2000@gmail.com",
Password : "Satyam@123",
To : 'satyammane6@gmail.com',
From : "rvsatyam2000@gmail.com",
Subject : "This is the subject",
Body : "And this is the body"}).then( message => alert(message));

});

});
