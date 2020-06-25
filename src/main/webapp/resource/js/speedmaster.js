//var speed_master_chart;
//function request_speed_Data() {
//	var rpm=0;
//    $.ajax({
//        url: 'speed_master.do',
//        success: function(point) {
//        	//console.log("포토",photoValue)
//        	point[0] = speed;
//        	if(speed < 20){
//        		rpm = 1
//        	}else if(speed < 40){
//        		rpm = 2
//        	}else if(speed < 60){
//        		rpm = 3
//        	}else if(speed < 80){
//        		rpm = 4
//        	}else if(speed < 100){
//        		rpm = 5
//        	}
//        	else{
//        		rpm = 6
//        	}
//        	speed_master_chart.series[0].points[0].update(speed)
//        	speed_master_chart.series[1].points[0].update(rpm);
//            setTimeout(request_speed_Data, 1000);    
//        },
//        cache: false
//    });
//}
//****************************************************///
$(function(){
	var gaugeOptions = {
		    chart: {
		        type: 'solidgauge'
		    },

		    title: null,

		    pane: {
		        center: ['50%', '85%'],
		        size: '140%',
		        startAngle: -90,
		        endAngle: 90,
		        background: {
		            backgroundColor:
		                Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
		            innerRadius: '60%',
		            outerRadius: '100%',
		            shape: 'arc'
		        }
		    },

		    exporting: {
		        enabled: false
		    },

		    tooltip: {
		        enabled: false
		    },

		    // the value axis
		    yAxis: {
		        stops: [
		            [0.1, '#55BF3B'], // green
		            [0.5, '#DDDF0D'], // yellow
		            [0.9, '#DF5353'] // red
		        ],
		        lineWidth: 0,
		        tickWidth: 0,
		        minorTickInterval: null,
		        tickAmount: 2,
		        title: {
		            y: -70
		        },
		        labels: {
		            y: 16
		        }
		    },

		    plotOptions: {
		        solidgauge: {
		            dataLabels: {
		                y: 5,
		                borderWidth: 0,
		                useHTML: true
		            }
		        }
		    }
		};

		// The speed gauge
		var chartSpeed = Highcharts.chart('container-speed', Highcharts.merge(gaugeOptions, {
		    yAxis: {
		        min: 0,
		        max: 200,
		        title: {
		            text: 'Speed'
		        }
		    },

		    credits: {
		        enabled: false
		    },

		    series: [{
		        name: 'Speed',
		        data: [],
		        dataLabels: {
		            format:
		                '<div style="text-align:center">' +
		                '<span style="font-size:25px">{y}</span><br/>' +
		                '<span style="font-size:12px;opacity:0.4">km/h</span>' +
		                '</div>'
		        },
		        tooltip: {
		            valueSuffix: ' km/h'
		        }
		    }]

		}));

		// The RPM gauge
		var chartRpm = Highcharts.chart('container-rpm', Highcharts.merge(gaugeOptions, {
		    yAxis: {
		        min: 0,
		        max: 5,
		        title: {
		            text: 'RPM'
		        }
		    },

		    series: [{
		        name: 'RPM',
		        data: [1],
		        dataLabels: {
		            format:
		                '<div style="text-align:center">' +
		                '<span style="font-size:25px">{y:.1f}</span><br/>' +
		                '<span style="font-size:12px;opacity:0.4">' +
		                '* 1000 / min' +
		                '</span>' +
		                '</div>'
		        },
		        tooltip: {
		            valueSuffix: ' revolutions/min'
		        }
		    }]

		}));
		
		setInterval(function () {
		    // Speed
		    var point,
		        newVal,
		        inc;

		    if (chartSpeed) {
		        point = chartSpeed.series[0].points[0];
		        newVal = speed

		        if (newVal < 0 || newVal > 200) {
		            newVal = 0
		        }
		        point.update(newVal);
		    }

		    // RPM
/* 				    if (chartRpm) {
		        point = chartRpm.series[0].points[0];
		        inc = Math.random() - 0.5;
		        newVal = point.y + inc;

		        if (newVal < 0 || newVal > 5) {
		            newVal = point.y - inc;
		        }

		        point.update(newVal);
		    } */
		}, 2000);
});


// Bring life to the dials
