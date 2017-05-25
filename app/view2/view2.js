'use strict';

angular.module('myApp.view2', [])

.component('testcomponent2', {
  templateUrl: 'view2/view2.html',
  controller: function() {

    console.log("haha2");
  }
})

.controller('View2Ctrl', [function() {

}]);