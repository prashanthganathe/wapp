var counter = new ReactiveVar(0);



Meteor.setInterval(function() {
    counter.set($('#message').val());
}, 1000);

Template.addresource.helpers({
    someReactiveData: function() {
        Tracker.afterFlush(function() {
            $('.testqrcode').each(function(i, e) {
                $(e)
                    .empty()
                    .qrcode({
                        text: $(e).attr('data-qrcode'),
                        colorDark: "#00ff00",
                        colorLight: "#ff008f"
                        //correctLevel: QRCode.CorrectLevel.H
                            // width: 128,
                            // height: 128,

                    });
            });
        });
        return counter.get(); //Meteor.absoluteUrl() + counter.get();
    }
});
