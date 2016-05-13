Template.listofquestionaires.helpers({
    getquestionares: function() {
        return Questionaires.find({});
      
    }
    
 
});

deletequestion

Template.listofquestionaires.events({
  'click .deletequestion': function(e) {
  	 e.preventDefault();
  	 var id = $(e.currentTarget);
  	 if(alert('Are you sure want to delete this question>'))
  	 {
	  	 Questionaires.remove({'_id':id}, function(err,re){

	  	 });
  	}
  }});