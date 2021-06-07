function regFactory(storedRegNumbers) {
    let regContainer = storedRegNumbers;
    let regName;
    let regObjList;
    let regNumber;
    let regex1 = /^(C(A|Y|K)\s(\d{5}$|\d{3}$))|^(C(A|Y|K)\s\d{3}(-\d{3}$|\s\d{3}$))/;
    function addRegNumbers(regNumber1) {
        regNumber = regNumber1.toUpperCase();
        if (regex1.test(regNumber)) {
            if (regContainer[regNumber] === undefined) {
                regContainer[regNumber] = 0;
                regName = regNumber;
            } else {
                regContainer[regNumber]++;
            }
            return regex1
        }
    }

    function getRegNumber() {
        console.log(regContainer);
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

