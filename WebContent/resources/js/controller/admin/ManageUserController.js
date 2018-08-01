module.controller("ManageUserController", function($scope, $routeParams,$http,UserService,$rootScope,Auth,MessageService,ManageGroupService) 
{
	$scope.title = "Manage User";
	
	$scope.userList = [];
	
	$scope.groupList = [];
	
	$scope.roleList = [];
	
	$scope.companyList = ['CRICKET','AMDOCS'];
	
	$scope.userData = {};
	
	$scope.userSearch = {};
	
	$scope.pendingUserList = [];
	
	$scope.init = function(){
		getPendingUserList();
		getGroupList();
		getRoleList()
		getUserList();
	}
	
	$scope.init();
	
	$scope.rejectUserConfirm = function(empData){
		$scope.userData = empData;
		console.log(empData.empId);
		$("#RejectUserConfirmation-modal").modal();
	}
	
	$scope.closeRejectUserConfirmationPopup = function(deleteGroupData){
		$("#RejectUserConfirmation-modal").modal('hide');
	}
	
	$scope.rejectUserRequest = function(){
		var empdata= {
				empId : $scope.userData.empId,
				rejectComments : $scope.reject.comments
		}
		rejectUser(empdata);
	}
	
	$scope.searchUser = function(){
		getUserList($scope.userSearch);
	}
	
	function getPendingUserList(){
		$rootScope.spinner.on();
		UserService.getPendingApprovalUserList().then(
				function(response) {
					$rootScope.spinner.off();
					if(response!=undefined && response.length>0){
						$scope.pendingUserList = response;
					}
					else{
						$rootScope.spinner.off();
						var errorMessage = response.errorMsg + ((response.logRefId!==null) ? "\n Log Reference ID : " + response.logRefId : '');
						MessageService.showError(errorMessage,10000);
					}
	       		},
		       function(errResponse){
	       			$rootScope.spinner.off();
					MessageService.showSuccess('Error occured while getting pending User list. Please try again later.',5000);
		       }
		);
	}
	
	function rejectUser(empdata){
		$rootScope.spinner.on();
		
		UserService.rejectUserRequest(empdata).then(
				function(response) {
					$rootScope.spinner.off();
					if(response!=undefined && response.errorCode == '0'){
						MessageService.showSuccess(response.errorMessage,10000);
						$("#RejectUserConfirmation-modal").modal('hide');
						getPendingUserList();
					}
					else{
						$rootScope.spinner.off();
						var errorMessage = response.errorMsg + ((response.logRefId!==null) ? "\n Log Reference ID : " + response.logRefId : '');
						MessageService.showError(errorMessage,10000);
					}
	       		},
		       function(errResponse){
	       			$rootScope.spinner.off();
					MessageService.showSuccess('Error occured while getting pending User list. Please try again later.',5000);
		       }
		);
	}
	
	function getGroupList()
	{
		ManageGroupService.getGroupList().then(function(data) {
			$scope.groupList = data;
		},
		function(errResponse) {
			console.error('Error while fetching Currencies');
		});
	}
	
	function getRoleList()
	{
		ManageGroupService.getRoleList().then(function(data) {
			if(data.length>0){
				$scope.roleList = data;
			}
		},
		function(errResponse) {
			console.error('Error while fetching Currencies');
		});
	}
	
	
	function getUserList(searchData){
		$rootScope.spinner.on();
		UserService.getUserList(searchData).then(
				function(response) {
					$rootScope.spinner.off();
					if(response!=undefined){
						$scope.userList = response;
						if(response.length==0)
							MessageService.showInfo('No data found.',5000);
					}
					else{
						$rootScope.spinner.off();
						var errorMessage = response.errorMsg + ((response.logRefId!==null) ? "\n Log Reference ID : " + response.logRefId : '');
						MessageService.showError(errorMessage,10000);
					}
	       		},
		       function(errResponse){
	       			$rootScope.spinner.off();
					MessageService.showSuccess('Error occured while getting User list. Please try again later.',5000);
		       }
		);
	}
	
});