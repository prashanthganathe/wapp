Template.pollresponse.helpers({
    getquestions: function() {
        return Questionaires.find({ 'pollid': FlowRouter.getParam('pid') }).fetch();
    },
    questioncount: function() {
        return Questionaires.find({ 'pollid': FlowRouter.getParam('pid') }).count();
    }
});