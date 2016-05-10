/*Template.createpost.helpers({
    getStuff: function() {
        return "Amsterdam,Washington,Sydney,Beijing,Cairo";
    }
});
*/

Template.createpost.onRendered(function() {
    
    $('#summernote').summernote({
        height: 300, // set editor height
        minHeight: null, // set minimum height of editor
        maxHeight: null, // set maximum height of editor
        focus: true // set focus to editable area after initializing summernote
    });

    $('.tags').tagsinput({ });

});


Template.createpost.events({
    "submit form": function(e,b) {
      e.preventDefault();
        
        var blogpost={};
        blogpost.titleimages=[];
        blogpost.posttitle=$('#title').val();
        blogpost.categories=$('#tags-input').val().split(',');
        blogpost.postcontent=$('#summernote').summernote('code');
        blogpost.snippet=$('#snippet').val();
        

        if($(this).id =="btndraft")
        {
			blogpost.isdraft=true;
        }   
        blogpost.day=moment().date();
        blogpost.month=moment().month();
        blogpost.postmetauser='currentuserinfo';      
        blogpost.author='currentusername';
       // blogpost.createdat=new Date();

        var captchaData = grecaptcha.getResponse();
        Meteor.call('publishblogpost', blogpost, captchaData, function(error, result) {
            // reset the captcha
            grecaptcha.reset();
            if (error) {
                console.log('There was an error: ' + error.reason);
            }
            else {
                 console.log('Success!');
                 FlowRouter.go("/blogcreated");
               /* Meteor.call('sendemail', prospect, 'templatename', function(error, result) {
                    console.log('email sent!');
                 });*/
            }
        });


    }
});
