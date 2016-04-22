Template.login.events({
    'submit form': function(){
          event.preventDefault();
        var email = $('#loginemail').val();
        var password = $('#loginpassword').val();

        Meteor.loginWithPassword(email, password);
    }
});

