module.service('MessageService', function($http,Flash) {

	/*
	 * Service Method that will Show Success Alert message
	 * 
	 */
	this.showSuccess = function(message,timeout) {
		 var msgWithIcon = '<span class="glyphicon glyphicon-thumbs-up marRight8"></span>'+message;
		 var id = Flash.create('success', msgWithIcon, timeout, {class: 'custom-class', id: 'custom-id'}, true);
	}
	
	/*
	 * Service Method that will Show Error Alert message
	 * 
	 */
	this.showError = function(message,timeout) {
		 var msgWithIcon = '<span class="glyphicon glyphicon-thumbs-down marRight8"></span>'+message;
		 var id = Flash.create('danger', msgWithIcon, timeout, {class: 'custom-class', id: 'custom-id'}, true);
	}
	
	/*
	 * Service Method that will Show Info Alert message
	 * 
	 */
	this.showInfo = function(message,timeout) {
		 var msgWithIcon = '<span class="glyphicon glyphicon-info-sign marRight8"></span>'+message;
		 var id = Flash.create('info', msgWithIcon, timeout, {class: 'custom-class', id: 'custom-id'}, true);
	}
	
	/*
	 * Service Method that will Show Warning Alert message
	 * 
	 */
	this.showWarning = function(message,timeout) {
		 var msgWithIcon = '<span class="glyphicon glyphicon-exclamation-sign marRight8"></span>'+message;
		 var id = Flash.create('warning', msgWithIcon, timeout, {class: 'custom-class', id: 'custom-id'}, true);
	}

});