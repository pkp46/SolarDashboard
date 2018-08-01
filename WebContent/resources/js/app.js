var module = angular.module("PDashboard", ['ngRoute']);

module.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/dashboard', {
		templateUrl : 'views/Dashboard.html',
		controller : 'DashboardController'
	})
	.when('/demo', {
		templateUrl : 'views/demo.jsp',
		controller : 'DashboardController'
	})
	.otherwise({
		redirectTo : '/dashboard'
	});
} ]);


