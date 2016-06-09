Template.currentpolls.helpers({
    getpolllist: function() {
        var polls = Polls.find({ 'userid': Meteor.user()._id }).fetch();
        _.map(polls, function(item, index) {
            item.questioncount = Questionaires.find({ 'pollid': item._id }).count();
        });

        return polls;
    },
    getpolllistcount: function() {
        return Polls.find({ 'userid': Meteor.user()._id }).count();
    },
    // nonZeroQuestionaires:function(){
    //     return Polls.find({'userid':Meteor.user()._id}).count>0;      
    // },

    getqrcode: function(id) {
        Tracker.afterFlush(function() {
            $('.testqrcode').each(function(i, e) {
                $(e)
                    .empty()
                    .qrcode({
                        text: $(e).attr('data-qrcode'),
                        width: 128,
                        height: 128,
                        colorDark: "#00ff00",
                        colorLight: "#ff008f"

                    });
            });
        });
        return Meteor.absoluteUrl() + "poll/" + id; //Meteor.absoluteUrl() + counter.get();
    }
});


Template.currentpolls.events({
    /*'click #editpoll': function(e) {
        e.preventDefault();

        var id = $('#poll-select option:selected').val();
        var poll=Polls.findOne({'_id':id});
         Session.setPersistent('newpoll', poll);
         FlowRouter.go('/pollSubmit');
    },*/
    'click .add-question': function(e) {
        e.preventDefault();
        var id = e.target.id;
        var poll = Polls.findOne({ '_id': id });
        Session.setPersistent('newpoll', poll);
        FlowRouter.go('/pollSubmit');
    },
    'click .edit-poll': function(e) {
        e.preventDefault();
        var id = e.target.id;
        /*var poll=Polls.findOne({'_id':id});
         Session.setPersistent('newpoll', poll);
         FlowRouter.go('/pollSubmit');*/
    },
    'click .delete-poll': function(e) {
        e.preventDefault();
        var id = e.target.id;
        if (alert('Are you sure you want to delete the Poll and its questionaires?')) {
            var poll = Polls.remove({ '_id': id });
            if (poll != undefined)
                sAlert.success('Poll deleted successfully.');
        }

    }
});
