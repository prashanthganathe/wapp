Template.logout.events({
    'click #btnlogout': function(e) {
        Meteor.logout(function(err) {
            // callback
            FlowRouter.go('/');
        });
    },
    'click #btnlogin': function(e) {
      
            FlowRouter.go('/login');
       
    }

    

});
