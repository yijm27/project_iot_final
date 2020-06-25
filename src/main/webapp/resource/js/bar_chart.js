$(function () { 
			    temp_Chart = Highcharts.chart({ //즉, Highcharts.chart( arg ) 에 arg를 Json 객체를 받는것이다.
			        chart: {
			        	renderTo: 'temp_container', // 아래 <div>에 보면 id="container" 로 되어있고, render == 그리다. To: 어디에.
			        	//즉, id가 container인 tag에 그리겠다는 뜻.
			            type: 'bar',
			            load: request_temp_Data
			        },
			        title: { 
			            text: 'Temp '
			        },
			        xAxis: { // 현재는 x '축' 과 y '축' 이 바뀌어있다.
			            categories: ["Temp"]
			        },
			        yAxis: {
			            title: {
			                text: 'unit'
			            }
			        },
			        series: [{
			            name: 'Temperture',
			            data: [2],
			            color:'red'
			        }]
			    });
			});
			
			function request_temp_Data() {
				temp_Chart.series[0].data[0].y = 25//temperatureValue               
           }
			
			$(function () { 
			    temp_Chart = Highcharts.chart({ //즉, Highcharts.chart( arg ) 에 arg를 Json 객체를 받는것이다.
			        chart: {
			        	renderTo: 'tracking_container', // 아래 <div>에 보면 id="container" 로 되어있고, render == 그리다. To: 어디에.
			        	//즉, id가 container인 tag에 그리겠다는 뜻.
			            type: 'bar',
			            load: request_tracking_Data
			        },
			        title: { 
			            text: 'Temp '
			        },
			        xAxis: { // 현재는 x '축' 과 y '축' 이 바뀌어있다.
			            categories: ["Temp"]
			        },
			        yAxis: {
			            title: {
			                text: 'unit'
			            }
			        },
			        series: [{
			            name: 'tracking',
			            data: [2]
			        }]
			    });
			});
			
			function request_tracking_Data() {
				tracking_Chart.series[0].data[0].y = 0 //trackingValue               
           }