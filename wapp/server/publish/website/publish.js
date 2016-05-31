Meteor.publish('prospect', function() {
    return Prospects.find();
});

Meteor.publish('subscribe', function() {
    return Subscribes.find();
});

Meteor.publish('polls', function() {
    return Polls.find();
});

Meteor.publish('questionaires', function() {
    return Questionaires.find();
});

Meteor.publish('myquestionresult', function(qid) {
    return Questionaires.find({'_id':qid});
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

Meteor.publish(null, function() {
  return Meteor.users.find(this.userId, { fields: { 
    'services.google.accessToken': 1, 
    'services.google.expiresAt': 1 
  }});
});

