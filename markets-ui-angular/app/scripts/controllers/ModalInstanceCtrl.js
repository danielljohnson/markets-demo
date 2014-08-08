angular
    .module('markets-demo-angular')
    .controller('MarketsModalCtrl', function ($scope, $modalInstance, options) {
      $scope.options = options;

      $scope.save = function () {console.log(arguments, $scope.marketForm, $scope);
        $scope.options.save(
            $scope.marketForm,
            function() {
                $modalInstance.close('saved');
            },
            function(error) {
                console.log(error);
            }
        );
      };

      $scope.close = function () {
        if ($scope.options.close) {
            $scope.options.close();   
        }
        
        $modalInstance.dismiss('close');
      };
    });