// const textBox1 = document.querySelector(".text1");
// const addBtn1 = document.querySelector(".btn1")
// const radioBtns1 = document.querySelector(".radio1")
// const showBtn1 = document.querySelector(".show1")
// const selector1 = document.querySelector(".selector1")
// const warning1 = document.querySelector(".warning1")
// const error1 = document.querySelector(".error1")
// const displayRegElement1 = document.querySelector(".regNumbers1")
// const reset1 = document.querySelector('.reset1')
// const showAll1 = document.querySelector('.showAll1')

// const regTemplate = document.querySelector(".textTemplate").innerHTML;
// //compiled template
// let tempCompile = Handlebars.compile(regTemplate);

// //
// let storedRegNumbers1 = localStorage["registrationSet"] ? JSON.parse(localStorage.getItem("registrationSet")) : {};

// let regArray1 = []
// let regInst1 = regFactory(storedRegNumbers1);
// let regex1 = /^([a-zA-Z]{2}\s(\d{5}$|\d{3}$))|^([a-zA-Z]{2}\s\d{3}(-\d{3}$|\s\d{3}$))/;

// window.addEventListener('load', (event) => {
//     let filteredReg1 = regInst1.filterRegNumbers();
//     displayReg(filteredReg1);
// });
// addBtn1.addEventListener("click", function () {

//     let regNumber1 = textBox1.value;
//     let lowerReg1 = regNumber1.toUpperCase();
//     // check regular expressions
//     if (regex1.test(lowerReg1)) {
//         // check towns and creating HTML tags and setting text in tags
//         if (lowerReg1.startsWith("CK") || lowerReg1.startsWith("CY") || lowerReg1.startsWith("CA")) {

//             regInst1.addRegNumbers(regNumber1)
//             console.log(regInst1.addRegNumbers(regNumber1));
//             localStorage.setItem("registrationSet", JSON.stringify(regInst1.newContainer()));

//             if (localStorage["registrationSet"]) {
//                 storedRegNumbers1 = JSON.parse(localStorage.getItem("registrationSet"));
//             }
//             if (storedRegNumbers1[lowerReg1] > 0) {
//                 showErrors("Registration number already exists");
//             } else {
//                 showAllReg()
//             }
//         } else {
//             showErrors("Please enter registration number from towns given below.");
//         }
//     }
//     else {
//         showErrors("Please enter valid registration number");
//     }
//     textBox1.value = "";
// })

// showBtn1.addEventListener("click", function () {
//     displayRegElement1.innerHTML = "";
//     let showChecked1 = document.querySelector("input[name='town1']:checked");
//     if (showChecked1) {
//         let filteredReg = regInst1.filterRegNumbers(showChecked1.value)
//         displayReg(filteredReg);
//     } else {
//         showErrors("Please select town")
//     }
//     showChecked1.checked = false;
// });

// reset1.addEventListener("click", function () {
//     location.reload();
//     localStorage.clear();
// })

// showAll1.addEventListener('click', function () {
//     let showArr = Object.keys(storedRegNumbers1)
//     if (showArr.length > 0) {
//         showAllReg()
//     } else {
//         showErrors("No registration have yet been entered.")
//     }
// })

// // function createSpan() {
// //     let newSpan1 = document.createElement("span");
// //     newSpan1.classList.add("liStyle1");
// //     return newSpan1;
// // }
// function showAllReg() {
//     displayRegElement1.innerHTML = "";
//     displayReg(regInst1.regArrayList());
// }

// function displayReg(filteredReg) {
//     displayRegElement1.innerHTML = "";
//     // for (let i = 0; i < filteredReg.length; i++) {
//     //     let newSpan = createSpan();
//     //     const reg = filteredReg[i];
//     //     newSpan.innerHTML = reg;
//     //     displayRegElement.append(newSpan);
//     // }
//     displayRegElement1.innerHTML = tempCompile({ reg: filteredReg });
// }


// function showErrors(errorMessage) {
//     warning1.innerHTML = errorMessage;
//     setTimeout(function () { warning1.innerHTML = "" }, 5000);
// }
