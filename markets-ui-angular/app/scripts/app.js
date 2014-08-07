angular
	.module('markets-demo-angular', ['ngRoute', 'ngResource', 'ui.bootstrap'])
	.config(function ($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: 'views/home/home.html', controller: 'HomeCtrl'})
            .when('/markets', {templateUrl: 'views/markets/markets.html', controller: 'MarketsCtrl'})
            .otherwise({redirectTo: '/'});
    });