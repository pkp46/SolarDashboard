module.controller("DashboardController", function($scope, $routeParams, $http,$rootScope,DashboardService) {

	$scope.title = "Power Dashboard";

	var gaugeChart = null;
	var gaugeChart2 = null;
	var gaugeChart3 = null;
	var gaugeChart4 = null;
	var gaugeChart5 = null;
	
	var siteURL1 = 'http://192.168.111.11/api/DashData.xml?T=0&D=2';
	var siteURL2 = 'http://192.168.111.12/api/DashData.xml?T=0&D=2';
	var siteURL3 = 'http://192.168.111.13/api/DashData.xml?T=0&D=2';
	var siteURL4 = 'http://192.168.113.13/api/DashData.xml?T=0&D=2';
	var siteURL5 = 'http://192.168.110.22/api/DashData.xml?T=0&D=255';
	
	//http://localhost:8080/SolarDashboard/data/pData.xml
	$scope.siteURL = 'http://192.168.111.11/api/DashData.xml?T=0&D=2';//http://192.168.111.11/api/DashData.xml?T=0&D=255&M=0
	$scope.callInterval = 2000;

	$scope.init = function() {

		gaugeChart = AmCharts.makeChart("chartdiv", {
			"type" : "gauge",
			"theme" : "light",
			"axes" : [ {
				"axisThickness" : 1,
				"axisAlpha" : 0.2,
				"tickAlpha" : 0.2,
				"valueInterval" : 50,
				"bands" : [ {
					"color" : "#cc4748",
					"endValue" : 150,
					"startValue" : 0
				}, {
					"color" : "#fdd400",
					"endValue" : 350,
					"startValue" : 150
				}, {
					"color" : "#84b761",
					"endValue" : 500,
					"innerRadius" : "95%",
					"startValue" : 350
				} ],
				"bottomText" : "0 KW",
				"bottomTextYOffset" : -20,
				"endValue" : 500
			} ],
			"arrows" : [ {} ],
			"export" : {
				"enabled" : false
			}
		});

		setInterval(getDashXMLData, $scope.callInterval);
		
		
		gaugeChart2 = AmCharts.makeChart("chartdiv2", {
			"type" : "gauge",
			"theme" : "light",
			"axes" : [ {
				"axisThickness" : 1,
				"axisAlpha" : 0.2,
				"tickAlpha" : 0.2,
				"valueInterval" : 50,
				"bands" : [ {
					"color" : "#cc4748",
					"endValue" : 150,
					"startValue" : 0
				}, {
					"color" : "#fdd400",
					"endValue" : 350,
					"startValue" : 150
				}, {
					"color" : "#84b761",
					"endValue" : 500,
					"innerRadius" : "95%",
					"startValue" : 350
				} ],
				"bottomText" : "0 KW",
				"bottomTextYOffset" : -20,
				"endValue" : 500
			} ],
			"arrows" : [ {} ],
			"export" : {
				"enabled" : false
			}
		});
		
		gaugeChart3 = AmCharts.makeChart("chartdiv3", {
			"type" : "gauge",
			"theme" : "light",
			"axes" : [ {
				"axisThickness" : 1,
				"axisAlpha" : 0.2,
				"tickAlpha" : 0.2,
				"valueInterval" : 50,
				"bands" : [ {
					"color" : "#cc4748",
					"endValue" : 150,
					"startValue" : 0
				}, {
					"color" : "#fdd400",
					"endValue" : 350,
					"startValue" : 150
				}, {
					"color" : "#84b761",
					"endValue" : 500,
					"innerRadius" : "95%",
					"startValue" : 350
				} ],
				"bottomText" : "0 KW",
				"bottomTextYOffset" : -20,
				"endValue" : 500
			} ],
			"arrows" : [ {} ],
			"export" : {
				"enabled" : false
			}
		});
		
		gaugeChart4 = AmCharts.makeChart("chartdiv4", {
			"type" : "gauge",
			"theme" : "light",
			"axes" : [ {
				"axisThickness" : 1,
				"axisAlpha" : 0.2,
				"tickAlpha" : 0.2,
				"valueInterval" : 50,
				"bands" : [ {
					"color" : "#cc4748",
					"endValue" : 150,
					"startValue" : 0
				}, {
					"color" : "#fdd400",
					"endValue" : 350,
					"startValue" : 150
				}, {
					"color" : "#84b761",
					"endValue" : 500,
					"innerRadius" : "95%",
					"startValue" : 350
				} ],
				"bottomText" : "0 KW",
				"bottomTextYOffset" : -20,
				"endValue" : 500
			} ],
			"arrows" : [ {} ],
			"export" : {
				"enabled" : false
			}
		});
		
		gaugeChart5 = AmCharts.makeChart("chartdiv5", {
			"type" : "gauge",
			"theme" : "light",
			"axes" : [ {
				"axisThickness" : 1,
				"axisAlpha" : 0.2,
				"tickAlpha" : 0.2,
				"valueInterval" : 50,
				"bands" : [ {
					"color" : "#cc4748",
					"endValue" : 150,
					"startValue" : 0
				}, {
					"color" : "#fdd400",
					"endValue" : 350,
					"startValue" : 150
				}, {
					"color" : "#84b761",
					"endValue" : 500,
					"innerRadius" : "95%",
					"startValue" : 350
				} ],
				"bottomText" : "0 KW",
				"bottomTextYOffset" : -20,
				"endValue" : 500
			} ],
			"arrows" : [ {} ],
			"export" : {
				"enabled" : false
			}
		});
		
		setInterval(getDashXMLData2, $scope.callInterval);
		setInterval(getDashXMLData3, $scope.callInterval);
		setInterval(getDashXMLData4, $scope.callInterval);
		setInterval(getDashXMLData5, $scope.callInterval);

		//$('a[href^="http://www.amcharts.com"]')[0].style.display = 'none';

	}

	$scope.init();

	function getDashXMLData() {
		
		DashboardService.getDashdataResponse(siteURL1).then(function(data) {
			console.log(data);
			var DData = data.DashData.Now / 1000;
			if (gaugeChart) {
				if (gaugeChart.arrows) {
					if (gaugeChart.arrows[0]) {
						if (gaugeChart.arrows[0].setValue) {
							gaugeChart.arrows[0].setValue(DData);
							gaugeChart.axes[0].setBottomText(DData + " KW");
						}
					}
				}
			}

		},
		function(errResponse) {
			console.error('Error while fetching Currencies');
		});
		
		
		/*$http({
			//method: 'JSONP',
			url : $scope.siteURL,
			headers: {
				'Access-Control-Allow-Origin' : '*'
			},
			method : 'GET',
			transformResponse : function(data) {
				console.log(data);
				var x2js = new X2JS();
				var aftCnv = x2js.xml_str2json(data);
				return aftCnv;
				//return $.parseXML(data);
			}
		}).then(function successCallback(response) {
			console.log(response.data.DashData.Now);
			console.log(response);
			var DData = response.data.DashData.Now / 1000;
			if (gaugeChart) {
				if (gaugeChart.arrows) {
					if (gaugeChart.arrows[0]) {
						if (gaugeChart.arrows[0].setValue) {
							gaugeChart.arrows[0].setValue(DData);
							gaugeChart.axes[0].setBottomText(DData + " KW");
						}
					}
				}
			}

		}, function errorCallback(response) {
			console.log(response);
		});*/
	}
	
	function getDashXMLData2() {
		
		DashboardService.getDashdataResponse(siteURL2).then(function(data) {
			//console.log(data);
			var DData = data.DashData.Now / 1000;
			if (gaugeChart2) {
				if (gaugeChart2.arrows) {
					if (gaugeChart2.arrows[0]) {
						if (gaugeChart2.arrows[0].setValue) {
							gaugeChart2.arrows[0].setValue(DData);
							gaugeChart2.axes[0].setBottomText(DData + " KW");
						}
					}
				}
			}

		},
		function(errResponse) {
			console.error('Error while fetching Currencies');
		});
		
	}
	
	function getDashXMLData3() {
		
		DashboardService.getDashdataResponse(siteURL3).then(function(data) {
			//console.log(data);
			var DData = data.DashData.Now / 1000;
			if (gaugeChart3) {
				if (gaugeChart3.arrows) {
					if (gaugeChart3.arrows[0]) {
						if (gaugeChart3.arrows[0].setValue) {
							gaugeChart3.arrows[0].setValue(DData);
							gaugeChart3.axes[0].setBottomText(DData + " KW");
						}
					}
				}
			}

		},
		function(errResponse) {
			console.error('Error while fetching Currencies');
		});
		
	}
	
	function getDashXMLData5() {
		
		DashboardService.getDashdataResponse(siteURL5).then(function(data) {
			console.log(data);
			var DData = data.DashData.Now / 1000;
			if (gaugeChart5) {
				if (gaugeChart5.arrows) {
					if (gaugeChart5.arrows[0]) {
						if (gaugeChart5.arrows[0].setValue) {
							gaugeChart5.arrows[0].setValue(DData);
							gaugeChart5.axes[0].setBottomText(DData + " KW");
						}
					}
				}
			}

		},
		function(errResponse) {
			console.error('Error while fetching Currencies');
		});
		
	}
	
	function getDashXMLData4() {
		
		DashboardService.getDashdataResponse(siteURL4).then(function(data) {
			//console.log(data);
			var DData = data.DashData.Now / 1000;
			if (gaugeChart4) {
				if (gaugeChart4.arrows) {
					if (gaugeChart4.arrows[0]) {
						if (gaugeChart4.arrows[0].setValue) {
							gaugeChart4.arrows[0].setValue(DData);
							gaugeChart4.axes[0].setBottomText(DData + " KW");
						}
					}
				}
			}

		},
		function(errResponse) {
			console.error('Error while fetching Currencies');
		});
		
	}

});