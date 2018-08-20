module.service('DashboardService', function($http,$q) {
	
	/*
	 *Service Method that will fetch Dash data  
	 * 
	 */
	this.getDashdataResponse=function(siteUrl){
		
		return  $http({
			  method: 'POST',
			  url: siteUrl,
              transformResponse : function(data) {
  				var x2js = new X2JS();
  				var aftCnv = x2js.xml_str2json(data);
  				return aftCnv;
              }
			  }).then(function successCallback(response) {
				return response.data;
			  }, function errorCallback(response) {
				  console.log(response);
			  });
		
	}
	

});