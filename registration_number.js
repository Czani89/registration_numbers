const textBox = document.querySelector(".text");
const addBtn = document.querySelector(".btn")
const radioBtns = document.querySelector(".radio")
const showBtn = document.querySelector(".show")
const selector = document.querySelector(".selector")
const warning = document.querySelector(".warning")
const showRegs = document.querySelector(".regs")

let regObj = {};
let regArray = []

let regInst = regFactory();
let regex = /^[a-zA-Z]{2}\s(\d{5}$|\d{3}$)/;
let regEx = /^[a-zA-Z]{2}\s\d{3}(-\d{3}$|\s[a-zA-Z]{2}$)/;

if (localStorage["registrationSet"]) {
    regObj = JSON.parse(localStorage.getItem("registrationSet"));
}
let regList = Object.keys(regObj);
console.log(regList.length);


addBtn.addEventListener("click", function () {

    let regNumber = textBox.value;
    let lowerReg = regNumber.toLowerCase();
    // check regular expressions
    if (regex.test(regNumber) || regEx.test(regNumber)) {
        regInst.setReg(regNumber);
        // check towns and creating HTML tags and setting text in tags
        if (lowerReg.startsWith("ck") || lowerReg.startsWith("cy") || lowerReg.startsWith("ca")) {
            let listItems = document.createElement("span");
            listItems.innerHTML = regInst.newReg();

            localStorage.setItem("registrationSet", JSON.stringify(regInst.newContainer()));
            //check if reg number already exists and appending dynamic tags to ul
            if (regObj[regInst.newReg()] !== undefined) {
                warning.innerHTML = "Registration number already exists";
                setTimeout(function () { warning.innerHTML = "" }, 5000);
            } else {
                showRegs.appendChild(listItems);
                listItems.classList.add("liStyle");
            }
        } else {
            warning.innerHTML = "Please enter registration number from towns given below."
            setTimeout(function () { warning.innerHTML = "" }, 5000);
        }
    }
    else {
        warning.innerHTML = "Please enter valid registration number"
        setTimeout(function () { warning.innerHTML = "" }, 5000);
    }
    textBox.value = "";
})

showBtn.addEventListener("click", function () {
    let showChecked = document.querySelector("input[name='town']:checked");
    if (showChecked) {


        for (let i = 0; i < regList.length; i++) {
            let newListItems = document.createElement("span");
            console.log(newListItems);
            if (showChecked.value === "malmesbury") {

                regArray.push(regList[i].startsWith("CK"))
                console.log(newListItems.innerHTML);
                alert("molo");
                newListItems.innerHTML = regList[i];

                console.log(regArray);
            } else if (showChecked.value === "bellville") {
                regArray.push(regList[i].startsWith("CY"))
                newListItems.innerHTML = regList[i];
            } else if (showChecked.value === "town") {
                regArray.push(regList[i].startsWith("CA"))
                newListItems.innerHTML = regList[i];
            }
        }

    } else {
        warning.innerHTML = "Please select town";
        setTimeout(function () { warning.innerHTML = "" }, 5000);
    }
    showChecked.checked = false;


})

