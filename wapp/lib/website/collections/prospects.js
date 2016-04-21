Prospects  = new Mongo.Collection("prospect");
Prospects.attachSchema(Prospect);


if (Meteor.isServer) {
    Prospects.allow({
        insert: function(userId, doc) {
            return true;
        },

        update: function(userId, doc, fieldNames, modifier) {
            return true;
        },

        remove: function(userId, doc) {
            return true;
        }
    });

    Prospects.deny({
        insert: function(userId, doc) {
            return false;
        },

        update: function(userId, doc, fieldNames, modifier) {
            return false;
        },

        remove: function(userId, doc) {
            return false;
        }
    });
}