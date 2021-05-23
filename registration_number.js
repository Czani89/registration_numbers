const textBox = document.querySelector(".text");
const addBtn = document.querySelector(".btn")
const radioBtns = document.querySelector(".radio")
const showBtn = document.querySelector(".show")
const selector = document.querySelector(".selector")
const warning = document.querySelector(".warning")
const displayRegElement = document.querySelector(".regNumbers")
const reset = document.querySelector('.reset')
const showAll = document.querySelector('.showAll')

let storedRegNumbers = localStorage["registrationSet"] ? JSON.parse(localStorage.getItem("registrationSet")) : {};

let regArray = []
let regInst = regFactory(storedRegNumbers);
let regex = /^([a-zA-Z]{2}\s(\d{5}$|\d{3}$))|^([a-zA-Z]{2}\s\d{3}(-\d{3}$|\s\d{3}$))/;

window.addEventListener('load', (event) => {
    let filteredReg = regInst.filterRegNumbers();
    displayReg(filteredReg);
});
addBtn.addEventListener("click", function () {

    let regNumber = textBox.value;
    let lowerReg = regNumber.toUpperCase();
    // check regular expressions
    if (regex.test(regNumber)) {
        // check towns and creating HTML tags and setting text in tags
        if (lowerReg.startsWith("CK") || lowerReg.startsWith("CY") || lowerReg.startsWith("CA")) {
            let newSpan = createSpan();

            regInst.addRegNumbers(regNumber)
            newSpan.innerHTML = regInst.getRegNumber();

            localStorage.setItem("registrationSet", JSON.stringify(regInst.newContainer()));

            if (localStorage["registrationSet"]) {
                storedRegNumbers = JSON.parse(localStorage.getItem("registrationSet"));
            }
            if (storedRegNumbers[lowerReg] > 0) {
                showErrors("Registration number already exists");
            } else {
                showAllReg()
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
        displayReg(filteredReg);
    } else {
        showErrors("Please select town")
    }
    showChecked.checked = false;
});

reset.addEventListener("click", function () {
    location.reload();
    localStorage.clear();
})
showAll.addEventListener('click', function () {
    showAllReg()
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
    setTimeout(function () { warning.innerHTML = "" }, 5000);
}



