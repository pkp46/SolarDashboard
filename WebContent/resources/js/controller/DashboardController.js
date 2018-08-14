module.controller("DashboardController", function($scope, $routeParams, $http,$rootScope,DashboardService) {

	$scope.title = "Power Dashboard";

	var gaugeChart = null;
	
	//http://localhost:8080/SolarDashboard/data/pData.xml
	$scope.siteURL = 'http://192.168.111.11/api/DashData.xml?T=0&D=255&M=1';//http://192.168.111.11/api/DashData.xml?T=0&D=255&M=0
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

		$('a[href^="http://www.amcharts.com"]')[0].style.display = 'none';

	}

	$scope.init();

	function getDashXMLData() {
		
		var headers = {
				'Access-Control-Allow-Origin' : '*',
			};
		
		
		DashboardService.getDashdataResponse().then(function(data) {
			console.log(data);
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

});