package com.mycompany.project.controller;

import java.io.PrintWriter;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;
import java.util.TimeZone;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mycompany.project.model.Sensor;
import com.mycompany.project.service.SensorService;



@Controller
@RequestMapping("/home") // 컨트롤러에 기본 경로 지정
public class HomeController {
	private static final Logger LOGGER = LoggerFactory.getLogger(HomeController.class);
	
	@Autowired
	private SensorService sensorService;
	
	@RequestMapping("/main.do")
	public String main()  {
		LOGGER.info("실행");
		
		return "home/main";
	}
	
	@RequestMapping("/exam19_mqtt.do")
	public String exam19_mqtt() {
		LOGGER.info("실행");
		
		
		return "home/exam19_mqtt";
	}
	@RequestMapping("/ultraSonic.do")
	public void ultraSonic(String value, HttpServletResponse response) throws Exception {
		LOGGER.info(value);
		Sensor sensor = new Sensor();
		sensor.setSdistance(value);
		sensorService.write(sensor);
		
		response.setContentType("application/json; charset=UTF-8");
		JSONObject jsonObj = new JSONObject();
		jsonObj.put("result", value);
		String json = jsonObj.toString();
		PrintWriter pw = response.getWriter();
		pw.write(json);
		pw.flush();
		pw.close();
			
	
	}
	
	@RequestMapping("/cameraCapture.do")
	public void cameraCapture(String value, HttpServletResponse response) throws Exception {
		
		sensorService.cameraWrite(value);
		
		response.setContentType("application/json; charset=UTF-8");
		JSONObject jsonObj = new JSONObject();
		jsonObj.put("result", "실행");
		String json = jsonObj.toString();
		PrintWriter pw = response.getWriter();
		pw.write(json);
		pw.flush();
		pw.close();
			
	
	}
	
	@RequestMapping("/exam04Data.do")
	public String exam04Data(Model model) {
		
		Calendar now = Calendar.getInstance();
		//high chart에서 원하는 날짜 타입 UTC
		Calendar cal = Calendar.getInstance(TimeZone.getTimeZone("UTC"));
		cal.set(
			now.get(Calendar.YEAR), 
			now.get(Calendar.MONTH+1), 
			now.get(Calendar.DATE), 
			now.get(Calendar.HOUR_OF_DAY), 
			now.get(Calendar.MINUTE), 
			now.get(Calendar.SECOND)
		);
		long x = cal.getTimeInMillis();
		long y = 0;
		model.addAttribute("x", x);
		model.addAttribute("y", y);
		
		return "home/exam04Data"; 
	}
	
	@RequestMapping("/speed_master.do")
	public String speed_master(Model model) {
		
		LOGGER.info("스피드 통신?");
		long x = 0;
		model.addAttribute("x", x);
		
		
		return "home/speed_master"; 
	}
	
	

}
