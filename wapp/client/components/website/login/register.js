
Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('#email').val();
        var password = $('#password').val();

        Accounts.createUser({
            email: email,
            password: password
        });
    }
});