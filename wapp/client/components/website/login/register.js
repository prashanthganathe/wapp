Template.register.events({
            'submit form': function(event) {

              //  var data, validationErrors;

                event.preventDefault();
               // data = userInputParse($(event.target));
               // validationErrors = userObjectValidate(data);


                var email = $('#email').val();
                var password = $('#password').val();
                var confirmpassword = $('#confirmpassword').val();
                if(password !==confirmpassword)
                {
                    sAlert.error('Password is not matching, please correct and retry!');
                    return;
                }
                var data={};
                data.email=email;
                data.password=password;
                data.username=email;
                data.profile={'name':$('#name').val()};
                var roles=['user'];

                 Meteor.call('createUserWithRole', data,roles, function(error, result) {
                    if(error)
                    {
                         sAlert.error('Some problem with Registration, please retry with other credentials.');
                        
                    }
                    else
                    {
                         sAlert.success('Successfully Registered. Please check your email to activate and proceed. ');
                          FlowRouter.go('/login');
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
