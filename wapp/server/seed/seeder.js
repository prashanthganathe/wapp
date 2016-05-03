Meteor.startup(function() {
    /*  var users = [
          {name:"Normal User",email:"normal@example.com",roles:[]},
          {name:"View-Secrets User",email:"view@example.com",roles:['view-secrets']},
          {name:"Manage-Users User",email:"manage@example.com",roles:['manage-users']},
          {name:"Admin User",email:"admin@example.com",roles:['admin']},
          {name:"Editor",email:"editor@example.com",roles:['editor']}
        ];

    _.each(users, function (user) {
      var id;

      id = Accounts.createUser({
        email: user.email,
        password: "apple1",
        profile: { name: user.name }
      });

      if (user.roles.length > 0) {
        // Need _id of existing user record so this call must come
        // after `Accounts.createUser` or `Accounts.onCreate`
        Roles.addUsersToRoles(id, user.roles, 'default-group');
      }

    });*/

    Accounts.validateNewUser(function(user) {

        return true;
        // var loggedInUser = Meteor.user();

        /* if (Roles.userIsInRole(loggedInUser, ['admin','manage-users'])) {
           // NOTE: This example assumes the user is not using groups.
           return true;
         }*/

        //throw new Meteor.Error(403, "Not authorized to create new users");
    });


    /*Accounts.config({ sendVerificationEmail: true, forbidClientAccountCreation: false });

    Accounts.onEmailVerificationLink(function(token, done) {
        console.log('inside onEmailVerificationLink');
        console.log('token');

        Accounts.verifyEmail(token, function(err) {
            if (err != null) {
                console.log(err.message);

            } else {
                console.log("Thank you your email address has been confirmed.");
            }
        })
    });*/

});
