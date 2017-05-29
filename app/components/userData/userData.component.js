'use strict';

angular.module('myApp.userDataComponent', ['myApp.service'])

.component('userData', {
  templateUrl: 'components/userData/userData.component.html',
  controller: ['TestService',function(TestService) {
    var vm = this;

    vm.complete = false;

    // Initialise the object to be populated by the form fields
    vm.userData = { 
      name:"", 
      age: null, 
      country: null, 
      sex: "Male", 
      dateCreated: new Date()
    };

    // Function to submit the form
    vm.submitForm = function(form){

      if (form.$valid)
      {
        //If the form is valid, call the service to submit it
        TestService.saveUser(vm.userData, function(response){
          vm.complete = true;
        });
      }
      else
      {
        vm.submitted = true;

        //Set all of the fields in the form as touched
        //To display validation errors
        angular.forEach(form.$error, function (field) {
          angular.forEach(field, function(errorField){
              errorField.$setTouched();
          })
        });
      };
    };

    // Call the service to get the country list
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