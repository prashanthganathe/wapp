Template.slider.onRendered(function () {
  /*  if($(".modal").length>0) {
        $(".modal").each(function() {
            $(".modal").prependTo( "body" );
        });
    }*/
  //  alert('from onrendered');
});



Template.slider.helpers({
    sliders: function() {
       /* return _.map(HomepageSliders.find({}, {fields: {url:1, client_name:1}}).fetch(), function(val, index) {
            return {value: val, active: (index == 0 ? "item active" : "item")} 
        });*/
        return [{'a':'a'}]
    }
});