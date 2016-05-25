Template.newcharthelper.helpers({
    topGenresChart: function(qid) {
        console.log('questionid:  '+ qid);

        var question = Questionaires.findOne({ '_id': qid});

        var xAxis = {};
        xAxis.categories = [];
        if (question != undefined) {

            var series = [];
            var obj = {};
            obj.type = 'column';
            obj.name = 'Response';
            obj.data = [];


            $.each(question.options, function(index, item) {
               // xAxis.categories.push(item.option);   
               xAxis.categories.push(index+1);               
            });

            var yAxis = {};
            $.each(question.votes, function(index, item) {
                var votecount = item[Object.keys(item)[0]];
                obj.data.push([index,votecount]);
            });
            series.push(obj);



            return {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    width: 335,
                    height:300
                },
                title: {
                    text: "Opinions"//this.username + "'s top genres"
                },
                /*tooltip: {
                    pointFormat: '<b>{point.percentage:.1f}%</b>'
                },*/
                 tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                 xAxis: xAxis,

                /*plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            },
                            connectorColor: 'silver'
                        }
                    }
                },*/
                 plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },

                series: series
                    /* [{
                         type: 'column',
                         name: 'genre',
                         data: [
                             ['Adventure',   45.0],
                             ['Action',       26.8],
                             ['Ecchi',   12.8],
                             ['Comedy',    8.5],
                             ['Yuri',     6.2]
                         ]
                     }]*/
            };
        } else
            return;
    }
});
