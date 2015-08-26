angular
    .module('app')
    .config(['$routeProvider', function ($routeProvider) {
        return $routeProvider
            .when('/login', {
                templateUrl: './login/partials/login.html',
                controller: 'LoginController',
                public: true
            })
            .when('/', {
                templateUrl: './front/partials/front.html',
                controller: 'FrontController'
            })
            
            .otherwise({
                redirectTo: '/'
            });
    }]);