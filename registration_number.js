const textBox = document.querySelector(".text");
const addBtn = document.querySelector(".btn")
const radioBtns = document.querySelector(".radio")
const showBtn = document.querySelector(".show")
const selector = document.querySelector(".selector")
const warning = document.querySelector(".warning")
const error = document.querySelector(".error")
const displayRegElement = document.querySelector(".regNumbers")
const reset = document.querySelector('.reset')
const showAll = document.querySelector('.showAll')

let storedRegNumbers = localStorage["registrationSet"] ? JSON.parse(localStorage.getItem("registrationSet")) : {};

let regArray = []
let regInst = regFactory(storedRegNumbers);
let regex = /^([a-zA-Z]{2}\s(\d{5}$|\d{3}$))|^([a-zA-Z]{2}\s\d{3}(-\d{3}$|\s\d{3}$))/;

window.addEventListener('load', (event) => {
    let filteredReg = regInst.filterRegNumbers();
    console.log(filteredReg);
    displayReg(filteredReg);
});
addBtn.addEventListener("click", function () {

    let regNumber = textBox.value;
    let lowerReg = regNumber.toUpperCase();
    // check regular expressions
    if (regex.test(regNumber)) {
        // check towns and creating HTML tags and setting text in tags
        if (lowerReg.startsWith("CK") || lowerReg.startsWith("CY") || lowerReg.startsWith("CA")) {

            regInst.addRegNumbers(regNumber)

            localStorage.setItem("registrationSet", JSON.stringify(regInst.newContainer()));

            if (storedRegNumbers[lowerReg] > 0) {
                showErrors("Registration number already exists");
            } else {
                showAllReg()
                showWarning("Registration number has been succefully entered.");
                setTimeout(function () { warning.innerHTML = "" }, 5000);
            }
        } else {
            showErrors("Please enter registration number from towns given below.");
        }
    }
    else {
        showErrors("Please enter valid registration number");
    }
    textBox.value = "";
})

showBtn.addEventListener("click", function () {
    displayRegElement.innerHTML = "";
    let showChecked = document.querySelector("input[name='town']:checked");
    if (showChecked) {
        let filteredReg = regInst.filterRegNumbers(showChecked.value)
        if (filteredReg.length > 0) {
            displayReg(filteredReg);
        } else {
            showWarning("No registration number for this town has been entered yet.");
            setTimeout(function () { warning.innerHTML = "" }, 5000);
        }
    } else {
        showErrors("Please select town")
    }
    showChecked.checked = false;
});

reset.addEventListener("click", function () {
    localStorage.clear();
    showWarning("Registration numbers have been succefully cleared.")
    setTimeout(function () {
        warning.innerHTML = ""
        location.reload();
    }, 5000);
})

showAll.addEventListener('click', function () {

    if (regInst.regArrayList().length > 0) {
        showAllReg()
    } else {
        showErrors("No registration have yet been entered.")
    }
})

function createSpan() {
    let newSpan = document.createElement("span");
    newSpan.classList.add("liStyle");
    return newSpan;
}
function showAllReg() {
    let spanClear = document.querySelector(".regNumbers")
    let spanChild = spanClear.children
    for (let i = (spanChild.length - 1); i >= 0; i--) {
        spanClear.removeChild(spanChild[i]);
    }
    displayReg(regInst.regArrayList())
}

function displayReg(filteredReg) {
    for (let i = 0; i < filteredReg.length; i++) {
        let newSpan = createSpan();
        const reg = filteredReg[i];
        newSpan.innerHTML = reg;
        displayRegElement.append(newSpan);
    }
}

function showErrors(errorMessage) {
    warning.innerHTML = errorMessage;
    warning.classList.remove("error")
    warning.classList.add("warn")
    setTimeout(function () { warning.innerHTML = "" }, 5000);
}

function showWarning(errorMessage) {
    warning.classList.remove("warn")
    warning.classList.add("error")
    warning.innerHTML = errorMessage;
}
// start of template reg

