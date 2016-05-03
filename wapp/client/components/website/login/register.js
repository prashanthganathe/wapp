Template.register.events({
            'submit form': function(event) {

              //  var data, validationErrors;

                event.preventDefault();
               // data = userInputParse($(event.target));
               // validationErrors = userObjectValidate(data);


                var email = $('#email').val();
                var password = $('#password').val();
                var data={};
                data.email=email;
                data.password=password;
                data.username=email;
                data.profile={'name':$('#name').val()};
                var roles=['user'];

                 Meteor.call('createUserWithRole', data,roles, function(error, result) {
                    if(error)
                    {

                    }
                    else
                    {
                        console.log('created successfully');
                    }
                 });

               /* Accounts.createUser({
     username: email,
     email: email,
     password: password,
     profile: {
         //publicly visible fields like firstname goes here
     }

 });
*/
            }

            });
