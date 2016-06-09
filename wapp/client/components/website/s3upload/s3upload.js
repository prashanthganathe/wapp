Template.s3upload.events({
    'change .file_bag': function(e) {
      
        $('.fileupload-preview').text($('.file_bag').val());
    },

    "click button.upload": function() {
        var files = $("input.file_bag")[0].files;
        S3.upload({
            files: files,
            path: "subfolder"
        }, function(e, r) {
            console.log(r);
        });
    }
});


Template.s3upload.helpers({
    "files": function() {
        return S3.collection.find();
    }
})
