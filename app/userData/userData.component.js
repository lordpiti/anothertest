'use strict';

angular.module('myApp.userDataComponent', ['myApp.service'])

.component('userData', {
  templateUrl: 'userData/userData.component.html',
  controller: ['TestService',function(TestService) {
    var vm = this;

    vm.complete = false;

    vm.userData = { 
      name:"", 
      age: null, 
      country: null, 
      sex: "Male", 
      dateCreated: new Date()
    };

    vm.submitForm = function(form){

      if (form.$valid)
      {
        TestService.saveUser(vm.userData, function(response){
          //$state.go('thankYou');
          vm.complete = true;
        });
      }
      else
      {
        vm.submitted = true;
        angular.forEach(form.$error, function (field) {
          angular.forEach(field, function(errorField){
              errorField.$setTouched();
          })
        });
      };
    };

    TestService.getCountries(function (response) {
        if (response && response.status === 200) {
          vm.countryList = response.data;
        }
        else {
          console.log("error when getting the list of countries");
        }
    });
  }]
});