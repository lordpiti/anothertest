describe('Component: userList', function () {
  beforeEach(module('myApp.userListComponent'));
 
    var ctrl, httpBackend;

    var userList = [{ name: "ff"},{ name: "cc"}];

    beforeEach(inject([
        '$componentController','$httpBackend',
        function($ctrl, $httpBackend){
            ctrl = $ctrl('userList', null,{ 
            });
            //spyOn(ctrl, 'jaja').and.returnValue(3);
            spyOn(ctrl, 'jaja').and.callFake(function(myParam) {
                if (myParam == 2) {
                    return 4;
                } else if (myParam == 3) {
                    return 6;
                }
            });
            ctrl.$onInit();
            httpBackend = $httpBackend;
            httpBackend.when('GET', '/api/users').respond(200, userList);
        }
    ]));

    describe('when controller loads', function () {
        it('should load the user list', function() {

            httpBackend.flush();

            expect(ctrl.users).toEqual(userList);
            expect(ctrl.dato).toEqual(4);
            expect(ctrl.jaja).toHaveBeenCalledWith(2);
        });
    });


    describe('when clicking a button', function () {

        it('should display a message after API call', function () {
            //ctrl.users = userList;
            httpBackend.flush();
            
            ctrl.toggle(0);

            expect(ctrl.users[0].visible).toBe(true);
        });
    });

});
