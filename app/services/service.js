var projectAdminService = angular.module('myApp.service', []);

projectAdminService.factory('TestService', ['$http',
function ($http) {

    var _currentUser = null;

    var _getUser = function(index, cb){
        _getUsers(function(response){
            if (response && response.status === 200) {
                cb(response.data[index]);
            }
            else {
                console.log("error when getting the list of users");
            }
        })
        
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
        currentUser: _currentUser
    }

}]);