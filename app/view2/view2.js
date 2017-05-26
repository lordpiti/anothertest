'use strict';

angular.module('myApp.view2', ['myApp.service'])

.component('testcomponent2', {
  templateUrl: 'view2/view2.html',
  controller: ['TestService',function(TestService) {
    var vm = this;

    vm.userData = TestService.getUser();
  }]
})

.controller('View2Ctrl', [function() {

}]);