function Facebook(accessToken) {
    var graph = Meteor.npmRequire('fbgraph');
    graph.setAccessToken(access_token);

    graph.post(userId + "/feed?access_token=007", wallPost, function(err, res) {
        // returns the post id
        console.log(res); // { id: xxxxx}
    });
}

