Template.footer.events({
    "submit form": function(e,b) {
      e.preventDefault();
        
        Subscribes.insert({'email':$('#txtsubscribe').val()}, callback);
      /*  var prospect={};
        prospect.fullname=$('#name').val();
        prospect.email=$('#email').val();
        prospect.phone=$('#phone').val();
        prospect.category=$("#subject option:selected" ).text();
        prospect.country= $("#country option:selected" ).text();
        prospect.details= $("#message").val();

   
        var captchaData = grecaptcha.getResponse();
        Meteor.call('formSubmissionMethod', prospect, captchaData, function(error, result) {
            // reset the captcha
            grecaptcha.reset();

            if (error) {
                console.log('There was an error: ' + error.reason);
            }
            else {
                 console.log('Success!');
                Meteor.call('sendemail', prospect, 'templatename', function(error, result) {
                    console.log('email sent!');
                 });
            }
        });
    }*/
}
});