Template.fblogin.events({
    'click #facebook-login': function(event) {
        // {
        //     requestPermissions: ['email', 'public_profile', 'user_friends', 'user_likes']
        // }
        Meteor.loginWithFacebook({}, function(err) {
            if (err) {
                console.log(err);
                throw new Meteor.Error("Facebook login failed");
            }
            else
            {
                  FlowRouter.go('/freeservicedashboard');
            }
            // console.log(Meteor.user().services.facebook.name);
            // console.log(Meteor.user().services.facebook.id);
            // console.log(Meteor.user().services.facebook.email);
            // console.log(Meteor.user().services.facebook.gender);
        });
    },

    'click #logout': function(event) {
        Meteor.logout(function(err) {
            if (err) {
               // throw new Meteor.Error("Logout failed");
                 sAlert.Error(err);
            }
            else
            {
                  sAlert.Success('Logged in successfully!');
            }
        })
    }
});
