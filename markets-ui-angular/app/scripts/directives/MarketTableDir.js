angular
	.module('markets-demo-angular')
    .directive('marketTable', function () {
        return {
        	restrict: 'A',
            templateUrl: '/views/markets/market-table.html'
        };
    });