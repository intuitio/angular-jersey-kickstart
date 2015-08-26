angular
    .module('app')
    .factory('authenticationService', [
        '$http', '$window', '$q', '$log', 'AUTH_TOKEN',
        function ($http, $window, $q, $log, AUTH_TOKEN) {
            return {
                login: function (credentials) {
                    var deferred = $q.defer();

                    // FIXME: Dummy login
                    if ((credentials.username === 'admin') &&
                        (credentials.password === 'admin')) {
                        var token = 1; // FIXME: Token should be generated

                        $window.localStorage.username = credentials.username;
                        $window.localStorage[AUTH_TOKEN] = token;

                        deferred.resolve(token);
                    } else {
                        deferred.reject('Invalid username or password');
                    }

                    return deferred.promise;
                },

                logout: function () {
                    var deferred = $q.defer();

                    // FIXME: Dummy logout
                    $window.localStorage.clear();

                    deferred.resolve(-1);
                    return deferred.promise;
                },

                authenticated: function () {
                    return !!$window.localStorage[AUTH_TOKEN];
                }
            };
        }]);