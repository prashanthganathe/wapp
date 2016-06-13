Template.registerHelper('equals', function (a, b) {
      return a === b;
    });


Template.body.helpers({
  
  polls: function() {
    return Polls.find();
  }
  
});

Template.registerHelper('indexedArray', function(context, options) {
  if (context) {
    return context.map(function(item, index) {
      item._index = index;
      return item;
    });
  }
});


Template.registerHelper('incremented', function(index) {
  index++;
  return index;
  });


UI.registerHelper('shareOnFacebookLink', function() {
  return 'https://www.facebook.com/sharer/sharer.php?&u=' + window.location.href;
});

UI.registerHelper('shareOnTwitterLink', function() {
  return 'https://twitter.com/intent/tweet?url=' + window.location.href + '&text=' + document.title;
});

UI.registerHelper('shareOnGooglePlusLink', function() {
  return 'https://plus.google.com/share?url=' + window.location.href;
});

/*Template.post.onRendered(function() {
  if (Meteor.isCordova) {
    return $('.cordova-share-links').on('click', function(e) {
      e.preventDefault();
      window.open($(this).attr('href'), '_system');
      return false;
    });
  }
});*/