Template.pollrespondentitem.helpers({
    getquestions: function() {
        return Questionaires.find({ 'pollid': FlowRouter.getParam('pid') }).fetch();
    },
    questioncount: function() {
        return Questionaires.find({ 'pollid': FlowRouter.getParam('pid') }).count();
    }
});




Template.pollrespondentitem.rendered = function() {

    $('.collapse.in').prev('.panel-heading').addClass('active');
    $('#accordion, #bs-collapse')
        .on('show.bs.collapse', function(a) {
            $(a.target).prev('.panel-heading').addClass('active');
        })
        .on('hide.bs.collapse', function(a) {
            $(a.target).prev('.panel-heading').removeClass('active');
        });

};


Template.pollrespondentitem.events({
    'submit form': function(e) {
        if (!Meteor.userId()) {
            alert("You are required to login to vote");
            return;
        }
        //var pollId = $(e.target).data('pollid');
        /*var optionId = $(e.target).data('optionid');
        Meteor.call('vote', pollId, optionId, function() {
            console.log("voted");
        });*/

        var votes = $('[type=radio]:checked');
        var questionSubmit={};
         questionSubmit.userId=Meteor.userId();
        var pollsubmit = _.map(votes, function(value, key) {
          //  var transfer = {};
           // transfer[$(value).attr('name')] = $(value).attr('data-selected');

            
            questionSubmit.qId =$(value).attr('name');
            questionSubmit.optionId=$(value).attr('data-selected');
           
            Meteor.call('submitvote',questionSubmit,  function(error, result) {
                if (error) {
                    //console.log('There was an error: ' + error.reason);
                    sAlert.error('There was an error: ' + error.reason);
                } else {
                   // console.log('vote is submitted');
                     sAlert.success('Your vote is submitted.');
                     FlowRouter.go('/createpoll');
                }

            });
            //$('[type=radio]:checked').attr('name')

        });
    }
});
