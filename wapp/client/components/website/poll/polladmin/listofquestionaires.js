Template.listofquestionaires.helpers({
    getquestionares: function() {
        return Questionaires.find({'pollid':Session.get('newpoll')._id});
    },
    questioncount: function() {
        return Questionaires.find({'pollid':Session.get('newpoll')._id}).count();
    }


});



Template.listofquestionaires.events({



    'click .deletequestion': function(e) {
        e.preventDefault();
        var id =e.currentTarget.id;
       // sAlert.info('Your message', configOverwrite);

        if (alert('Are you sure want to delete this question>')) {
         	
        var status=  Questionaires.remove({ '_id': id }, function(err, re) {

           		FlowRouter.go('/pollSubmit');
            });

        	if(status!=undefined)
        	{
        		FlowRouter.go('/pollSubmit');
        	}

        }
    },
    'click .edit':function(e)
    {
    	e.preventDefault();
    	var id = e.currentTarget.id;
    	FlowRouter.go('/editquestion/'+id);
    }
});
