Template.pollresponse.helpers({
    getquestions: function() {
        return Questionaires.find({ 'pollid': FlowRouter.getParam('pid'), 'userid': Meteor.userId()}).fetch();
    },
    questioncount: function() {
        return Questionaires.find({ 'pollid': FlowRouter.getParam('pid') }).count();
    }
});