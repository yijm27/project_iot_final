$(function() {
	var gaugeOptions = {
		    chart: {
		        type: 'solidgauge',
		        backgroundColor: '#292b2c'
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
		        min: 'null',
		        max: 'null',
		        title: {
		            text: 'Temperture'
		        }
		    },

		    credits: {
		        enabled: false
		    },

		    series: [{
		        name: 'Temperture',
		        data: [25],
		        dataLabels: {
		            format:
		                '<div style="text-align:center">' +
		                '<span style="font-size:60px;color:white">{y}</span><br/>' +
		                '<span style="font-size:12px;opacity:0.4;color:white">온도</span>' +
		                '</div>'
		        },
		        tooltip: {
		            valueSuffix: ' ℃'
		        }
		    }]

		}));

		// The RPM gauge
		var chartRpm = Highcharts.chart('container-rpm', Highcharts.merge(gaugeOptions, {
		    yAxis: {
		        min: 'null',
		        max: 'null',
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

		// Bring life to the dials
		setInterval(function () {
		    // Speed
		    var point,
		        newVal,
		        inc;

		    if (chartSpeed) {
		        point = chartSpeed.series[0].points[0];
		        
		        point.update(temperatureValue);
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