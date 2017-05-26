var projectAdminService = angular.module('myApp.service', []);

projectAdminService.factory('TestService', ['$http',
function ($http) {

    var _getCountries = function (cb) {
        var _url = "https://restcountries.eu/rest/v1/region/Europe";
        $http({
            method: 'GET',
            url: _url
        })
        .then(function (response) {
            cb(response);
        },
        // error
        function (response) {
            cb(response);
        });

    }

    var _saveUser = function (user, cb) {
        var _url = "/api/users";
        $http({
            method: 'POST',
            url: _url,
            data: user
        })
        .then(function (response) {
            cb(response);
        })
        .catch(function (data, status) {
            cb();
        });
    };

    return {
        getCountries: _getCountries,
        saveUser: _saveUser
    }

}]);