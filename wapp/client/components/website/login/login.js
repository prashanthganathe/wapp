Template.loginform.events({
    'click #logout':function(){
        Meteor.logout();
    },
    'submit form': function(){
          event.preventDefault();
        var email = $('#loginemail').val();
        var password = $('#loginpassword').val();

        Meteor.loginWithPassword(email, password,  function(err) {

        if (err){
        	//console.log('login failed.'+ err);
             sAlert.error(err);
        }
        else
        {
            sAlert.success('Successfully Loggedin.');
           // FlowRouter.redirect('/freeservicedashboard');

        }
    });
    }
});

