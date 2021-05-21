function regFactory() {
    let regContainer = {};

    let regNumber = "";



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
        if (regContainer[regNumber] === undefined) {
            regContainer[regNumber] = 0;
        } else {
            regContainer[regNumber]++;
        }
    }

    function regRepeatCheck(regNumber1) {
        regNumber = regNumber1.toUpperCase();
        if (regContainer[regNumber] > 0) {
            return "Registration number already exists!"
        }
    }

    function newContainer() {
        return regContainer
    }

    function regArrayList() {
        return Object.keys(regContainer);
    }

    function filterRegNumbers(townTag) {
        if (townTag === undefined) {

            return Object.keys(regContainer);
        }
        return regArrayList().filter((reg) => reg.toUpperCase().startsWith(townTag))
    }

    return {
        regexCheck,
        addRegNumbers,
        filterRegNumbers,
        newContainer,
        regArrayList,
        regexCheck,
        regRepeatCheck
    }
}

