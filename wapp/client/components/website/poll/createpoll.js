Template.createpoll.events({


    'submit form': function(e) {

        // stop the form from submitting
        e.preventDefault();
        var poll = {};
        poll.name = $('#name').val();
        poll.email = $('#email').val();
        poll.description = $('#descripiton').val();
       
        Meteor.call('createPoll', poll, function(error, result) {
            if (error) {
                console.log('There was an error: ' + error.reason);
            } else {
                var pollobj = result;
                console.log(pollobj);

                Session.set('newpoll', pollobj);
                FlowRouter.go('/pollSubmit');
            }
        });
    }

});
