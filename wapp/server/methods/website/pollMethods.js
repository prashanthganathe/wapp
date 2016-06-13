function createJSON(propertyName, value) {
    var ob = {};
    ob[propertyName] = value;
    return ob;
}


Meteor.methods({
    createPoll: function(poll) {
        console.log(poll);
        var newpoll = Polls.insert(poll);
        return newpoll;
    },

    addquestionaire: function(question, user) {
        /* check(Meteor.userId(), String);
        check(pollAttributes, {
            title: String,
            options: Array
        });
*/
        /*var options = pollAttributes.options;*/
        var votes = [];
        for (var i = 0; i < question.options.length; i++) {
            // votes[question.options[i].id] = 0;
            votes.push(createJSON(question.options[i].id, 0));
        }
        var questionfinal = _.extend(question, {
            voters: [],
            votes: votes,
            voteCount: 0
        });

        /*    var votes = {};
            question.votes={};
            console.log('before votes')
            console.log(question);           
            _.map(question.options, function(value, key) {              
                 //question.votes[value.id]=0;
                //question.votes[value.id] =0;
                votes[value.id]=0;
            });
            question.votes= votes;*/
       // console.log('after map');
       // console.log(question);
        /*  for (var i = 0; i < question.options.length; i++) {

              question.votes[question.options[i].id] = 0;
          }*/

        //    console.log('votes');
        //   console.log(votes);
        // var errors = validatePoll(pollAttributes); 
        //  if (errors.title || errors.options)
        //  throw new Meteor.Error('invalid-poll', "You must set title and options for your poll");
        // var user = Meteor.user();
        /* var question = _.extend(pollAttributes, {
             pollid: pollid,
             userId: user._id,
             author: user.username,
             submitted: new Date(),
             voters: [],
             votes: votes,
             voteCount: 0
         });*/
        // console.log('question');
        //console.log(question);

        var questionid = Questionaires.insert(questionfinal);
       // console.log(votes);
        /*  Questionaires.update({
                   _id: questionid
                 }, {
                   $set: {
                     votes: votes
                    
                   }
                 });*/

        // $addToSet: { polls: question.pollid },

        console.log('questionid:' + questionid);

        //add the poll and karma to author
        Meteor.users.update({
            _id: user._id
        }, {
            $addToSet: { polls: question.pollid },
            $inc: { karma: 1 }
        });

        return questionid;

    },

    pollDelete: function(pollId) {
        Polls.remove(pollid);
    },
   
       submitvote: function(questionSubmit) {
        /* check(this.userId, String);
         check(pollId, String);
         check(optionId, String);*/

        console.log('submitvote');
        console.log(questionSubmit);
        //https://www.wiredprairie.us/blog/index.php/archives/1895

        /*  db.getCollection('questionaires').update( 
              { '_id': 'd9LAWL2TiSs6mYzdW'},    
              {  $inc : {"votes.1.o1":1, voteCount:1},
                 $addToSet : { voters: 'useridsf' }              
                  }    
              )*/


        /* var ud = { $inc: {} };
         ud.$inc['votes.' + questionSubmit.optionId] = 1;
         ud.$inc['voteCount'] = 1;
         ud.$addToSet = { voters: questionSubmit.userId };

         console.log('ud');
         console.log(ud);*/

        // db.collection.update({a:1, "b._id":341445} , {$inc:{"b.$.c":1}})

        var incobj = {};
        incobj["votes." + questionSubmit.optionId[1] + "." + questionSubmit.optionId] = 1;
        incobj.voteCount = 1;

        var affected = Questionaires.update({
            _id: questionSubmit.qId,
            voters: { $ne: questionSubmit.userId }
        }, {
            $inc: incobj,
            $addToSet: { voters: questionSubmit.userId }
        });


        //add the vote to author's karma
        var questionaire = Questionaires.findOne(questionSubmit.qId);
        var status = Meteor.users.update({ _id: questionaire.userid }, { $inc: { karma: 1 } });

        if (!affected) throw new Meteor.Error('invalid', "You weren't able to vote for this poll");

    },

    validatePoll : function(poll) {
        var errors = {};
        if (!poll.title) {
            errors.title = "Please fill in a question";
        } else if (poll.title.length < 10) {
            errors.title = "Question is too short"
        } else if (!poll.options || poll.options.length < 2) {
            errors.options = "Please fill in atleast 2 options";
        }
        return errors;
    }
});
