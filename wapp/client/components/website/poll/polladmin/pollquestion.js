

Template.pollquestion.events({
    'submit form': function(e) {
        e.preventDefault();
        var title = $(e.target).find('[name=question]').val();
        var options = [];
        var i = 0;
        $(e.target).find('[name=option]').each(function() {
            var s = $(this).val();
            if (s.length) {
                options.push({
                    id: 'o' + i,
                    option: $(this).val()
                });
                i++;
            }
        });

        var questionaire = {
            title: title,
            options: options,
            pollid:Session.get('newpoll')._id,
            userid:Meteor.user()._id,
            author: Meteor.user().profile.email


        };

        //var errors = validatePoll(poll);
        //if (errors.title || errors.options) {
       //     return Session.set('pollSubmitErrors', errors);
       // }
       var user = Meteor.user();
       
        Meteor.call('addquestionaire', questionaire, user,function(error, result) {
           if (error) 
              {
                 //throw err
              }
           else
           {
                sAlert.success('Question created successfully.');

                $(e.target).find('[name=question]').val('');
                $(e.target).find('[name=option]').each(function() {
                     $(this).val('');
                });
           }
        
        });
    },

    'click .add-option': function(e) {
        pollOptions = Session.get('pollOptions');
        pollOptions.push(_.random(0, 1000000));
        Session.set('pollOptions', pollOptions);
    },

    'click .delete-option': function(e) {
        var id = $(e.currentTarget).data('optionid');
        pollOptions = Session.get('pollOptions');
        pollOptions = _.without(pollOptions, id);
        Session.set('pollOptions', pollOptions);
    }

    /*'click #btnaddmorequestions': function() {
     // empty the element where you want to insert your template.
    $('#myDomElement').empty();

   //insert the template
   //UI.render(Template.Mytemplate, $("#myDomElement")[0]);
  // Blaze.renderWithData("temp2", "data", $('table#myTable'), "temp1")
  // Blaze.renderWithData("question", "", $('div#dynamicquestion'), "")
 }
*/


});

Template.pollquestion.created = function() {
    Session.setPersistent('pollSubmitErrors', {});
}

Template.pollquestion.helpers({
    pollOptions: function() {
        return Session.get('pollOptions');
    },
    errorMessage: function(field) {
        return Session.get('pollSubmitErrors')[field];
    },
    errorClass: function(field) {
        return !!Session.get('pollSubmitErrors')[field] ? 'has-error' : '';
    }
});