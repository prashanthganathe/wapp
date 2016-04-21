Meteor.methods({
    sendemail: function(object, templatename) {

       Email.send({
        from: "mediaganathe@gmail.com",
        to: "mediaganathe@gmail.com",
        subject: "Subject",
        text: 'asdfasdf'
        });
       return true;
    }
});