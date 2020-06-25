package com.mycompany.project.dao;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.mycompany.project.model.Sensor;

import egovframework.rte.psl.dataaccess.EgovAbstractMapper;

@Repository
public class SensorDao extends EgovAbstractMapper{
	private static final Logger LOGGER = LoggerFactory.getLogger(SensorDao.class);
	
	public int insert(Sensor sensor) {
		LOGGER.info("실행");
		int rows = insert("sensor.insert", sensor);
		return rows;
	}
	
	public int camerainsert(byte[] cameraByte) {
		LOGGER.info("실행");
<<<<<<< HEAD
		int rows = insert("sensor.camerainsert", cameraByte);
=======
		Map<String, Object> map = new HashMap<>();
		map.put("img", cameraByte);
		int rows = insert("sensor.camerainsert", map);
>>>>>>> branch 'master' of https://github.com/yijm27/project_iot_final.git
		return rows;
	}
}
