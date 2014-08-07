angular
	.module('markets-demo-angular')
	.controller('MarketsCtrl', function($scope, $modal, $log) {
      $scope.add = function (size) {
        var modalInstance = $modal.open({
			templateUrl: 'views/markets/markets-modal.html',
			controller: 'MarketsModalCtrl',
			size: size,
			resolve: {
				options: function() {
					return {
						title: 'Add',
						close: function() {
							console.log('test close');
						},
						save: function(success, error) {
							console.log('test save');

							if (true) {
								success();
							}
							else {
								error('there was an error');
							}
						}
					}
				}
			}
        });

        modalInstance.result.then(function (selectedItem) {
				console.log(arguments);
				$scope.selected = selectedItem;
			}, function () {
				console.log(arguments);
				$log.info('Modal dismissed at: ' + new Date());
			});
      };
	});