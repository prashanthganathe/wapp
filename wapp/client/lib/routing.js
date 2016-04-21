Meteor.navigateTo = function(path) {
    FlowRouter.go(path)
}

 FlowRouter.route('/', {
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: 'landing'
            });
        }
    });

  FlowRouter.route('/aboutus', {
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: 'aboutus'
            });
        }
    });

    FlowRouter.route('/contactus', {
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: 'contactus'
            });
        }
    });

    FlowRouter.route('/whoweare', {
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: 'whoweare'
            });
        }
    });

    FlowRouter.route('/cloudmigration_package', {
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: 'cloudmigration_package'
            });
        }
    });

    FlowRouter.route('/blog', {
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: 'blog'
            });
        }
    });
  


    FlowRouter.route('/casestudy', {
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: 'casestudy'
            });
        }
    });

