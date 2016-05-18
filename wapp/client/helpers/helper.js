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