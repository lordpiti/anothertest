'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ngMessages',
  'myApp.userDataComponent',
  'myApp.userDetailsComponent',
  'myApp.userListComponent'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/userData');

    $stateProvider

        .state('userData', {
            url: '/userData',
            component: 'userData'
        })

        .state('userList', {
            url: '/userList',
            component: 'userList'      
        });

}]);
