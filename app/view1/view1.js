'use strict';

angular.module('myApp.view1', [])

.component('testcom', {
  templateUrl: 'view1/view1.html',
  controller: function() {

    console.log("haha");
  }
})

.controller('View1Ctrl', [function() {

}]);