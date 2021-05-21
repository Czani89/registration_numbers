describe('regexCheck', function () {
    it('Should only return true for this formats, eg: "CA 123 123"', function () {
        let regInst = regFactory()

        assert.deepEqual(regInst.regexCheck("ca 123 356"), true);
    });
    it('Should only return true for this format, eg: "CA 123"', function () {
        let regInst = regFactory()

        assert.deepEqual(regInst.regexCheck("ca 589"), true);
    });
    it('Should only return true for format as shown, eg: "CY 12345"', function () {
        let regInst = regFactory()

        assert.deepEqual(regInst.regexCheck("ca 12335"), true);
    });
    it('Should only return true for format as shown, eg: "CY 123-456"', function () {
        let regInst = regFactory()

        assert.deepEqual(regInst.regexCheck("ca 123-353"), true);
    });
    it('Should only return false for formats not shown above', function () {
        let regInst = regFactory()

        assert.deepEqual(regInst.regexCheck("ca 1353"), false);
    });

}); describe('regexCheck', function () {
    it('Should return true for numbers from the following towns, eg: "CA, CY, & CK"', function () {
        let regInst = regFactory()

        assert.deepEqual(regInst.regexCheck("ca 123 356"), true);
    });
    it('Should return true for numbers from the following towns, eg: "CA, CY, & CK"', function () {
        let regInst = regFactory()

        assert.deepEqual(regInst.regexCheck("cy 123 356"), true);
    });
    it('Should return true for numbers from the following towns, eg: "CA, CY, & CK"', function () {
        let regInst = regFactory()

        assert.deepEqual(regInst.regexCheck("ck 123 356"), true);
    });
    it('Should return error message for number not from the following towns, eg: "CA, CY, & CK"', function () {
        let regInst = regFactory()

        assert.deepEqual(regInst.regexCheck("cd 123 356"), "You've entered an incorrect registration number format!");
    });

});
describe('addRegNumbers', function () {
    it('Should add registration numbers to object', function () {
        let regInst = regFactory()
        regInst.addRegNumbers("ca 123 357");

        assert.deepEqual(regInst.newContainer(), { "CA 123 357": 0 });
    });
    it('Should should not take more than one entry of the same registration number', function () {
        let regInst = regFactory()
        regInst.addRegNumbers("Ca 123 357");
        regInst.addRegNumbers("ca 123 357");
        regInst.addRegNumbers("cy 322 357");
        regInst.addRegNumbers("ck 111 555");
        regInst.addRegNumbers("CK 111 555");


        assert.deepEqual(regInst.newContainer(), { "CA 123 357": 1, "CY 322 357": 0, "CK 111 555": 1 });
    });
    it('Should return an error message when 2 of the same registration number have been entered', function () {
        let regInst = regFactory()
        regInst.addRegNumbers("ca 123 357");
        regInst.addRegNumbers("ca 123 357");

        assert.deepEqual(regInst.regRepeatCheck("CA 123 357"), "Registration number already exists!");
    });
})
describe('filterRegNumbers', function () {
    it('Should only return registration numbers starting with "CA"', function () {
        let regInst = regFactory()

        regInst.addRegNumbers("ca 777 989")
        regInst.addRegNumbers("cy 090 989")
        regInst.addRegNumbers("cj 767 867")
        regInst.addRegNumbers("ca 989")

        assert.deepEqual(regInst.filterRegNumbers("CA"), ["CA 777 989", "CA 989"]);
    });
    it('Should only return registration numbers starting with "CK"', function () {
        let regInst = regFactory()

        regInst.addRegNumbers("ca 777 989")
        regInst.addRegNumbers("cy 090 989")
        regInst.addRegNumbers("ck 767 867")
        regInst.addRegNumbers("ca 989")
        regInst.addRegNumbers("ck 76786")
        regInst.addRegNumbers("ck 767-861")


        assert.deepEqual(regInst.filterRegNumbers("CK"), ["CK 767 867", "CK 76786", "CK 767-861"]);
    });
    it('Should only return registration numbers starting with "CY"', function () {
        let regInst = regFactory()

        regInst.addRegNumbers("cy 77989")
        regInst.addRegNumbers("cy 090 989")
        regInst.addRegNumbers("ck 767 867")
        regInst.addRegNumbers("ca 989")
        regInst.addRegNumbers("cy 716-786")
        regInst.addRegNumbers("ck 767-861")


        assert.deepEqual(regInst.filterRegNumbers("CY"), ["CY 77989", "CY 090 989", "CY 716-786"]);
    });
})


