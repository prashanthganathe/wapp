Template.blogcommentlist.helpers({
	commentcount:function(blogid)
	{
		return BlogComments.find({ 'blogid': blogid }).count();
	},
    ShowCommentList: function(blogid) {

        return BlogComments.find({ 'blogid': blogid });
    }




});
