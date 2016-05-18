option = new SimpleSchema({

    id: { type: String, optional: true, label: "Post Title", max: 2000 },
    option: { type: String, optional: true, label: "Post Title", max: 2000 }
});

vote = new SimpleSchema({
    voteCount: { type: Number, optional: true, label: "Vote count", max: 2000 },
    answer: { type:Object, optional: true, label: "Votes", max: 2000 }
});



Questionaire = new SimpleSchema({

    title: { type: String, optional: true, label: "Title", max: 2000 },
    options: { type: [option], label: "Images", optional: true },
    type: { type: String, optional: true, label: "Type", defaultValue: "Poll", max: 2000 },
    share: { type: String, label: "Share", defaultValue: "Public", optional: true },
    pollid: { type: String, optional: true, max: 2000 },
    userid: { type: String, optional: true, max: 2000 },
    author: { type: String, optional: true, max: 2000 },
    summited: { type: Date, defaultValue: new Date(), optional: true },
    voters: { type: [String], label: "Voters", optional: true },
    votes: { type: Object, label: "votes", optional: true },
    answer: { type: String, label: "answer", optional: true },
    answerdescription: { type: String, label: "description", optional: true },
    authorizerequired: { type: Boolean, label: "isauthorized", defaultValue: false, optional: true }





});
