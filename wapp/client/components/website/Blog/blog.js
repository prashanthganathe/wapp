Template.blog.helpers({
	getarticlelists: function() {      
    	//filter by blogid
       return Blogs.find({});
    },

    gettitleImgUrls: function(blogid) {
      
    	//filter by blogid
    	console.log(blogid);
      return [{'url':'website/img/blog/blog-image-2.jpg'},
		      {'url':'website/img/blog/blog-image-1.jpg'},
		      {'url':'website/img/blog/blog-image-3.jpg'},
		      {'url':'website/img/blog/blog-image-2.jpg'},
		      {'url':'website/img/blog/blog-image-1.jpg'}
      		 ];
    }



});


