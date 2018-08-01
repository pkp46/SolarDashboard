module.service('UserService', function($http,$q) {
	
	/*
	 * Service Method that will get the list of pending users  
	 */
	this.getPendingApprovalUserList = function(){
		
		return $http({
			method : "GET",
			url : "pendingApprovalUserList"
		}).then(
				function(response){
					console.log(response.data);
					return response.data;
				}, 
				function(errResponse){
					console.error('Error while getting pending user list');
					return $q.reject(errResponse);
				}
		);
		
	}
	
	/*
	 * Service Method that will reject the user approval request
	 */
	this.rejectUserRequest = function(empdata){
		
		return $http({
			method : "POST",
			url : "rejectUser",
			data :empdata
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
	 * Service Method that will get the list of pending users  
	 */
	this.getPendingUserDetailsByEmpId = function(employeeId){
		
		return $http({
			method : "GET",
			url : "getPendingUserDetailsByEmpId/"+employeeId
		}).then(
				function(response){
					console.log(response.data);
					return response.data;
				}, 
				function(errResponse){
					console.error('Error while getting pending user list');
					return $q.reject(errResponse);
				}
		);
		
	}
	
	/*
	 * Service Method that will get the list of approved users  
	 */
	this.getUserDetailsByEmpId = function(employeeId){
		
		return $http({
			method : "GET",
			url : "getUserDetailsByEmpId/"+employeeId
		}).then(
				function(response){
					console.log(response.data);
					return response.data;
				}, 
				function(errResponse){
					console.error('Error while getting pending user list');
					return $q.reject(errResponse);
				}
		);
		
	}
	
	
	/*
	 * Service Method that will save user assignments
	 */
	this.doUserAssignment = function(userData){
		
		return $http({
			method : "POST",
			url : "createUserAssigments",
			data :userData
		}).then(
				function(response){
					console.log(response.data);
					return response.data;
				}, 
				function(errResponse){
					console.error('Error while doing User assignment');
					return $q.reject(errResponse);
				}
			
		);
		
	}
	
	/*
	 * Service Method that will update user assignments
	 */
	this.updateUserAssignment = function(userData){
		
		return $http({
			method : "POST",
			url : "updateUserAssigments",
			data :userData
		}).then(
				function(response){
					console.log(response.data);
					return response.data;
				}, 
				function(errResponse){
					console.error('Error while updating User assignment');
					return $q.reject(errResponse);
				}
			
		);
	}
	
	
	/*
	 * Service Method that will get the list of approved users
	 */
	this.getUserList = function(searchData){
		
		if(searchData==null || searchData==undefined){
			searchData = {}
		}
		
		return $http({
			method : "POST",
			url : "getUserList",
			data : searchData
		}).then(
				function(response){
					console.log(response.data);
					return response.data;
				}, 
				function(errResponse){
					console.error('Error while getting pending user list');
					return $q.reject(errResponse);
				}
		);
		
	}


});