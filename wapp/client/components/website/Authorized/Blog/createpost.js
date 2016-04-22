Template.createpost.helpers({
    getStuff: function(){
        return "Amsterdam,Washington,Sydney,Beijing,Cairo";
    }
});


Template.createpost.onRendered(function(){


  $('#summernote').summernote();
});

