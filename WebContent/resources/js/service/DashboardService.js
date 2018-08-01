module.service('DashboardService', function($http,$q) {
	
	/*
	 *Service Method that will fetch Stuck Order list   stuckOrderList
	 *Stuck Order counts for Table	 * 
	 */
	this.getStuckOrderCount = function(){
		
		return $http.get('stuckOrderCount/')
		.then(
				function(response){
					return response.data;
				}, 
				function(errResponse){
					console.error('Error while fetching orders');
					return $q.reject(errResponse);
				}
		);
	}
	
/*Stuck Orders handled in Last 10 Days*/
this.getStuckOrderHandled = function(status){
	
	return $http.get('stuckOrderHandled/')
	.then(
			function(response){
				return response.data;
			}, 
			function(errResponse){
				console.error('Error while fetching orders');
				return $q.reject(errResponse);
			}
	);
}

/*Orders stuck in different statuses*/
this.getStuckOrderallStatus = function(status){
	
	return $http.get('stuckOrderallStatus/')
	.then(
			function(response){
				return response.data;
			}, 
			function(errResponse){
				console.error('Error while fetching orders');
				return $q.reject(errResponse);
			}
	);
}


this.getStuckOrderBacklog = function(status){
	
	return $http.get('stuckOrderBacklogs/')
	.then(
			function(response){
				return response.data;
			}, 
			function(errResponse){
				console.error('Error while fetching orders');
				return $q.reject(errResponse);
			}
	);
}


this.getStuckOrderForStatus = function(status){
		
		return $http.get('stuckOrderList/'+status)
		.then(
				function(response){
					return response.data;
				}, 
				function(errResponse){
					console.error('Error while fetching orders');
					return $q.reject(errResponse);
				}
		);
	}

/*Dynamic graph for regular orders count*/
this.getDynRegOrderCount = function(DynGraphRequestObj){
	
	return $http({
		method:"POST",
		url:'dynamicRegOrderList',
		data:DynGraphRequestObj})
	.then(
			function(response){
				console.log(response.data);
				return response.data;
			}, 
			function(errResponse){
				console.error('Error while fetching orders');
				return $q.reject(errResponse);
			}
	);
}



/*Static count for regular orders created today*/
this.getRegOrderCount = function(){
	
	return $http.get('regularOrderList/')
	.then(
			function(response){
				return response.data;
			}, 
			function(errResponse){
				console.error('Error while fetching orders');
				return $q.reject(errResponse);
			}
	);
}


});