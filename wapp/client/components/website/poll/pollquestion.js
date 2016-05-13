

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
            options: options
        };

        //var errors = validatePoll(poll);
        //if (errors.title || errors.options) {
       //     return Session.set('pollSubmitErrors', errors);
       // }
       var user = Meteor.user();
       var pollid=Session.get('newpoll')._id;
        Meteor.call('addquestionaire', questionaire,pollid,user, function(error, result) {
           // if (error) 
            //    return throwError(error.reason);

           // if (result.pollExists) throwError("This link has already been submitted");

           // FlowRouter.go('pollPage', { _id: result._id });
           //dynamically add new pollquestion template 
           //hide current button

        /*  var view= Blaze.renderWithData(Template.pollquestion, "", $('div#dynamicquestion'));
          view.onViewReady(function(){
            console.log('viewready');

          })*/
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