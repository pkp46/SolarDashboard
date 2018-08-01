module.service('ManageGroupService', function($http,$q) {
	
	/*
	 *Service Method that will fetch group List
	 */
	this.getGroupList = function(){
		
		return $http.get('getGroupList/')
		.then(
				function(response){
					return response.data;
				}, 
				function(errResponse){
					console.error('Error while fetching groups');
					return $q.reject(errResponse);
				}
		);
	}
	
	/*
	 *Service Method that will fetch role List
	 */
	this.getRoleList = function(){
		
		return $http.get('getRoleList/')
		.then(
				function(response){
					return response.data;
				}, 
				function(errResponse){
					console.error('Error while fetching groups');
					return $q.reject(errResponse);
				}
		);
	}
	
	/*
	 * Service Method that will create new Group
	 */
	this.createNewGroup = function(groupData){
		
		return $http({
			method : "POST",
			url : "addGroup",
			data :groupData
		}).then(
				function(response){
					return response.data;
				}, 
				function(errResponse){
					console.error('Error while adding group');
					return $q.reject(errResponse);
				}
			
		);
		
	}
	
	/*
	 * Service Method that will update Group
	 */
	this.updateGroupDetails = function(groupData){
		
		return $http({
			method : "POST",
			url : "updateGroup",
			data :groupData
		}).then(
				function(response){
					return response.data;
				}, 
				function(errResponse){
					console.error('Error while adding group');
					return $q.reject(errResponse);
				}
			
		);
		
	}
	
	/*
	 * Service Method that will delete Group
	 */
	this.deleteGroup = function(groupId){
		
		return $http({
			method : "POST",
			url : "deleteGroup/"+groupId
		}).then(
				function(response){
					return response.data;
				}, 
				function(errResponse){
					console.error('Error while adding group');
					return $q.reject(errResponse);
				}
			
		);
		
	}


});