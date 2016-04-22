Template.forgotpassword.events({
    "submit form": function(e,b) {
      e.preventDefault();
        
      
       
        var email=$('#email').val();
        
   
        var captchaData = grecaptcha.getResponse();
        Meteor.call('forgotpassword', email, captchaData, function(error, result) {
            // reset the captcha
            grecaptcha.reset();

            if (error) {
                console.log('There was an error: ' + error.reason);
            }
            else {
                 console.log('Success!');
                Meteor.call('sendemail', email, 'forgotpasswordtemplate', function(error, result) {
                    console.log('email sent!');
                 });
            }
        });
    }

});