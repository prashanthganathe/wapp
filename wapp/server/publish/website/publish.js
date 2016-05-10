Meteor.publish('prospect', function() {
    return Prospects.find();
});

Meteor.publish('subscribe', function() {
    return Subscribes.find();
});

Meteor.publish('poll', function() {
    return Polls.find();
});

Meteor.publish('questionaire', function() {
    return Questionaires.find();
});



Meteor.publish('secrets', function(group) {
    if (Roles.userIsInRole(this.userId, ['view-secrets', 'admin'], group)) {

        return Meteor.secrets.find({ group: group });

    } else {

        // user not authorized. do not publish secrets
        this.stop();
        return;

    }
});


Meteor.publish(null, function (){
  return Meteor.roles.find({})
});

Meteor.publish(null, function (){
  return Meteor.users.find({})
});


