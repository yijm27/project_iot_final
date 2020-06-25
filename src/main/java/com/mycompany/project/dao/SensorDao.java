package com.mycompany.project.dao;

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
	
	public int camerainsert(String cameraByte) {
		LOGGER.info("실행");
		int rows = insert("sensor.camera_insert", cameraByte);
		return rows;
	}
}
