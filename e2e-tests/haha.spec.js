describe('App E2E tests', function () {
    beforeEach(function () {
        browser.get('/');
    });


    describe('When visiting the page', function () {
         //element.all(by.className('btn-primary')).click();
        // console.log(bu);
        //var hhh = element.all(by.className('has-error')).count().then(x=>console.log(x));

        // var questionList = element.all(by.className('has-error'));
        // console.log(questionList.count());
        it('page should have a title', function () {
            //console.log(browser.getLocationAbsUrl())
            var jaja = element.all(by.css('label')).first().getText();

            expect(jaja).toBe('Name');
            expect(browser.getLocationAbsUrl()).toMatch("/userData");
        });
    });

    describe('When clicking the submit button without entering any data', () => {

        it('should be 3 invalid fields', () => {

            //browser.sleep(500);
            element.all(by.className('btn-primary')).click();

            expect(element.all(by.className('has-error')).count()).toBe(3);
        });
    });
});