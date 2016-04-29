Template.contactus.helpers({
    getCountryList: function(e) {
        return [{ 'name': 'USA' }, { 'name': 'UK' }, { 'name': 'India' }, { 'name': 'Australia' }, { 'name': 'Other' }];
    }



});

Template.contactus.events({
    "submit form": function(e, b) {
        e.preventDefault();

        var prospect = {};
        prospect.fullname = $('#name').val();
        prospect.email = $('#email').val();
        prospect.phone = $('#phone').val();
        prospect.category = $("#subject option:selected").text();
        prospect.country = $("#country option:selected").text();
        prospect.details = $("#message").val();


        var captchaData = grecaptcha.getResponse();
        Meteor.call('formSubmissionMethod', prospect, captchaData, function(error, result) {
            // reset the captcha
            grecaptcha.reset();

            if (error) {
                console.log('There was an error: ' + error.reason);
            } else {
                console.log('Success!');
                Meteor.call('sendemail', prospect, 'templatename', function(error, result) {
                    console.log('email sent!');
                });
            }
        });
    }

});

Template.contactus.onRendered(function() {

    var map = new google.maps.Map(document.getElementById('googlemaps'), {
        center: {
            lat: 12.9667,
            lng: 77.5667
        },
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });


    var styles = [{
        stylers: [
            { hue: "#0088CC" }, //00ffe6
            { saturation: -20 }
        ]
    }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [
            { lightness: 100 },
            { visibility: "simplified" }
        ]
    }, {
        featureType: "road",
        elementType: "labels",
        stylers: [
            { visibility: "off" }
        ]
    }];

    var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');



    /*
    Map Settings

        Find the Latitude and Longitude of your address:
            - http://universimmedia.pagesperso-orange.fr/geo/loc.htm
            - http://www.findlatitudeandlongitude.com/find-address-from-latitude-and-longitude/

    */

    // Map Markers
   /* var mapMarkers = [{
        address: "217 Summit Boulevard, Birmingham, AL 35243",
        html: "<strong>Alabama Office</strong><br>217 Summit Boulevard, Birmingham, AL 35243<br><br><a href='#' onclick='mapCenterAt({latitude: 33.44792, longitude: -86.72963, zoom: 16}, event)'>[+] zoom here</a>",
        icon: {
            image: "img/pin.png",
            iconsize: [26, 46],
            iconanchor: [12, 46]
        }
    }, {
        address: "645 E. Shaw Avenue, Fresno, CA 93710",
        html: "<strong>California Office</strong><br>645 E. Shaw Avenue, Fresno, CA 93710<br><br><a href='#' onclick='mapCenterAt({latitude: 36.80948, longitude: -119.77598, zoom: 16}, event)'>[+] zoom here</a>",
        icon: {
            image: "img/pin.png",
            iconsize: [26, 46],
            iconanchor: [12, 46]
        }
    }, {
        address: "New York, NY 10017",
        html: "<strong>New York Office</strong><br>New York, NY 10017<br><br><a href='#' onclick='mapCenterAt({latitude: 40.75198, longitude: -73.96978, zoom: 16}, event)'>[+] zoom here</a>",
        icon: {
            image: "img/pin.png",
            iconsize: [26, 46],
            iconanchor: [12, 46]
        }
    }];*/

    // Map Initial Location
    var initLatitude = 37.09024;
    var initLongitude = -95.71289;

    // Map Extended Settings
    var mapSettings = {
        controls: {
            draggable: true, // (($.browser.mobile) ? false : true),
            panControl: true,
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: true,
            streetViewControl: true,
            overviewMapControl: true
        },
        scrollwheel: false,
        markers: mapMarkers,
        latitude: initLatitude,
        longitude: initLongitude,
        zoom: 5
    };

    var map = $("#googlemaps").gMap(mapSettings),
        mapRef = $("#googlemaps").data('gMap.reference');

    // Map Center At
    var mapCenterAt = function(options, e) {
        e.preventDefault();
        $("#googlemaps").gMap("centerAt", options);
    }

    // Create an array of styles.
    /*            var mapColor = "#0088cc";

                var styles = [{
                    stylers: [{
                        hue: mapColor
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{
                        lightness: 0
                    }, {
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "road",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }];

                var styledMap = new google.maps.StyledMapType(styles, {
                    name: "Styled Map"
                });

                mapRef.mapTypes.set('map_style', styledMap);
                mapRef.setMapTypeId('map_style');
    */




});
