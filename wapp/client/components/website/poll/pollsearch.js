Template.pollsearch.helpers({
    getpolllist: function() {
        return Polls.find({'ispublic':true});      
    } ,

    getqrcode: function(id) { 
     Tracker.afterFlush(function() {     
            $('.testqrcode').each(function(i, e) {
                $(e)
                    .empty()
                    .qrcode({
                        text: $(e).attr('data-qrcode'),
                         width: 128,
                        height: 128,
                        colorDark: "#00ff00",
                        colorLight: "#ff008f"                     
                       
                    });
            });
       });
        return Meteor.absoluteUrl()+"poll/" +id; //Meteor.absoluteUrl() + counter.get();
    }  
});
