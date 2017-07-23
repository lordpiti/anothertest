var projectAdminService = angular.module('myApp.service', []);

projectAdminService.factory('TestService', ['$http','$q',
function ($http, $q) {

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

    var _getUsers2 =  () => {
        var _url = "/api/users";
        return $http({
            method: 'GET',
            url: _url
        })
    }

    var _testPromises = () => {
        let _url1 = 'http://demo1935823.mockable.io/getItem1';
        let _url2 = 'http://demo1935823.mockable.io/getItem2';

        let arrayUrls = [_url1, _url2];
        let promisesList = arrayUrls.map(getDataFromUrl);
        
        return Promise.all(promisesList);
    }

    var _testPromises2 = () => {
        let _url1 = 'http://demo1935823.mockable.io/getItem1';
        let _url2 = 'http://demo1935823.mockable.io/getItem2';

        let arrayUrls = [_url1, _url2];
        let promisesList = arrayUrls.map(getDataFromUrl);

        return Promise.all(promisesList)
            .then(response=>{return [response[0],response[1],3]});
    }

    //https://jsfiddle.net/jeremylikness/Q2jMG/
    var _testPromises3 = () => {
        let _url1 = 'http://demo1935823.mockable.io/getItem1';
        let _url2 = 'http://demo1935823.mockable.io/getItem2';

        let arrayUrls = [_url1, _url2];
        let promisesList = arrayUrls.map(getDataFromUrl);

        return $q.all(promisesList)
            .then(response=>{return [response[0],response[1],3]});
    }

    var getDataFromUrl = (url)=> {
        return $http({
            method: 'GET',
            url: url
        }).then(x=> {return x.data.msg});
    }

    return {
        getCountries: _getCountries,
        getUsers: _getUsers,
        getUsersPromise: _getUsers2,
        saveUser: _saveUser,
        getUser: _getUser,
        currentUser: _currentUser,
        testPromises: _testPromises3
    }

}]);