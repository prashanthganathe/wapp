Template.slider.onRendered(function() {
    $("#carousel").flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: true,
        slideshow: true,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: "#slider"
    });

    $("#slider").flexslider({
        animation: "slide",
        controlNav: true,
        animationLoop: true,
        slideshow: true,
        sync: "#carousel"
    });

});



Template.slider.helpers({
    sliders: function() {

        return [
            '../website/img/slides/slide-corporate-8.jpg',
            '../website/img/slides/slide-corporate-3.jpg'
           
           


        ];
    }
});
