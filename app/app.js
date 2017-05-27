'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ngMessages',
  'myApp.userDataComponent',
  'myApp.userListComponent',
  'myApp.version'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/userData');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('userData', {
            url: '/userData',
            //templateUrl: 'view1/view1.html'
            component: 'userData'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('userList', {
            url: '/userList',
            //templateUrl: 'view1/view1.html'
            component: 'userList'      
        });

}]);
