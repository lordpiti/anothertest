describe('Component: userDetails', function () {
  beforeEach(module('myApp.userDetailsComponent'));
 
    var ctrl;

    var mockUser = {name:"ese"};

    var mockTestService = { 
        getUser: function(index, cb){
            cb(mockUser);
        }
    };

    beforeEach(inject([
        '$componentController',
        function($ctrl){
            ctrl = $ctrl('userDetails', {TestService:mockTestService},{ 
            });
            ctrl.$onInit();
        }
    ]));

    describe('when controller loads', function () {
        it('should load the user list', function() {

            expect(ctrl.user).toEqual(mockUser);
        });
    });


    describe('when clicking a button', function () {

        it('should change selected item', function () {
            var theOne = { name: "bu"};
            ctrl.setSelected(theOne);
            expect(ctrl.service.currentUser).toEqual(theOne);
        });
    });

});
