Meteor.methods({
    formSubmissionMethod: function(prospect, captchaData) {

        var verifyCaptchaResponse = reCAPTCHA.verifyCaptcha(this.connection.clientAddress, captchaData);

        if (!verifyCaptchaResponse.success) {
            console.log('reCAPTCHA check failed!', verifyCaptchaResponse);
            throw new Meteor.Error(422, 'reCAPTCHA Failed: ' + verifyCaptchaResponse.error);
        } 
        else
        {
            var status = Prospects.insert(prospect);
            console.log('reCAPTCHA verification passed!');
        }

        //do stuff with your formData

        return true;
    }
});