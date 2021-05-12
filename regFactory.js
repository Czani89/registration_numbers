function regFactory() {
    let regContainer = {}

    function setReg(innerText) {
        if (regContainer[innerText] === undefined) {
            regContainer[innerText] = 0;
        } else {
            regContainer[innerText]++;
        }
    }

    function newContainer() {
        return regContainer;
    }

    // function selectTown(town) {
    //     if (town === "malmesbury") {

    //     } else if (town === "bellville") {

    //     } else if (town === "town") {

    //     }

    // }
    return {
        setReg,
        newContainer
    }

}