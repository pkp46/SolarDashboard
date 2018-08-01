module.service('UpdateOrderService',function($http,$q){
	
	/*
	 * Service Method that will Update the order details  
	 */
	this.updateOrderDetails = function(updatetype,newValue,orderId,lineId){
		
		var eventObj = {
				'orderId':orderId,
				'lineId':lineId,
				'type':updatetype,
				'newValue':newValue
		}
		
		return $http({
			method : "POST",
			url : "updateOrder",
			data :eventObj
		}).then(
				function(response){
					console.log(response.data);
					return response.data;
				}, 
				function(errResponse){
					console.error('Error while updatinng Order');
					return $q.reject(errResponse);
				}
			
		);
		
	}
	
	/*
	 * Service Method that will fetch allowed Updates for user  
	 */
	this.getAllowedUpdates = function(){
		
		return $http({
			method : "POST",
			url : "getAllowedUpdates"
		}).then(
				function(response){
					return response.data;
				}, 
				function(errResponse){
					console.error('Error while fetching allowed Updates');
					return $q.reject(errResponse);
				}
			
		);
		
	}
	
	/*
	 * Service Method that update multiple details for one Order.
	 */
	this.updateMultiOrderDetails = function(dataObj){
		
		return $http({
			method : "POST",
			url : "updateMultiOrderDetails",
			data : dataObj
		}).then(
				function(response){
					console.log(response.data);
					return response.data;
				}, 
				function(errResponse){
					console.error('Error while updatinng Order');
					return $q.reject(errResponse);
				}
			
		);
		
	}
	
	/*
	 * Service Method that update bulk order details.
	 */
	this.updateBulkOrderDetails = function(bulkUpdateID){
		
		return $http({
			method : "POST",
			url : "updateBulkOrderDetails/"+bulkUpdateID
		}).then(
				function(response){
					console.log(response.data);
					return response.data;
				}, 
				function(errResponse){
					console.error('Error while updatinng Order');
					return $q.reject(errResponse);
				}
			
		);
		
	}

			
});