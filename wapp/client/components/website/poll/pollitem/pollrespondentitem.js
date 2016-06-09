Template.pollrespondentitem.helpers({
    getquestions: function() {
        return Questionaires.find({ 'pollid': FlowRouter.getParam('pid') }).fetch();
    },
    questioncount: function() {
        return Questionaires.find({ 'pollid': FlowRouter.getParam('pid') }).count();
    },

    someReactiveData: function() {
        //$(e).attr('data-qrcode')
        //Meteor.absoluteUrl+"/pollrespondentitem/"+FlowRouter.getParam('pid')
        Tracker.afterFlush(function() {     
            $('.testqrcode').each(function(i, e) {
                $(e)
                    .empty()
                    .qrcode({
                        text: $(e).attr('data-qrcode'),
                        width: 200,
                        height: 200,
                        colorDark: "#00ff00",
                        colorLight: "#ff008f"
                       
                         

                    });
            });
         });
        return Meteor.absoluteUrl()+"pollrespondentitem/"+FlowRouter.getParam('pid');
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
/*$(input[type=radio]).click(function() {
    //$(this).addClass('active').siblings().removeClass('active');

    // TODO: insert whatever you want to do with $(this) here
});*/



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

        /* var result = Meteor.call("submitvotes",votes,questionSubmit);
         if(result)
         {
             sAlert.success('Your vote is submitted.');
             FlowRouter.go('/createpoll');
         }
         else
         {
            sAlert.error('Ooops, could not able to submit your response.');
         }*/

        var pollsubmit = _.map(votes, function(value, key) {          
            questionSubmit.qId =$(value).attr('name');
            questionSubmit.optionId=$(value).attr('data-selected');           
            Meteor.call('submitvote',questionSubmit,  function(error, result) {
                if (error) {
                    //console.log('There was an error: ' + error.reason);
                    sAlert.error('There was an error: ' + error.reason);
                } else {
                   // console.log('vote is submitted');                   
                }
            });           
        });

         
    }
});
