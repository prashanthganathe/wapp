
/*Meteor.startup( function() {
  process.env.MAIL_URL = "smtp://postmaster%40<your-mailgun-address>.mailgun.org:password@smtp.mailgun.org:587";
});*/

Meteor.startup(function() {

    console.log('startup');
   // process.env["MAIL_URL"] = "smtp://postmaster@sandbox49a2175c6765407ab8997d502b4eecaa.mailgun.org:49c64015180701dda265148be60ec6c7@smtp.mailgun.org:587";
  
process.env.MAIL_URL = "smtp://postmaster%40sandbox49a2175c6765407ab8997d502b4eecaa.mailgun.org:49c64015180701dda265148be60ec6c7@smtp.mailgun.org:587";

    function TestMail() {
        SSR.compileTemplate('htmlEmail', Assets.getText('html-email.html'));

        var emailData = {
            name: "Doug Funny",
            favoriteRestaurant: "Honker Burger",
            bestFriend: "Skeeter Valentine"
        };

        Email.send({
            to: "prashanthganathe@gmail.com",
            from: "amm@email.com",
            subject: "Example Email",
            html: SSR.render('htmlEmail', emailData)
        });
    }

  


});

/*
curl -s --user 'api:key-49c64015180701dda265148be60ec6c7' \
    https://api.mailgun.net/v3/sandbox49a2175c6765407ab8997d502b4eecaa.mailgun.org/messages \
    -F from='Mailgun Sandbox <postmaster@sandbox49a2175c6765407ab8997d502b4eecaa.mailgun.org>' \
    -F to='media <mediaganathe@gmail.com>' \
    -F subject='Hello media' \
    -F text='Congratulations media, you just sent an email with Mailgun!  You are truly awesome!' */