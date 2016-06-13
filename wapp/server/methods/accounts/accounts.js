Accounts.onCreateUser(function(options, user) {
    var result;

    //console.log(JSON.stringify(user));
    console.log(user);

    user.profile = options.profile || {};
    //  if (options.profile) {
    //  user.profile = options.profile || {};
    if (typeof(user.services.google) == "undefined" && typeof(user.services.google) == "undefined") {
        user.profile.picture = 'http://www.sonniss.com/wp-content/uploads/edd/2015/08/17797.png';
        user.profile.email = user.username;
    }



    if (typeof(user.services.facebook) != "undefined") {
        result = Meteor.http.get("https://graph.facebook.com/me", {
            params: {
                access_token: user.services.facebook.accessToken
            }
        });
        if (!result.error && result.data) {
            user.profile.facebook = result.data;
            user.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
            user.profile.email = user.services.facebook.email;
        }
    }


    if (typeof(user.services.google) != "undefined") {
        user.profile.picture = user.services.google.picture;
        user.profile.email = user.services.google.email;
    }




    user.roles = ["User"];
    //Account settings
    //user.profile.active = false; //Account is not active on creation
    //user.profile.trial = true; //Accounts have 1 month trial
    // user.profile.expiration           =   moment().add(1,'M');           //No expiration date on unactivated accounts
    //user.profile.bill = null; //Bill monthly, yearly
    //user.profile.ppId = null; //Paypal Id for associated credit card
    //user.profile.resources = 0; //Number of resources an account has created
    //user.profile.resourceLimit = 2; //Limit for the number of resources an account can have   
    user.profile.phone = null; //Phone is blank when created
    //user.roles = {__global_roles__: []};
    //Roles.addUsersToRoles(user._id, ['User','Admin']);

    // var categories = categories.find();
    //user.profile.category = [];

    // _.map(categories, function(item, index) {
    //     user.profile.category.push(item.name);
    // });

    // console.log('Category  :'+JSON.stringify(user.profile.category));
    //  console.log('user email  :'+JSON.stringify(user.profile.category));

    // if (ReactiveMethod.call('SendWelcomeMail', user.profile.email)) {
    //     return user;
    // }
    // else
    //     return false;


    //Send WelcomeEmail
    //  Meteor.call('SendWelcomeMail',user.profile.email);
    console.log(user);
    if(Meteor.absoluteUrl()=="http://localhost:4000/" || Meteor.absoluteUrl()=="http://localhost:3000")
        return user;
    else
    {
        Meteor.call('SendWelcomeMail', user.profile.email, user);
        return user;
    }   


});
