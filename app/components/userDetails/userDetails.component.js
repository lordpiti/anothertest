'use strict';

angular.module('myApp.userDetailsComponent', ['myApp.service'])

.component('userDetails', {
  templateUrl: 'components/userDetails/userDetails.component.html',
  bindings: {
    userIndex: '<'
  },
  controller: ['TestService',function(TestService) {

    var vm = this;

    this.$onInit = function() {
      vm.service = TestService;
      vm.service.getUser(vm.userIndex, function(response){
        if (response) {
            vm.user = response;
          }
          else {
            console.log("error when getting an user");
          }
      });
    };

    vm.setSelected = function(currentUser){
      vm.service.currentUser = currentUser;
    }

    
  }]
});