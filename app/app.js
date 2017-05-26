'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ngMessages',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/view1');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('view1', {
            url: '/view1',
            //templateUrl: 'view1/view1.html'
            component: 'testcom'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('view2', {
            url: '/view2',
            //templateUrl: 'view1/view1.html'
            component: 'testcomponent2'      
        });

}]);
