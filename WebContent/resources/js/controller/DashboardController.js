module.controller("DashboardController", function($scope, $routeParams, $http,$rootScope) {

	$scope.title = "Power Dashboard";

	var gaugeChart = null;
	
	//http://localhost:8080/SolarDashboard/
	$scope.siteURL = 'data/pData.xml';
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
		$http({
			method : 'GET',
			url : $scope.siteURL,
			transformResponse : function(data) {
				var x2js = new X2JS();
				var aftCnv = x2js.xml_str2json(data);
				return aftCnv;
				//return $.parseXML(data);
			}
		}).then(function successCallback(response) {
			console.log(response.data.DashData.Now);
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
		});
	}

});