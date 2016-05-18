Template.pollheader.helpers({ 
  polldetail: function() {
    return Polls.findOne({'_id': FlowRouter.getParam('pid')});
  }
});
