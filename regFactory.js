function regFactory(storedRegNumbers) {
    let regContainer = storedRegNumbers;
    let regName;
    let regObjList;
    let regNumber;



    function addRegNumbers(regNumber1) {
        regNumber = regNumber1.toUpperCase();
        if (regContainer[regNumber] === undefined) {
            regContainer[regNumber] = 0;
            regName = regNumber;
        } else {
            regContainer[regNumber]++;
        }
    }

    function getRegNumber() {
        return regName;
    }

    function newContainer() {
        return regContainer
    }

    function regArrayList() {
        regObjList = Object.keys(regContainer);
        return regObjList
    }

    function filterRegNumbers(townTag) {
        if (townTag === undefined) {
            return Object.keys(regContainer);
        }

        return regArrayList().filter((reg) => reg.toUpperCase().startsWith(townTag))
    }

    return {
        getRegNumber,
        addRegNumbers,
        filterRegNumbers,
        newContainer,
        regArrayList,

    }
}

