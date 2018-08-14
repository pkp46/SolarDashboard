module.service('DashboardService', function($http,$q) {
	
	/*
	 *Service Method that will fetch Dash data  
	 * 
	 */
	this.getDashdataResponse=function(){
		
		return  $http({
			  method: 'POST',
			  url: 'http://192.168.111.11/api/DashData.xml?T=0&D=255&M=1',
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
	
	
	this.getDashData=function(){
		
		return $http.get('getDashData/')
		.then(
				function(response){
					return response.data;
				},
				function(errResponse){
					return $q.reject(errResponse);
				}
		);
	}


});