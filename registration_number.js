const textBox = document.querySelector(".text");
const addBtn = document.querySelector(".btn")
const radioBtns = document.querySelector(".radio")
const showBtn = document.querySelector(".show")
const selector = document.querySelector(".selector")
const warning = document.querySelector(".warning")
const showRegs = document.querySelector(".regs")

let regObj;

let regInst = regFactory()

let regex = /^[a-zA-Z]{2}\s(\d{5}$|\d{3}$)/ /*| /^[a-zA-Z]{2}\s\d{3}$/ | /^[a-zA-Z]{2}\s\d{3}-\d{3}$/*/

addBtn.addEventListener("click", function () {
    let regNumber = textBox.value;
    // console.log(regNumber);
    if (regex.test(regNumber)) {
        regInst.setReg(regNumber)
        localStorage.setItem("registrationSet", JSON.stringify(regInst.newContainer()))
    }
    else {
        warning.innerHTML = "please enter valid registration number"
        setTimeout(function () { warning.innerHTML = "" }, 5000)
    }
    textBox.value = "";
})
if (localStorage["registrationSet"]) {
    regObj = JSON.parse(localStorage.getItem("registrationSet"));
}
let regList = Object.keys(regObj);

let listItems = document.createElement("li");

showBtn.addEventListener("click", function () {
    let showChecked = document.querySelector("input[name='town']:checked");
    if (showChecked) {

        let listItems = document.createElement("li")

        let regArray = [];

        for (let i = 0; i < regList.length; i++) {
            let getReg = regList[i]
            if (showChecked.value === "malmesbury") {
                if (getReg.startsWith("ck")) {
                    listItems.innerText = getReg;
                }
            } else if (showChecked.value === "bellville") {
                if (getReg.startsWith("cy")) {
                    listItems.innerText = getReg;
                }
            } else if (showChecked.value === "town") {
                if (getReg.startsWith("ca")) {
                    // regArray.push(getReg);
                    console.log(regList[i]);
                    listItems.innerText = regList[i];
                    showRegs.appendChild(listItems);
                }
            }
        }
        // for (let i = 0; i < regArray.length; i++) {
        //     listItems.innerText = regArray[i];
        // }
        // console.log(listItems);

        listItems.classList.add("liStyle");
        // showRegs.appendChild(listItems);
        showChecked.checked = false;
    } else {
        warning.innerHTML = "Please select town";
        setTimeout(function () { warning.innerHTML = "" }, 5000);
    }
})
