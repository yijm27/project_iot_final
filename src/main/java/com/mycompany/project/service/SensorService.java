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
<<<<<<< HEAD
		LOGGER.info("실행");
		System.out.print(cameraByte);
		sensorDao.insert(cameraByte);
=======
		byte[] imagebyte;
		if(cameraByte.equals("")) {
			cameraByte = "현재 송출중이 아닙니다.";
		}
		
		imagebyte= cameraByte.getBytes();
		sensorDao.camerainsert(imagebyte);
>>>>>>> branch 'master' of https://github.com/yijm27/project_iot_final.git
	}

	
}
