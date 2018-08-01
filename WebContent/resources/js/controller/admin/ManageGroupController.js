module.controller("ManageGroupController", function($scope, MessageService,$http,$location,$rootScope,Auth,ManageGroupService) 
{
	$scope.title = "Manage Group";
	
	$scope.CreateEditGroupPopupTitle = "";
	$scope.CreateEditGroupButtonText = "";
	
	$scope.groupList = [];
	
	$scope.roleList = {};
	
	$scope.groupData = {};
	
	$scope.oprFlag = 'create';
	
	$scope.init = function(){
		getGroupList();
		getRoleList();
	}
	
	$scope.init();
	
	$scope.opneCreateGroupPopup = function(){
		$scope.groupData = {};
		$scope.CreateEditGroupPopupTitle = "Create Group";
		$scope.oprFlag = 'create';
		$scope.CreateEditGroupButtonText = "Add";
		$("#CreateEditGroup-modal").modal();
	}
	
	$scope.opneEditGroupPopup = function(editGroupData){
		$scope.CreateEditGroupPopupTitle = "Edit Group";
		$scope.CreateEditGroupButtonText = "Update";
		$scope.oprFlag = 'update';
		$scope.groupData = angular.copy(editGroupData);
		$scope.groupData.roleId = editGroupData.roleId.toString();
		$("#CreateEditGroup-modal").modal();
	}
	
	$scope.opneDeleteGroupConfirmationPopup = function(deleteGroupData){
		$scope.groupData = angular.copy(deleteGroupData);
		$("#DeleteGroupConfirmation-modal").modal();
	}
	
	$scope.closeDeleteGroupConfirmationPopup = function(deleteGroupData){
		$("#DeleteGroupConfirmation-modal").modal('hide');
	}
	
	$scope.createEditGroup = function(){
		if($scope.oprFlag === 'create')
			addNewGroup($scope.groupData);
		else
			editGroupData($scope.groupData);
	}
	
	$scope.deleteGroup = function(){
		$rootScope.spinner.on();
		$("#DeleteGroupConfirmation-modal").modal('hide');
		ManageGroupService.deleteGroup($scope.groupData.groupId).then(
				function(response) {
					$rootScope.spinner.off();
					if(response!=undefined && response.errorCode == 0){
						getGroupList();
						MessageService.showSuccess(response.errorMsg,10000);
					}
					else{
						var errorMessage = response.errorMsg + ((response.logRefId!==null) ? "\n Log Reference ID : " + response.logRefId : '');
						MessageService.showError(errorMessage,10000);
					}
	       		},
		       function(errResponse){
	       			$rootScope.spinner.off();
					MessageService.showSuccess('Error occured while updating order. Please try again later.',5000);
		       }
		);
	}
	
	function getGroupList()
	{
		$rootScope.spinner.on()
		ManageGroupService.getGroupList().then(function(data) {
			$rootScope.spinner.off()
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
	
	function addNewGroup(groupData){
		$rootScope.spinner.on();
		$("#CreateEditGroup-modal").modal('hide');
		ManageGroupService.createNewGroup(groupData).then(
				function(response) {
					$rootScope.spinner.off();
					if(response!=undefined && response.errorCode == 0){
						getGroupList();
						MessageService.showSuccess(response.errorMsg,10000);
					}
					else{
						var errorMessage = response.errorMsg + ((response.logRefId!==null) ? "\n Log Reference ID : " + response.logRefId : '');
						MessageService.showError(errorMessage,10000);
					}
	       		},
		       function(errResponse){
	       			$rootScope.spinner.off();
					MessageService.showSuccess('Error occured while updating order. Please try again later.',5000);
		       }
		);
	}
	
	function editGroupData(){
		$rootScope.spinner.on();
		$("#CreateEditGroup-modal").modal('hide');
		ManageGroupService.updateGroupDetails($scope.groupData).then(
				function(response) {
					$rootScope.spinner.off();
					if(response!=undefined && response.errorCode == 0){
						getGroupList();
						MessageService.showSuccess(response.errorMsg,10000);
					}
					else{
						var errorMessage = response.errorMsg + ((response.logRefId!==null) ? "\n Log Reference ID : " + response.logRefId : '');
						MessageService.showError(errorMessage,10000);
					}
	       		},
		       function(errResponse){
	       			$rootScope.spinner.off();
					MessageService.showSuccess('Error occured while updating order. Please try again later.',5000);
		       }
		);
	}
	
	
});