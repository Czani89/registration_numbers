function regFactory() {
    let regContainer;
    let regName;
    let regObjList;
    let regNumber;
    let townArray
 

    let regex = /^([a-zA-Z]{2}\s(\d{5}$|\d{3}$))|^([a-zA-Z]{2}\s\d{3}(-\d{3}$|\s\d{3}$))/;

    function regexCheck(regEntered) {
        let reg = regEntered.toUpperCase()
        if (reg.startsWith("CK") || reg.startsWith("CY") || reg.startsWith("CA")) {
            let regCheck = regex.test(reg)
            return regCheck
        } else {
            return "You've entered an incorrect registration number format!"
        }
    }

    function addRegNumbers(regNumber1) {
        regNumber = regNumber1.toUpperCase();
        if (regContainer[regNumber] === "undefined") {
            regName = regNumber;
            regContainer[regNumber] = 0;
            return regContainer
        } else {
            regContainer[regNumber]++;
            return "Registration number already exists!"
        }
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
        townArray = regArrayList().filter((reg) => reg.toUpperCase().startsWith(townTag))

        return townArray
    }

    return {
        regexCheck,
        addRegNumbers,
        filterRegNumbers,
        newContainer,
        regArrayList,
        regexCheck
    }
}

