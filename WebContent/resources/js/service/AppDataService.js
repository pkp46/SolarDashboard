module.service('AppDataService', function($http,$q) {
	
	/*
	 *Service Method that will fetch Stuck Order help from Json file.
	 * 
	 */
	this.getOrderHelpData = function(){
		return $http.get('resources/js/data/OrderHelp.json');
	}
	
	/*
	 *Service Method that will get Order update Order configuration.
	 * 
	 */
	this.getOrderMultiUpdateConfiguration = function(){
		return $http.get('resources/js/data/OrderTableConfiguration.json');
	}
	
});