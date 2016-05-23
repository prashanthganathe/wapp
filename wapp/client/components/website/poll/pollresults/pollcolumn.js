/*
 * Function to draw the column chart
 */
function builtColumn(title, subtitle, xAxis, yAxis, series) {

    $('#container-column').highcharts({

        chart: {
            type: 'column'
        },

        title: {
            text: 'Feedback'
        },

        subtitle: {
            text: 'Source: Till Now'
        },

        credits: {
            enabled: false
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Vote Result (mm)'
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },

        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },

        xAxis: xAxis,
        /*{
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ]
        },*/



        series: series
       /* [{
            name: 'Tokyo',
            data: [49.9]

        }, {
            name: 'New York',
            data: [83.6]

        }, {
            name: 'London',
            data: [48.9]

        }]*/
        /* {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }]*/
    });
}

/*
 * Call the function to built the chart when the template is rendered
 */
//Template.pollcolumn.rendered = function() {
Template.pollcolumn.onCreated(function() {
    // counter starts at 0
    var self = this;
    this.autorun(function() {
        var question = Questionaires.findOne({ '_id': 'ZrLEddr8kpgbvJeeS' });
        var xAxis = {};
        xAxis.categories = [];
        if (question != undefined) {



             var series = [];
            $.each(question.options, function(index, item) {
                xAxis.categories.push(item.option);
                 var seriesobj = {
                    name: index,
                    data: [10]
                };

                series.push(seriesobj);
            });
            /* _.map(question.options, function(item, index) {
               
             });*/



             var yAxis={};
           

            $.each(question.votes, function(index,item ) {
                // xAxis.categories.push(option);
               
               /* console.log(item);
                seriesobj.name = item;
                seriesobj.data.push(item[]);*/
                series[index].data=2;

                

            });
            console.log('series');
            console.log(series);
            builtColumn("Poll Report", "Till now", xAxis,yAxis, series);
        }

    });
});
