// 실시간에 대한 내용이 나와있는 문서.
/* speed = 0
servo4= 90
temperatureValue = 0;
photoValue = 0;
ultraSonicValue = 0;
gasValue = 0;
trackingValue = 0; */
var temp_chart;
	
$(function() {
	temp_chart = new Highcharts.Chart({
        chart: {
            renderTo: 'temp_container',
            defaultSeriesType: 'spline',
            events: {
                load: request_temp_Data
            }
        },
        credits: {
        	enabled: false
        },
        title: {
            text: 'Live Temperture data'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 100,
            maxZoom: 20 * 1000
        },
        yAxis: {
            minPadding: 0.2,
            maxPadding: 0.2,
            title: {
                text: 'Value',
                margin: 20
            }
        },
        series: [{
            name: 'Random data',
            data: []
        }]
    });
});	
var temp_chart;
function request_temp_Data() {
    $.ajax({
        url: 'exam04Data.do',
        success: function(point) {
        	point[1] = temperatureValue;
            var series = temp_chart.series[0];
            var shift = series.data.length > 20;
            temp_chart.series[0].addPoint(point, true, shift);
            setTimeout(request_temp_Data, 1000);    
        },
        cache: false
    });
}

$(function() {
	temp_chart = new Highcharts.Chart({
        chart: {
            renderTo: 'temp_container',
            defaultSeriesType: 'spline',
            events: {
                load: request_temp_Data
            }
        },
        title: {
            text: 'Temperture data'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 100,
            maxZoom: 20 * 1000
        },
        yAxis: {
            minPadding: 0.2,
            maxPadding: 0.2,
            title: {
                text: 'Value',
                margin: 5
            }
        },
        series: [{
            name: 'Temperture data',
            data: []
        }]
    });
});			

// 조도에 대한 차트
var light_chart;
function request_light_Data() {
    $.ajax({
        url: 'exam04Data.do',
        success: function(point) {
        	//console.log("포토",photoValue)
        	point[1] = photoValue;
            var series = light_chart.series[0];
            var shift = series.data.length > 20;
            light_chart.series[0].addPoint(point, true, shift);
            setTimeout(request_light_Data, 1000);    
        },
        cache: false
    });
}

$(function() {
	light_chart = new Highcharts.Chart({
        chart: {
            renderTo: 'light_container',
            defaultSeriesType: 'spline',
            events: {
                load: request_light_Data
            }
        },
        credits: {
        	enabled: false
        },
        title: {
            text: 'light data'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 100,
            maxZoom: 20 * 1000
        },
        yAxis: {
            minPadding: 0.2,
            maxPadding: 0.2,
            title: {
                text: 'Value',
                margin: 5
            }
        },
        series: [{
            name: 'light data',
            data: []
        }]
    });
});			

// 가스에 대한 차트
var gas_chart;
function request_gas_Data() {
    $.ajax({
        url: 'exam04Data.do',
        success: function(point) {
        	point[1] = gasValue
            var series = gas_chart.series[0];
            var shift = series.data.length > 20;
            gas_chart.series[0].addPoint(point, true, shift);
            setTimeout(request_gas_Data, 1000);    
        },
        cache: false
    });
}

$(function() {
	gas_chart = new Highcharts.Chart({
        chart: {
            renderTo: 'gas_container',
            defaultSeriesType: 'spline',
            events: {
                load: request_gas_Data
            }
        },
        credits: {
        	enabled: false
        },
        title: {
            text: 'gas data'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 100,
            maxZoom: 20 * 1000
        },
        yAxis: {
            minPadding: 0.2,
            maxPadding: 0.2,
            title: {
            	text: 'Value',
                margin: 5
            }
        },
        series: [{
            name: 'gas_data',
            data: []
        }]
    });
});			
			