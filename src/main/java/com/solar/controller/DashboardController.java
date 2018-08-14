package com.solar.controller;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.solar.service.ApiInvokerService;

@RestController
public class DashboardController {

	@Autowired
	ApiInvokerService apiInvoker;

	/*
	 * This REST provides Dash DM Data
	 */
	@RequestMapping(value = "/getDashData", method = RequestMethod.GET)
	public ResponseEntity<String> getStuckOrdersCount() {
		String responseString = null;
		try {
			responseString = apiInvoker.ApiResponder();
		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		return new ResponseEntity<String>(responseString, HttpStatus.OK);
	}

}
