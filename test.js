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
    it('Should add add registration numbers to object', function () {
        let regInst = regFactory()
        regInst.addRegNumbers("ca 123 356")
        assert.deepEqual(regInst.newContainer(), { "CA 123 356": 0 });
    });
})
describe('filterRegNumbers', function () {
    it('Should add add registration numbers to object', function () {
        let regInst = regFactory()

        regInst.addRegNumbers("ca 777 989")
        regInst.addRegNumbers("cy 090 989")
        regInst.addRegNumbers("cj 767 867")

        assert.deepEqual(regInst.filterRegNumbers("ca"), ["ca 777 989"]);
    });
})


