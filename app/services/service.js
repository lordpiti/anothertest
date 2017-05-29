var projectAdminService = angular.module('myApp.service', []);

projectAdminService.factory('TestService', ['$http',
function ($http) {

    var _user = null;

    var _setUser = function(user){
        _user = user;
    }

    var _getUser = function(){
        return _user;
    }

    var _getCountries = function (cb) {
        var _url = "/api/countries";
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
            _setUser(user);
            cb(response);
        })
        .catch(function (data, status) {
            cb();
        });
    };

    var _getUsers = function (cb) {
        var _url = "/api/users";
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

    return {
        getCountries: _getCountries,
        getUsers: _getUsers,
        saveUser: _saveUser,
        getUser: _getUser,
        setUser: _setUser
    }

}]);