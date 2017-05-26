'use strict';

angular.module('myApp.view1', ['myApp.service'])

.component('testcom', {
  templateUrl: 'view1/view1.html',
  controller: ['TestService','$state',function(TestService, $state) {
    var vm = this;

    vm.userData = { 
      name:"", 
      age: null, 
      country: null, 
      sex: "Male", 
      dateCreated: new Date()
    };

    vm.submitForm = function(){
      TestService.saveUser(vm.userData, function(response){
        console.log(response);
        $state.go('view2');
      });
    };

    vm.showUser = function(){
      console.log(TestService.getUser());
    }

    TestService.getCountries(function (response) {
        if (response && response.status === 200) {
          vm.countryList = response.data;
        }
        else {
          console.log("zzz");
        }
    });
  }]
})

.controller('View1Ctrl', [function() {

}]);