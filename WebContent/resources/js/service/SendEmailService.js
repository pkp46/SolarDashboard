module.service('SendEmailService',function($http,$q){
	
	this.sendEmailRes=function(toEmailId,ccEmailId,emailSubject,emailContent){
	var emailRequest={
			'fromEmailId':"ankita.mishra@amdocs.com",
			'toEmailIdList':toEmailId,
			'ccEmailIdList':ccEmailId,
			'emailSubject':emailSubject,
			 'emailContent':emailContent	
	}
	return $http({
		method : "POST",
		url : "sendMail",
		data :emailRequest
	}).then(
			function(response){
				console.log(response.data);
				return response.data;
			}, 
			function(errResponse){
				console.error('Error while sending mail');
				return $q.reject(errResponse);
			}
		
	);
	}
	
});