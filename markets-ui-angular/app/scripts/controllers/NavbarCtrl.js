angular
	.module('markets-demo-angular')
	.controller('NavbarCtrl', function($scope, $location) {
	    $scope.isActive = function (viewLocation) {
	        return viewLocation === $location.path();
	    };
	});