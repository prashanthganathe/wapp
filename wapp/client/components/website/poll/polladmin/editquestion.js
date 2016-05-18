Template.editquestion.helpers({
    getquestion: function() {
    	var qid=  FlowRouter.getParam('questionid');
        var question= Questionaires.findOne({'_id':qid});      
        Session.setPersistent('pollOptions', question.options);
        /*Session.setPersistent('pollOptions', 
					  [_.random(0, 1000000), 
					   _.random(0, 1000000)
					  
					  ]);*/
        return question;
    } ,
    pollOptions: function() {
        return Session.get('pollOptions');
    } ,
    getpollname:function()
    {
    	var qid=  FlowRouter.getParam('questionid');
        var question= Questionaires.findOne({'_id':qid});   
        var pollid=question.pollid;   
         return Polls.findOne({'_id':pollid}).name;   
    }
});



Template.editquestion.events({
	 'click .add-option': function(e) {
	 	if(Session.get('pollOptions')==undefined)
	 	{
	 		var options=[];
	 		

	 	}
        pollOptions = Session.get('pollOptions');
        pollOptions.push({'id':'','option':''});
        Session.set('pollOptions', pollOptions);
    },
'click .delete-option': function(e) {
	e.preventDefault();
	var id= e.target.id;
	if(alert('Are you sure to delete the question, its report will also get deleted..'))
	{
	var status = Questionaires.remove({'_id':id}); 
	 if(status !=undefined)
        {
        	 sAlert.success('Question deleted successfully.');
        	 FlowRouter.go('/pollSubmit');
        }
    }

},

    'submit form': function(e) {
        e.preventDefault();
        var id=FlowRouter.getParam('questionid');
        var title = $(e.target).find('[name=question]').val();
        var options = [];
        var i = 0;
        $(e.target).find('[name=option]').each(function() {
            var s = $(this).val();
            if (s.length) {
                options.push({
                    id: 'o' + i,
                    option: $(this).val()
                });
                i++;
            }
        });

        var oldquestion = Questionaires.findOne({'_id':id});   
        oldquestion.title=  title;
        oldquestion.options= options;
        var status = Questionaires.update({_id:id},{ $set: {'title':title,'options':oldquestion.options}});// have to test
        if(status !=undefined)
        {
        	 sAlert.success('Question updated successfully.');
        	 FlowRouter.go('/pollSubmit');
        }

    }   


    
});