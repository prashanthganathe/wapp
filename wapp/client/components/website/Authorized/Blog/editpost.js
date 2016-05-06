Template.editpost.helpers({
    loadpost: function() {
        var id = FlowRouter.getParam('postId');
        return Blogs.findOne({ '_id': id });
    },
      getStuff: function(){
        return "Amsterdam,Washington,Sydney,Beijing,Cairo";
    },
    content: function(){
         var id = FlowRouter.getParam('postId');
        var blog= Blogs.findOne({ '_id': id }).fetch();
        return blog.postcontent;

       // return "Amsterdam, Washington, Sydney, Beijing, Cairo";
    }
});


Template.editpost.onRendered(function() {

   

    $('#summernote').summernote({
        height: 300, // set editor height
        minHeight: null, // set minimum height of editor
        maxHeight: null, // set maximum height of editor
        focus: true // set focus to editable area after initializing summernote
       // placeholder: editableblog.postcontent
    });

     //$('.tags').tagsinput({ });

/* var id = FlowRouter.getParam('postId');
    var editableblog = Blogs.findOne({ '_id': id });
    if (editableblog == undefined)
        return;*/

/*    $('.tags').tagsinput({
        typeahead: {
            source: ["cloud", "mobile"]
        }
    });*/
 //   var myTags = ["one", "two", "three"];
 //   $('.tags').tagsinput('add', myTags);

/* Tracker.autorun(function () {  
     var myTags =['one','two']; //Posts.findOne({_id: this._id}).tags; 

      $('.tags').tagsinput('add', myTags); 
      $('input').tagsinput({});
   }); */


});


Template.editpost.events({
    "submit form": function(e, b) {
        e.preventDefault();

        var blogpost = {};
        blogpost.titleimages = [];
        blogpost.posttitle = $('#title').val();
        blogpost.categories = $('#tags-input').val().split(',');
        blogpost.postcontent = $('#summernote').summernote('code');
        blogpost.snippet = $('#snippet').val();


        if ($(this).id == "btndraft") {
            blogpost.isdraft = true;
        }
        blogpost.day = moment().date();
        blogpost.month = moment().month();
        blogpost.postmetauser = 'currentuserinfo';
        blogpost.author = 'currentusername';
        blogpost._id = '';
        // blogpost.createdat=new Date();

        var captchaData = grecaptcha.getResponse();
        Meteor.call('updateblogpost', blogpost, captchaData, function(error, result) {
            // reset the captcha
            grecaptcha.reset();
            if (error) {
                console.log('There was an error: ' + error.reason);
            } else {
                console.log('Success!');
                FlowRouter.go("/blog");
            }
        });


    }
});
