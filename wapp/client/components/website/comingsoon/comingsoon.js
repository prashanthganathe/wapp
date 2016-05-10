Template.comingsoon.helpers({
    feature: function() {
        return FlowRouter.getParam('feature');
      
    }
    
 
});


Template.comingsoon.events({
    "submit form": function(e,b) {
      e.preventDefault();        
        Subscribes.insert({'email':$('#newsletterEmail').val()}, callback);
        FlowRouter.go('/');
}
});