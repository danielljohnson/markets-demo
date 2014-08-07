angular
	.module('markets-demo-angular')
    .directive('navbar', function () {
        return {
        	restrict: 'E',
        	replace: true,
            templateUrl: '/views/directives/navbar.html'
        };
    });