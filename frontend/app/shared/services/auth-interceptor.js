angular
    .module('app')
    .factory('authInterceptor', [
        '$q', '$window', '$log', '$location', 'AUTH_TOKEN', 'AUTH_TOKEN_HEADER',
        function ($q, $window, $log, $location, AUTH_TOKEN, AUTH_TOKEN_HEADER) {
            return {
                request: function (config) {
                    config.headers = config.headers || {};

                    if ($window.localStorage[AUTH_TOKEN]) {
                        config.headers[AUTH_TOKEN_HEADER] = $window.localStorage[AUTH_TOKEN];
                    }

                    return config;
                },

                response: function (response) {
                    return response || $q.when(response);
                },

                responseError: function (rejection) {
                    switch (rejection.status) {
                        case 0:
                            $log.error(rejection.status + '  ' + rejection.statusText + ': ' + rejection.data);
                            break;
                        case 401:
                        case 403:
                            $window.localStorage.clear();
                            $location.path('/');
                            break;
                        default:
                            $log.error(rejection.status + '  ' + rejection.statusText + ': ' + rejection.data);
                    }
                    return $q.reject(rejection);
                }
            };
        }]);