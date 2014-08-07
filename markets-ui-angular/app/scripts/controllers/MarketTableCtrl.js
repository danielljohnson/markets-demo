angular
	.module('markets-demo-angular')
	.controller('MarketTableCtrl', function($scope, CurrenciesSvc, LocationsSvc, MarketsSvc) {
		$scope.currencies = CurrenciesSvc.get();
		$scope.locations = LocationsSvc.get();
		$scope.markets = MarketsSvc.get();

		$scope.delete = function(id) {
			console.log('delete '+ id);

			MarketsSvc.delete({id: id});
		}
		$scope.edit = function(id) {
			console.log('edit '+ id);
		}
	});