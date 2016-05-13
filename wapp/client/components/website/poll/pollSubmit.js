Session.setPersistent('pollOptions', [_.random(0, 1000000), _.random(0, 1000000)]);

Template.pollSubmit.helpers({
    poll: function() {
        return Session.get('newpoll');
    }   
 
});






