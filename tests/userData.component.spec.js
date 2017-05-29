describe('Component: userData', function () {
  beforeEach(module('myApp.userDataComponent'));
 
    var ctrl, httpBackend;

    var countryList = ['United Kingdom', 'Italy', 'Spain'];

beforeEach(inject([
    '$componentController','$httpBackend',
    function($ctrl, $httpBackend){
        ctrl = $ctrl('userData', null,{ 
        });
        httpBackend = $httpBackend;
        httpBackend.when('GET', 'https://restcountries.eu/rest/v1/region/Europe').respond(200, countryList);
    }
]));

 describe('when controller loads', function () {
  it('should load the country list', function() {

    httpBackend.flush();

    expect(ctrl.countryList).toEqual(countryList);
  });
 });


describe('when submitting the form', function () {
        beforeEach(function () {
            httpBackend.when('POST', '/api/users').respond(201);
        })

        it('should display a message after API call', function () {
            ctrl.submitForm({ $valid : true });

            httpBackend.flush();

            expect(ctrl.complete).toBe(true);
        });

        it('should not submit the form if it is invalid', function () {
            ctrl.submitForm({ '$valid' : false });

            httpBackend.flush();

            expect(ctrl.complete).toBe(false);
        });
    });

});
