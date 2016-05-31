/*Meteor.methods({
    sendemail: function(object, templatename) {

       Email.send({
        from: "mediaganathe@gmail.com",
        to: "mediaganathe@gmail.com",
        subject: "Subject",
        text: 'asdfasdf'
        });
       return true;
    }
});*/

Meteor.methods({

 SendWelcomeMail: function(emailid, userobject) { //emailids are  array

     console.log(emailid);
     console.log(userobject)

         this.unblock();

        
         var body='//extra content';
         userobject.url='http://wapp.co.in';

       //  if (!Meteor.user())
            // throw new Meteor.Error(403, 'not logged in');

        SSR.compileTemplate('htmlEmail', Assets.getText('welcome.html'));
        console.log('after compiletemplate');

        var emailData = {
            title: "Welcome to your",
            email: emailid,
            name: userobject.profile.name,
            body: body,
            redirecturl: "http://wapp.co.in/useractivate",      
            refurl:''   
        };
       

console.log('sending email');
       
	        Email.send({
	            to: emailid,//"prashanthganathe@gmail.com",
	            from: "noreply@wapp.co.in",
	            subject: "Welcome to Wapp",	
	            html: SSR.render('htmlEmail', emailData)
	        });
	  
    },


     SendNotification: function(emailid,object) {
         this.unblock();
         if (!Meteor.user())
             throw new Meteor.Error(403, 'not logged in');

        SSR.compileTemplate('htmlEmail', Assets.getText('notification.html'));
        var emailData = {
            title: object.title,//"Welcome to your",
            body: object.body        
        };
       

       
	        Email.send({
	            to: emailid,//"prashanthganathe@gmail.com",
	            from: "noreply@wapp.co.in",
	            subject: "Welcome to Wapp",
	            html: SSR.render('htmlEmail', emailData)
	        });
    	
    },

     SendNewLetter: function(emailid,object) {
         this.unblock();
         if (!Meteor.user())
             throw new Meteor.Error(403, 'not logged in');

        SSR.compileTemplate('htmlEmail', Assets.getText('newsletter.html'));
        var emailData = {
            title: object.title,//"Welcome to your",
            body: object.body        
        };
       

      
	        Email.send({
	            to: emailid,//"prashanthganathe@gmail.com",
	            from: "amm@email.com",
	            subject: "Welcome to Amm",
	            html: SSR.render('htmlEmail', emailData)
	        });
    	
    }

});