const textBox1 = document.querySelector(".text1");
const addBtn1 = document.querySelector(".btn1")
const radioBtns1 = document.querySelector(".radio1")
const showBtn1 = document.querySelector(".show1")
const selector1 = document.querySelector(".selector1")
const warning1 = document.querySelector(".warning1")
const error1 = document.querySelector(".error1")
const displayRegElement1 = document.querySelector(".regNumbers1")
const reset1 = document.querySelector('.reset1')
const showAll1 = document.querySelector('.showAll1')

const regTemplate = document.querySelector(".textTemplate").innerHTML;
//compiled template
let tempCompile = Handlebars.compile(regTemplate);

//
let storedRegNumbers1 = localStorage["registrationSet"] ? JSON.parse(localStorage.getItem("registrationSet")) : {};

let regArray1 = []
let regInst1 = regFactory(storedRegNumbers1);
let regex1 = /^([a-zA-Z]{2}\s(\d{5}$|\d{3}$))|^([a-zA-Z]{2}\s\d{3}(-\d{3}$|\s\d{3}$))/;

window.addEventListener('load', (event) => {
    let filteredReg1 = regInst1.filterRegNumbers();
    displayReg1(filteredReg1);
});
addBtn1.addEventListener("click", function () {

    let regNumber1 = textBox1.value;
    let lowerReg1 = regNumber1.toUpperCase();
    // check regular expressions
    if (regex1.test(lowerReg1)) {
        // check towns and creating HTML tags and setting text in tags
        if (lowerReg1.startsWith("CK") || lowerReg1.startsWith("CY") || lowerReg1.startsWith("CA")) {

            regInst1.addRegNumbers(lowerReg1)
            localStorage.setItem("registrationSet", JSON.stringify(regInst1.newContainer()));

            if (storedRegNumbers1[lowerReg1] > 0) {
                showErrors1("Registration number already exists");
            } else {
                showAllReg1()
                showWarning1("Registration number has been succefully entered.");
                setTimeout(function () { warning1.innerHTML = "" }, 5000);
            }
        } else {
            showErrors1("Please enter registration number from towns given below.");
        }
    }
    else {
        showErrors1("Please enter valid registration number");
    }
    textBox1.value = "";
})

showBtn1.addEventListener("click", function () {
    displayRegElement1.innerHTML = "";
    let showChecked1 = document.querySelector("input[name='town1']:checked");
    if (showChecked1) {
        let filteredReg = regInst1.filterRegNumbers(showChecked1.value)
        if (filteredReg.length > 0) {
            displayReg1(filteredReg)
        } else {
            showWarning1("No registration number for this town has been entered yet.")
            setTimeout(function () { warning1.innerHTML = "" }, 5000);
        }
    } else {
        showErrors1("Please select town")
    }
    showChecked1.checked = false;
});

reset1.addEventListener("click", function () {
    localStorage.clear();
    showWarning1("Registration numbers have been succefully cleared.")
    setTimeout(function () {
        warning1.innerHTML = ""
        location.reload();
    }, 5000);
})

showAll1.addEventListener('click', function () {
    if (regInst.regArrayList().length > 0) {
        showAllReg1()
    } else {
        showErrors1("No registration have yet been entered.")
    }
})

function showAllReg1() {
    displayRegElement1.innerHTML = "";
    displayReg1(regInst1.regArrayList());
}

function displayReg1(filteredReg) {
    displayRegElement1.innerHTML = "";
    displayRegElement1.innerHTML = tempCompile({ regies: filteredReg });
}

function showErrors1(errorMessage) {
    warning1.innerHTML = errorMessage;
    warning1.classList.remove("error1")
    warning1.classList.add("warn1")
    setTimeout(function () { warning1.innerHTML = "" }, 5000);
}

function showWarning1(errorMessage) {
    warning1.classList.remove("warn1")
    warning1.classList.add("error1")
    warning1.innerHTML = errorMessage;
}