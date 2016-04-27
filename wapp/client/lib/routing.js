/*https://meteorhacks.com/flow-router-and-subscription-management/*/


Meteor.navigateTo = function(path) {
    FlowRouter.go(path)
}

FlowRouter.notFound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function() {

    },
    action: function() {
BlazeLayout.render('mainlayout', {
                content: '404'
            });
    }
};

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


  


    FlowRouter.route('/casestudy', {
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: 'casestudy'
            });
        }
    });

    FlowRouter.route('/404', {
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: '404'
            });
        }
    });

    FlowRouter.route('/maintenance', {
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: 'maintenance'
            });
        }
    });


    FlowRouter.route('/sitemap', {
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: 'sitemap'
            });
        }
    });

FlowRouter.route('/blog', {
  /*  subscriptions: function(params) {
    this.register('blogCategories', Meteor.subscribe('categories'));
    this.register('currentPost', Meteor.subscribe('post', params.pageId));
    this.register('currentComments', Meteor.subscribe('comments', params.pageId));
},*/
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: 'blog'
            });
        }
    });

FlowRouter.route('/faq', {
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: 'faq'
            });
        }
    });

/* FlowRouter.route('/blogcommentform', {
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: 'blogcommentform'
            });
        }
    });

 FlowRouter.route('/blogcommentlist', {
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: 'blogcommentlist'
            });
        }
    });*/

/* FlowRouter.route('/blogpost', {
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: 'blogpost'
            });
        }
    });*/

  FlowRouter.route('/login', {
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: 'login'
            });
        }
    });

  FlowRouter.route('/forgotpassword', {
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: 'forgotpassword'
            });
        }
    });


  FlowRouter.route('/team', {
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: 'team'
            });
        }
    });

  FlowRouter.route('/ourvision', {
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: 'ourvision'
            });
        }
    });

    FlowRouter.route('/createpost', {
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: 'createpost'
            });
        }
    });

    FlowRouter.route('/blogcreated', {
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: 'blogcreated'
            });
        }
    });

    FlowRouter.route('/blogpost/:postId', {
        action: function(params,queryparams) {           
            console.log(params.postId);
            BlazeLayout.render('mainlayout', {
                content: 'blogpost'
            });
        }
    });

    FlowRouter.route('/userlist', {
        action: function() {
            BlazeLayout.render('mainlayout', {
                content: 'userlist'
            });
        }
    });




