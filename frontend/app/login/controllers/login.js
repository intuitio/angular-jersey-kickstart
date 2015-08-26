angular
    .module('app')
    .controller('LoginController', ['$scope', '$log', '$location', 'authenticationService', function ($scope, $log, $location, authenticationService) {

        $scope.credentials = {
            username: 'admin',
            password: 'admin'
        };

        $scope.login = function () {
            authenticationService.login($scope.credentials).then(function () {
                $log.debug('Logged in');
                $location.path('/');
            }, function () {
                $log.debug('Not logged in');
            });
        };
    }]);
