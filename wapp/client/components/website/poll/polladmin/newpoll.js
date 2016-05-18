Template.newPoll.helpers({
    useremail: function() {
        return Meteor.user().emails[0].address;
      
    }
    
 
});

Template.newPoll.events({


    'submit form': function(e) {

        // stop the form from submitting
        e.preventDefault();
        var poll = {};
        poll.name = $('#name').val();
        poll.email = $('#email').val();
        poll.description = $('#descripiton').val();
        poll.userid=Meteor.user()._id;
        //poll.share
       
        Meteor.call('createPoll', poll, function(error, result) {
            if (error) {
                console.log('There was an error: ' + error.reason);
            } else {
                var pollobj = result;
                console.log(pollobj);
                poll._id=pollobj;
                Session.setPersistent('newpoll', poll);
                FlowRouter.go('/pollSubmit');
            }
        });
    }

});
