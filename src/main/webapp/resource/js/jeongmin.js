$(function(){
	var gaugeOptions = {
		    chart: {
		    	type: 'solidgauge',
		        plotBackgroundColor: null,
		        plotBackgroundImage: null,
		        plotBorderWidth: 0,
		        plotShadow: false,
		        margin: [0,0,0,0]
		    },

		    title: null,

		    pane: {
		        center: ['50%', '85%'],
		        size: '100%',
		        startAngle: -90,
		        endAngle: 90,
		        background: {
		            backgroundColor: "rgba(0,0,0,0)",
		            innerRadius: '0%',
		            outerRadius: '0%',
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
		            [1, "rgba(0,0,0,0)"],
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
		var chartSpeed = Highcharts.chart('speed', Highcharts.merge(gaugeOptions, {
		    yAxis: {
		        min: 'null',
		        max: 'null',
		        title: {
		            text: 'camera up/down'
		        }
		    },

		    credits: {
		        enabled: false
		    },

		    series: [{
		        name: 'Speed',
		        data: [80],
		        dataLabels: {
		            format:
		                '<div style="text-align:center">' +
		                '<span style="font-size:100px">{y}</span><br/>' +
		                '<span style="font-size:12px;opacity:0.4">km/h</span>' +
		                '</div>'
		        },
		        tooltip: {
		            valueSuffix: ' km/h'
		        }
		    }]

		}));
		
		chartSpeed.reflow();
		
		// The RPM gauge
		var chartDistance = Highcharts.chart('distance', Highcharts.merge(gaugeOptions, {
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
		
		chartDistance.reflow();

		// Bring life to the dials
		setInterval(function () {
		    // Speed
		    var point,
		        newVal,
		        inc;

		    if (chartSpeed) {
		        point = chartSpeed.series[0].points[0];
		        inc = Math.round((Math.random() - 0.5) * 100);
		        newVal = point.y + inc;

		        if (newVal < 0 || newVal > 200) {
		            newVal = point.y - inc;
		        }

		        point.update(newVal);
		    }

		    // RPM
		    if (chartRpm) {
		        point = chartRpm.series[0].points[0];
		        inc = Math.random() - 0.5;
		        newVal = point.y + inc;

		        if (newVal < 0 || newVal > 5) {
		            newVal = point.y - inc;
		        }

		        point.update(newVal);
		    }
		}, 2000);
});