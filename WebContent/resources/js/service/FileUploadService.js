module.service('FileUploadService', function($http,$q) {

	/*
	 * This method uploads the file to update bulk Orders.
	 */
	this.uploadFileToUrl = function(file, uploadUrl){
	      var fd = new FormData();
	      fd.append('file', file);
	   
	      return $http.post(uploadUrl, fd, {
	         transformRequest: angular.identity,
	         headers: {'Content-Type': undefined}
	      }).then(
				function(response){
					return response.data;
				}, 
				function(errResponse){
					return $q.reject(errResponse);
				}
			);
	   }
});