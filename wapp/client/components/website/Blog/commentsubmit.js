Template.commentsubmit.events({
    "submit form": function(e,b) {
      e.preventDefault();
        
        var comment={};
        comment.blogid =e.id;
        comment.fullname=$('#email').val();
        comment.email=$('#email').val();
        comment.comment=$('#comment').val();
        comment.month =moment().month();
        comment.date=moment().date();
        comment.year=moment().year();
        comment.time='';
        comment.createdat = new Date();
      
        var captchaData = grecaptcha.getResponse();
        Meteor.call('blogcomment', comment, captchaData, function(error, result) {
            // reset the captcha
            grecaptcha.reset();

            if (error) {
                console.log('There was an error: ' + error.reason);
            }
            else {
                 console.log('Success!');               
            }
        });
    }

});