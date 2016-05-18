/*function built3d() {

    $('#container-3d').highcharts({
        
      chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: 'Browser market shares at a specific website, 2014'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['Firefox',   45.0],
                ['IE',       26.8],
                {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Safari',    8.5],
                ['Opera',     6.2],
                ['Others',   0.7]
            ]
        }]
    });
}
*/
Template.pollresult.rendered = function() {    
   // built3d();
}


Template.pollresult.helpers({ 
  getquestions: function(e) {
    console.log('questionresultbar: pollid'+FlowRouter.getParam('pid'));
    //return Questionaires.find({'pollid': FlowRouter.getParam('pid')}).fetch();
     return Questionaires.find({}).fetch();
  }
});




