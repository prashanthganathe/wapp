Template.questionresultbar.onRendered(function() {
    var self = this;
    var chart = $('#chart-id').highcharts({
        chart: { type: 'column' },
        title: { text: 'Poll Results' },
        subtitle: { text: 'tillnow: ' + new Date() },
        credits: { enabled: false },
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
        xAxis: {
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
        },

        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },

        series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }]



    }).highcharts();
    var qid = $('.questionid').id;
    self.autorun(function() { // this will always run once and then every time 'keyword' changes.
        // var keyword = Session.get('keyword');
        self.subscribe('myquestionresult', qid, function() { // subscribe to our data, passing in keyword
            // the subscription is ready here, so go ahead and get the data into a suitable
            // form for Highcharts - we need to build an array of data points.
            var myData = Questionaires.find({}).fetch().votes.map(function(doc) {
                return doc.someValueIwantToPlot;
            });
            chart.series[0].setData(myData); // tell Highcharts to use this data for the (first) series
        });
    });
});

Template.questionresultbar.helpers({ 
  getquestions: function(e) {
    console.log('questionresultbar: pollid'+FlowRouter.getParam('pid'));
    //return Questionaires.find({'pollid': FlowRouter.getParam('pid')}).fetch();
     return Questionaires.find({}).fetch();
  }
});
