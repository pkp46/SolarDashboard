package com.solar.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;

import org.springframework.stereotype.Service;

@Service
public class ApiInvokerServiceImpl implements ApiInvokerService{

	private String BaseUrl;
	private String ResponderUrl;
	private String responderParameters;

	/*
	 * 
	 * Constructor sets BaseUrl, ResponderUrl and ResponderParameters properties
	 */

	public ApiInvokerServiceImpl() {
		// http://192.168.111.11/api/DashData.xml?T=0&D=255&M=1
		this.BaseUrl = "http://192.168.111.11/";
		this.ResponderUrl = "api/DashData.xml?T=0&D=255&M=1";
		this.responderParameters = "T=0&D=255&M=1";
	}

	public String Login() throws MalformedURLException, IOException {

		/*
		 * 
		 * Open an HTTP Connection to the Logon.ashx page
		 */

		HttpURLConnection httpcon = (HttpURLConnection) ((new URL(BaseUrl+ "Logon.ashx").openConnection()));
		httpcon.setDoOutput(true);
		httpcon.setRequestProperty("Content-Type", "application/json");
		httpcon.setRequestProperty("Accept", "application/json");
		httpcon.setRequestMethod("GET");
		httpcon.connect();

		/*
		 * 
		 * Output user credentials over HTTP Output Stream
		 */

		byte[] outputBytes = "{'username': 'sysadmin', 'password':'apple'}".getBytes("UTF-8");
		OutputStream os = httpcon.getOutputStream();
		os.write(outputBytes);
		os.close();

		/*
		 * 
		 * Call Function setCookie and pass the HttpUrlConnection. Set Function
		 * 
		 * will return a Cookie String used to authenticate user.
		 */

		return setCookie(httpcon);

	}

	public String setCookie(HttpURLConnection httpcon) {

		/*
		 * 
		 * Process the HTTP Response Cookies from successful credentials
		 */

		String headerName;

		ArrayList<String> cookies = new ArrayList<String>();

		for (int i = 1; (headerName = httpcon.getHeaderFieldKey(i)) != null; i++) {
			if (headerName.equals("Set-Cookie") && httpcon.getHeaderField(i) != "null") {
				cookies.add(httpcon.getHeaderField(i));
			}
		}

		httpcon.disconnect();

		/*
		 * 
		 * Filter cookies, create Session_ID Cookie
		 */

		String cookieName = cookies.get(0);
		String cookie2 = cookies.get(1);
		String cookie1 = cookieName.substring(cookieName.indexOf("="),cookieName.indexOf(";") + 2);
		cookie2 = cookie2.substring(0, cookie2.indexOf(";"));
		cookieName = cookieName.substring(0, cookieName.indexOf("="));
		String cookie = cookieName + cookie1 + cookie2;
		return cookie;

	}

	@Override
	public String ApiResponder() throws MalformedURLException, IOException {

		/*
		 * 
		 * Create a new HTTP Connection request to responder, pass along
		 * Session_ID Cookie
		 */

		/*HttpURLConnection httpcon = (HttpURLConnection) ((new URL(this.BaseUrl+ this.ResponderUrl).openConnection()));
		httpcon.setDoOutput(true);
		httpcon.setRequestProperty("Content-Type","application/x-www-form-urlencoded");
		httpcon.setRequestProperty("Accept", "application/json");
		// httpcon.setRequestProperty("Cookie", cookie);
		httpcon.setRequestMethod("POST");
		httpcon.connect();

		byte[] outputBytes = responderParameters.getBytes("UTF-8");
		OutputStream os = httpcon.getOutputStream();
		os.write(outputBytes);
		os.close();*/

		/*
		 * 
		 * Read/Output response from server
		 */

		//BufferedReader inreader = new BufferedReader(new InputStreamReader(httpcon.getInputStream()));

		String decodedString ="Nilesh";

		//while ((decodedString = inreader.readLine()) != null) {
			System.out.println(decodedString);
			//decodedString +=decodedString;
		//}

		//inreader.close();
		//httpcon.disconnect();
		
		System.out.println(decodedString);
		
		return decodedString;

	}

	public static void main(String[] args) throws Exception {

		ApiInvokerServiceImpl api = new ApiInvokerServiceImpl();

		// System.out.println(api.Login());

		// api.ApiResponder(api.Login());
		api.ApiResponder();

	}

}
