'use strict';

angular.module('myApp.userDetailsComponent', ['myApp.service'])

.component('userDetails', {
  templateUrl: 'components/userDetails/userDetails.component.html',
  bindings: {
    userIndex: '<'
  },
  controller: ['TestService',function(TestService) {

    this.$onInit = function() {
      var vm = this;

      TestService.getUser(vm.userIndex, function(response){
        if (response) {
            vm.user = response;
          }
          else {
            console.log("error when getting an user");
          }
      });
    };

  }]
});