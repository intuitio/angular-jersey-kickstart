angular
    .module('app')

    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.timeout = 5000;
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.interceptors.push('authInterceptor');
    }])

    .run(['$rootScope', '$location', function ($rootScope, $location) {
        return $rootScope.$on('$routeChangeStart', function (event, next) {
            if (
                (!next.public && !window.localStorage.token)
            ) {
                event.preventDefault();
                window.localStorage.clear();
                $location.path('/');
                return;
            }
        });
    }]);
