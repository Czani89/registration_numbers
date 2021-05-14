const textBox = document.querySelector(".text");
const addBtn = document.querySelector(".btn")
const radioBtns = document.querySelector(".radio")
const showBtn = document.querySelector(".show")
const selector = document.querySelector(".selector")
const warning = document.querySelector(".warning")
const showRegs = document.querySelector(".regs")
const newSpan = document.querySelector(".regNumbers")

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
            console.log(showChecked.value);
            console.log(regList[i]);
            if (showChecked.value === "malmesbury" && regList[i].startsWith("ck")) {
                // console.log(regList);
                // alert("aa")
                regArray.push(regList[i]);
                console.log(regArray);
                console.log(newListItems.innerHTML);
                newListItems.innerHTML = regList[i];
                showRegs.appendChild(newListItems.innerHTML)
                // console.log(regArray[i]);
            } else if (showChecked.value === "bellville" && regList[i].startsWith("cy")) {
                regArray.push(regList[i].startsWith("CY"))
                newListItems.innerHTML = regList[i];
                showRegs.appendChild(newListItems.innerHTML)
            } else if (showChecked.value === "town" && regList[i].startsWith("ca")) {
                regArray.push(regList[i].startsWith("CA"))
                newListItems.innerHTML = regList[i];
                newSpan.appendChild(newListItems.innerHTML)
            }
        }

    } else {
        warning.innerHTML = "Please select town";
        setTimeout(function () { warning.innerHTML = "" }, 5000);
    }
    showChecked.checked = false;


})

