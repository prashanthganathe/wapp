Meteor.publish('prospect', function() {  
   return Prospects.find();
});

Meteor.publish('subscribe', function() {  
   return Subscribes.find();
});