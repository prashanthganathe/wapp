Meteor.startup(function() {
    reCAPTCHA.config({
        publickey: '6LdtpB4TAAAAAAOsvakoIyDjKL656Ini8F_Bo_Q1'
        
    });
});


//localhost  publickey: '6LdtpB4TAAAAAAOsvakoIyDjKL656Ini8F_Bo_Q1'
//domain  publickey: '6LcnpR4TAAAAAGlSOzOe06gLRUk-ypUKHJ0twJoa'

Meteor.startup(function () {

    sAlert.config({
        effect: '',
        position: 'bottom-right',
        timeout: 5000,
        html: false,
        onRouteClose: true,
        stack: true,       
        offset: 0, // in px - will be added to first alert (bottom or top - depends of the position in config)
        beep: false,       
        onClose: _.noop //     
    });

});