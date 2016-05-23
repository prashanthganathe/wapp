Template.googlelogin.events({
    'click #google-login': function(event) {
        // {
        //     requestPermissions: ['email', 'public_profile', 'user_friends', 'user_likes']
        // }
        Meteor.loginWithGoogle({requestPermissions: ['email', 'profile']}, function(err) {
            if (err) {
                console.log(err);
                throw new Meteor.Error("Facebook login failed");
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
                throw new Meteor.Error("Logout failed");
            }
        })
    }
});