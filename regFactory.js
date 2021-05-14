function regFactory() {
    let regContainer = {}
    let regName;
    let regObjList;

    function setReg(innerText) {
        if (regContainer[innerText] === undefined) {
            regContainer[innerText] = 0;
            regName = innerText;
        } else {
            regContainer[innerText]++;
        }
    }
    function newReg() {
        return regName;
    }
    function newContainer() {
        return regContainer;
    }

    function regList() {
        regObjList = Object.keys(regContainer)
    }

    // function selectTown(town) {
    //     if (town === "malmesbury") {

    //     } else if (town === "bellville") {

    //     } else if (town === "town") {

    //     }

    // }
    return {
        setReg,
        newReg,
        newContainer,
        regList
    }

}
// const textBox = document.querySelector(".text");
// const addBtn = document.querySelector(".btn")
// const radioBtns = document.querySelector(".radio")
// const showBtn = document.querySelector(".show")
// const selector = document.querySelector(".selector")
// const warning = document.querySelector(".warning")
// const showRegs = document.querySelector(".regs")

// let regObj;

// let regInst = regFactory()
// let regex = /^[a-zA-Z]{2}\s(\d{5}$|\d{3}$)/ /*| /^[a-zA-Z]{2}\s\d{3}$/ | /^[a-zA-Z]{2}\s\d{3}-\d{3}$/*/

// if (localStorage["registrationSet"]) {
//     regObj = JSON.parse(localStorage.getItem("registrationSet"));
// }


// addBtn.addEventListener("click", function () {
//     let regNumber = textBox.value;
//     let lowerReg = regNumber.toLowerCase();

//     //check regular expressions
//     if (regex.test(regNumber)) {
//         regInst.setReg(regNumber)

//         //check towns to be listed and set local storage
//         if (lowerReg.startsWith("ck") || lowerReg.startsWith("cy") || lowerReg.startsWith("ca")) {
//             let listItems = document.createElement("li")
//             listItems.innerHTML = regInst.newReg();

//             //check if reg already exists
//             if (regObj[listItems] === undefined) {
//                 regObj[listItems] = 0;
//                 showRegs.appendChild(listItems);
//             } else {
//                 warning.innerHTML = "Registration number already exists"
//                 setTimeout(function () { warning.innerHTML = "" }, 5000)
//             }
//             listItems.classList.add("liStyle");
//             localStorage.setItem("registrationSet", JSON.stringify(regObj))

//         } else {
//             warning.innerHTML = "Please enter registration number from towns given below."
//             setTimeout(function () { warning.innerHTML = "" }, 5000)
//         }
//     }
//     else {
//         warning.innerHTML = "Please enter valid registration number"
//         setTimeout(function () { warning.innerHTML = "" }, 5000)
//     }
//     textBox.value = "";
// })
// let regList = Object.keys(regObj);