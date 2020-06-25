function laserOff() {
	
	var laserOff = "Off";
					
	message = new Paho.MQTT.Message("value:"+ laserOff);
	message.destinationName = "/sensor/laser";
	message.qos = 0;
	sensorClient.send(message);
}


function laserOn() {
	
	var laserOn = "On";
					
	message = new Paho.MQTT.Message("value:"+ laserOn);
	message.destinationName = "/sensor/laser";
	message.qos = 0;
	sensorClient.send(message);
}


function ledRedOn() {
	
	var ledOn = "red";
					
	message = new Paho.MQTT.Message("value:"+ ledOn);
	message.destinationName = "/sensor/led";
	message.qos = 0;
	sensorClient.send(message);
}


function ledRedOff() {
	
	var ledOff = "redOff";
					
	message = new Paho.MQTT.Message("value:"+ ledOff);
	message.destinationName = "/sensor/led";
	message.qos = 0;
	sensorClient.send(message);
}


function ledGreenOn() {
	
	var ledOn = "green";
					
	message = new Paho.MQTT.Message("value:"+ ledOn);
	message.destinationName = "/sensor/led";
	message.qos = 0;
	sensorClient.send(message);
}


function ledGreenOff() {
	
	var ledOff = "greenOff";
					
	message = new Paho.MQTT.Message("value:"+ ledOff);
	message.destinationName = "/sensor/led";
	message.qos = 0;
	sensorClient.send(message);
}


function ledBlueOn() {
	
	var ledOn = "blue";
					
	message = new Paho.MQTT.Message("value:"+ ledOn);
	message.destinationName = "/sensor/led";
	message.qos = 0;
	sensorClient.send(message);
}


function ledBlueOff() {
	
	var ledOff = "blueOff";
					
	message = new Paho.MQTT.Message("value:"+ ledOff);
	message.destinationName = "/sensor/led";
	message.qos = 0;
	sensorClient.send(message);
}


function ledOff() {
	
	var ledOff = "ledOff";
					
	message = new Paho.MQTT.Message("value:"+ ledOff);
	message.destinationName = "/sensor/led";
	message.qos = 0;
	sensorClient.send(message);
}


function buzzerOn() { 
	
	var buzzerOn = "On";
					
	message = new Paho.MQTT.Message("value:"+ buzzerOn);
	message.destinationName = "/sensor/buzzer";
	message.qos = 0;
	sensorClient.send(message);
}


function buzzerOff() {
	
	var buzzerOff = "Off";
					
	message = new Paho.MQTT.Message("value:"+ buzzerOff);
	message.destinationName = "/sensor/buzzer";
	message.qos = 0;
	sensorClient.send(message);
}
