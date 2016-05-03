/*https://github.com/alanning/meteor-roles*/


Meteor.methods({

    /**
     * delete a user from a specific group
     *
     * @method deleteUser
     * @param {String} targetUserId _id of user to delete
     * @param {String} group Company to update permissions for
     */
    deleteUser: function(targetUserId, group) {
        var loggedInUser = Meteor.user()

        if (!loggedInUser ||
            !Roles.userIsInRole(loggedInUser, ['manage-users', 'support-staff'], group)) {
            throw new Meteor.Error(403, "Access denied")
        }

        // remove permissions for target group
        Roles.setUserRoles(targetUserId, [], group)

        // do other actions required when a user is removed...
    },


    updateRoles: function(targetUserId, roles, group) {
        var loggedInUser = Meteor.user()

        if (!loggedInUser ||
            !Roles.userIsInRole(loggedInUser, ['manage-users', 'support-staff'], group)) {
            throw new Meteor.Error(403, "Access denied")
        }

        Roles.setUserRoles(targetUserId, roles, group)
    },


    'createUserWithRole': function(data, role) {
        var userId;

        Meteor.call('createUserNoRole', data, function(err, result) {
            if (err) {
                return err;
            }
            Roles.addUsersToRoles(result, role);
            return userId = result;
        });
        return userId;
    },
    'createUserNoRole': function(data) {
        //Do server side validation
        
        var user= Accounts.createUser({
            email: data.email,
            username: data.email,
            password: data.password,
            profile: data.profile
        });

        console.log(user);

        Meteor.users.update(user._id, {
            $set: { "emails[0]verified": true }
        });

        return user;
    }






});



/*Accounts.onCreateUser(function(options, user) {
  var d6 = function () { return Math.floor(Random.fraction() * 6) + 1; };
  user.dexterity = d6() + d6() + d6();
  // We still want the default hook's 'profile' behavior.
  if (options.profile)
    user.profile = options.profile;
  return user;
});*/
