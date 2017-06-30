'use strict';

angular.module('myApp.userListComponent', ['myApp.service'])

.component('userList', {
  templateUrl: 'components/userList/userList.component.html',
  controller: ['TestService',function(TestService) {

    var vm = this;

    this.$onInit = function() {

      TestService.getUsers(function(response){
        if (response && response.status === 200) {
            vm.users = response.data;
          }
          else {
            console.log("error when getting the list of users");
          }
      });
    }

    vm.toggle = function(index){
      vm.users[index].visible = vm.users[index].visible!=null? !vm.users[index].visible: true;
    }
  }]
});