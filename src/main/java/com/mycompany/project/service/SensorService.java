package com.mycompany.project.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mycompany.project.dao.SensorDao;
import com.mycompany.project.model.Sensor;

@Service
public class SensorService {
	private static final Logger LOGGER = LoggerFactory.getLogger(SensorService.class);
	
	@Autowired
	private SensorDao sensorDao;
	
	public void write(Sensor sensor) {
		LOGGER.info("실행");
		sensorDao.insert(sensor);
	}
	
	public void cameraWrite(String cameraByte) {
		LOGGER.info("실행");
		sensorDao.insert(cameraByte);
	}

	
}
