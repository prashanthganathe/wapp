Template.blogpost.helpers({
    getArticle: function() {
    	var id=FlowRouter.getParam('postId');      
        
        return Blogs.findOne({ '_id': id });
       
    }



});
