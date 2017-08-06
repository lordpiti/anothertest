describe('Component: userList', function () {
  beforeEach(module('myApp.userListComponent'));
 
    let ctrl, httpBackend, scope;

    let userList = [{ name: "ff"},{ name: "cc"}];

    let mockService = {
        testPromises: () => {},
        testLodash: () => {},
        getUsersPromise: () => {}
    }

    beforeEach(inject([
        '$componentController','$httpBackend', '$rootScope', '$q',
        function($ctrl, $httpBackend, $rootScope, $q){

            scope = $rootScope.$new();

            ctrl = $ctrl('userList', { $scope: scope, TestService: mockService },{ 
            });

            spyOn(mockService, 'testPromises').and.returnValue($q.when([1,2,3]));
            spyOn(mockService, 'getUsersPromise').and.returnValue($q.when({ data: userList, status: 200}));

            spyOn(ctrl, 'jaja').and.callFake(function(myParam) {
                if (myParam == 2) {
                    return 4;
                } else if (myParam == 3) {
                    return 6;
                }
            });
            ctrl.$onInit();
        }
    ]));

    describe('when controller loads', function () {
        it('should load the user list', function() {
            
            scope.$digest();

            expect(ctrl.users).toEqual(userList);
            expect(ctrl.dato).toEqual(4);
            expect(ctrl.jaja).toHaveBeenCalledWith(2);
        });
    });


    describe('when clicking a button', function () {

        it('should display a message after API call', function () {
            ctrl.users = userList;
            
            ctrl.toggle(0);

            expect(ctrl.users[0].visible).toBe(true);
        });
    });

});
