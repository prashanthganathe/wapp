Meteor.methods({
    formSubmissionMethod: function(prospect, captchaData) {
        var verifyCaptchaResponse = reCAPTCHA.verifyCaptcha(this.connection.clientAddress, captchaData);
        if (!verifyCaptchaResponse.success) {
            console.log('reCAPTCHA check failed!', verifyCaptchaResponse);
            throw new Meteor.Error(422, 'reCAPTCHA Failed: ' + verifyCaptchaResponse.error);
        } 
        else
        {
            console.log('reCAPTCHA verification passed!');
            var status = Prospects.insert(prospect);
             if(status>0)                     
            console.log('Prospect Saved Successfully!');
            
        }       //do stuff with your formData
        return true;
    },
     forgotpassword: function(email, captchaData) {
        var verifyCaptchaResponse = reCAPTCHA.verifyCaptcha(this.connection.clientAddress, captchaData);
        if (!verifyCaptchaResponse.success) {
            console.log('reCAPTCHA check failed!', verifyCaptchaResponse);
            throw new Meteor.Error(422, 'reCAPTCHA Failed: ' + verifyCaptchaResponse.error);
        } 
        else
        {
           // var status = Prospects.insert(prospect);
           //forgot password login
            console.log('Subscribes reCAPTCHA verification passed!');
           var status= Subscribes.insert({'email':email});
            if(status>0)                     
            console.log('Subscribes Saved Successfully!');
           
        }       //do stuff with your formData
        return true;
    },

    publishblogpost: function(blogpost, captchaData) {
        var verifyCaptchaResponse = reCAPTCHA.verifyCaptcha(this.connection.clientAddress, captchaData);
        if (!verifyCaptchaResponse.success) {
            console.log('reCAPTCHA check failed!', verifyCaptchaResponse);
            throw new Meteor.Error(422, 'reCAPTCHA Failed: ' + verifyCaptchaResponse.error);
        } 
        else
        {
           // var status = Prospects.insert(prospect);
           //forgot password login
            console.log('publishblogpost: Blog reCAPTCHA verification passed!');
           var status= Blogs.insert(blogpost);
           if(status>0)                     
            console.log('Blog Saved Successfully!');
        }       //do stuff with your formData
        return true;
    },


updateblogpost: function(blogpost, captchaData) {
        var verifyCaptchaResponse = reCAPTCHA.verifyCaptcha(this.connection.clientAddress, captchaData);
        if (!verifyCaptchaResponse.success) {
            console.log('updateblogpost : reCAPTCHA check failed!', verifyCaptchaResponse);
            throw new Meteor.Error(422, 'reCAPTCHA Failed: ' + verifyCaptchaResponse.error);
        } 
        else
        {         
           console.log('updateblogpost: Blog reCAPTCHA verification passed!');

           var status= Blogs.update({'_id' : blogpost._id},
                                    {$set:
                                            { posttitle : blogpost.posttitle, 
                                              categories :blogpost.categories ,
                                              postcontent:blogpost.postcontent,
                                              snippet:blogpost.snippet,
                                              isdraft:blogpost.isdraft,
                                              day:blogpost.day,
                                              month:blogpost.month,
                                              postmetauser:blogpost.postmetauser,
                                              author:blogpost.author
                                            }
                                    });

           if(status>0)                     
            console.log('Blog Saved Successfully!');
        }       //do stuff with your formData
        return true;
    },


     blogcomment: function(comment, captchaData) {
        var verifyCaptchaResponse = reCAPTCHA.verifyCaptcha(this.connection.clientAddress, captchaData);
        if (!verifyCaptchaResponse.success) {
            console.log('reCAPTCHA check failed!', verifyCaptchaResponse);
            throw new Meteor.Error(422, 'reCAPTCHA Failed: ' + verifyCaptchaResponse.error);
        } 
        else
        {
           // var status = Prospects.insert(prospect);
           //forgot password login
            console.log('Blog reCAPTCHA verification passed!');
           var status= BlogComments.insert(comment);
           if(status>0)                     
            console.log('Blog Saved Successfully!');
        }       //do stuff with your formData
        return true;
    }

});