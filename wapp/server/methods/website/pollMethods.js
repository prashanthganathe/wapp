Meteor.methods({
    createPoll: function(poll) {

        var newpoll = Polls.insert(poll);
        return newpoll;
    },

    addquestionaire: function(pollAttributes, pollid,user) {
       /* check(Meteor.userId(), String);
        check(pollAttributes, {
            title: String,
            options: Array
        });
*/	


        var options = pollAttributes.options;
        var votes = {};
        for (var i = 0; i < options.length; i++) {
            votes[options[i].id] = 0;
        }

        // var errors = validatePoll(pollAttributes); 
        //  if (errors.title || errors.options)
        //  throw new Meteor.Error('invalid-poll', "You must set title and options for your poll");

       // var user = Meteor.user();
        var question = _.extend(pollAttributes, {
            pollid: pollid,
            userId: user._id,
            author: user.username,
            submitted: new Date(),
            voters: [],
            votes: votes,
            voteCount: 0
        });
       // console.log('question');

//console.log(question);

        var questionid = Questionaires.insert(question);

        console.log('questionid:'+questionid);

        //add the poll and karma to author
        Meteor.users.update({
            _id: user._id
        }, {
            $addToSet: { polls: pollid },
            $inc: { karma: 1 }
        });

        return questionid;
       
    },

    pollDelete: function(pollId) {
        Polls.remove(pollid);
    },

    vote: function(pollId, optionId) {
        check(this.userId, String);
        check(pollId, String);
        check(optionId, String);

        var ud = { $inc: {} };
        ud.$inc['votes.' + optionId] = 1;
        ud.$inc['voteCount'] = 1;
        ud.$addToSet = { voters: this.userId };

        var affected = Polls.update({
            _id: pollId,
            voters: { $ne: this.userId }
        }, ud);

        //add the vote to author's karma
        var poll = Polls.findOne(pollId);
        Meteor.users.update({
            _id: poll.userId
        }, {
            $inc: { karma: 1 }
        });

        if (!affected) throw new Meteor.Error('invalid', "You weren't able to vote for this poll");
    }
});

validatePoll = function(poll) {
    var errors = {};
    if (!poll.title) {
        errors.title = "Please fill in a question";
    } else if (poll.title.length < 10) {
        errors.title = "Question is too short"
    } else if (!poll.options || poll.options.length < 2) {
        errors.options = "Please fill in atleast 2 options";
    }
    return errors;
};
