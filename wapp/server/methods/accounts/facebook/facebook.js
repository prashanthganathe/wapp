// Meteor.methods({
//             'postToFacebok': function(text) {
//                 var graph = Npm.require('fbgraph');
//                 if (Meteor.user().services.facebook.accessToken) {
//                     graph.setAccessToken(Meteor.user().services.facebook.accessToken);
//                     var future = new Future();
//                     var onComplete = future.resolver();
//                     //Async Meteor (help from : https://gist.github.com/possibilities/3443021
//                     graph.post('/me/feed', {
//                             message: text
//                         }, function(err, result) {
//                             return onComplete(err, result);
//                         }
//                         Future.wait(future);
//                     });
                  
//                 }
//             });

        // Meteor.call("postToFacebook", "Im posting to my wall!", function(err,result) {
        //     if(!err) alert("Posted to facebook");
        // });

        //*===========================================================================*//
        function Facebook(accessToken) {
            this.fb = Meteor.npmRequire('fbgraph');
            this.accessToken = accessToken;
            this.fb.setAccessToken(this.accessToken);
            this.options = {
                timeout: 3000,
                pool: {
                    maxSockets: Infinity
                },
                headers: {
                    connection: "keep-alive"
                }
            }
            this.fb.setOptions(this.options);
        }


        Facebook.prototype.query = function(query, method) {
            var self = this;
            var method = (typeof method === 'undefined') ? 'get' : method;
            var data = Meteor.sync(function(done) {
                self.fb[method](query, function(err, res) {
                    done(null, res);
                });
            });
            return data.result;
        }

        Facebook.prototype.getUserData = function() {
            return this.query('me');
        }

        Facebook.prototype.getFriendsData = function() {
            return this.query('/me/friends');
        }

        Facebook.prototype.getFriendsDataLists = function() {
            return this.query('/me/taggable_friends');
        }

        Facebook.prototype.getLikes = function() {
            //  if (Meteor.user().user.hasOwnProperty('services') && Meteor.user().services.hasOwnProperty('facebook')  ) {
            //         var result = Meteor.http.get('https://graph.facebook.com/v2.4/' + user.services.facebook.id + '?access_token=' + user.services.facebook.accessToken + '&fields=first_name, last_name, birthday, email, gender, location, link, friends');

            //         console.log(result.data.first_name);
            //         console.log(result.data.last_name);
            //         console.log(result.data.birthday);
            //         console.log(result.data.email);
            //         console.log(result.data.gender);
            //         console.log(result.data.location);
            //         console.log(result.data.link);
            //         console.log(result.data.friends);
            // }

            return this.query('/me/likes');
        }

        // Facebook.prototype.posttoFacebook = function() {
        //         var future = new Future();
        //           var onComplete = future.resolver();        
        //           this.fb.post('/me/feed',{message:text},function(err,result) {
        //               return onComplete(err, result);
        //           }
        //           Future.wait(future);
        //     }


        Meteor.methods({
            getUserData: function() {
                console.log('inside getUserData');
                var fb = new Facebook(Meteor.user().services.facebook.accessToken);
                console.log('token:' + Meteor.user().services.facebook.accessToken);
                var data = fb.getUserData();
                console.log(data);
                return data;
            },

            getFriendsData: function() {
                var fb = new Facebook(Meteor.user().services.facebook.accessToken);
                var data = fb.getFriendsData();
                console.log(data);
                return data;
            },

            getFriendsDataLists: function() {
                // return Meteor.call('queryFB', '/me/friendlists');
                var fb = new Facebook(Meteor.user().services.facebook.accessToken);
                var data = fb.getFriendsDataLists();
                console.log(data);
                return data;
            },

            getLikes: function() {
                // return Meteor.call('queryFB', '/me/likes');
                var fb = new Facebook(Meteor.user().services.facebook.accessToken);
                var data = fb.getLikes();
                console.log(data);
                return data;
            }


        });
