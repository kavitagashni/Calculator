
var output = document.getElementById("screen");
var operetorclicked = false;
var num1 = ''; //this variable used for store number.................
var num2 = ''; //this variable used for store number...............
var operat = ""; //this variable used for store operator...............
disableOperbtn() //use for function call to operator button desabled in first........................
equal_desable()//use for function call to equal button disable in first........................
// this function used for get number from html...........
function myfunction(num) {
    if (operetorclicked == false) { //contion that, if opertor is not clicked yet then all num go to the num1................................
        num1 = num1 + num; 
        console.log("num1:-" + num1);
        enablebtn() //use for function call to operator button enable in first........................
    
    } else {    //contion that, if opertor is clicked then all num go to the num2...............................
        num2 += num;   
        console.log("num2:-" + num2)
        equal_enable()
    }
    output.value += num;  // show num in screen.....................

}
//this function used for store all opertors........................
function operatorclick(operator) {
    disableOperbtn()
    operetorclicked = true;
    operat = operator;
    output.value += operat;
    console.log("operator" + num1 + operator + num2)
}

// function used for delete number or operator from screen.................................
function del() {
    if(num=''){
        equal_disable()
        disableOperbtn()   
    }
    let display = document.getElementById("screen"); //
    let value = display.value; // here value is a variable 
    value = value.slice(0, -1);// value.slice use for delete num or operator for screen one by one...................
    display.value = value;
    if (operetorclicked == false) {
        num1 = value;
        console.log("delete:-num 1" + num1)
        enablebtn()
    }else {
        if (num2 == "") {
            operetorclicked = false;
            console.log("delete:-operator" + operat)
            enablebtn()
            equal_desable()
        } else {
            num2 = num2.slice(0, -1);
            disableOperbtn()
            console.log("delete:-num2" + num2)
        }
    }
}
// this function used to clear all the element from screen.....................................
function reset() {
    display = document.getElementById("screen").value;
    output.value = "";
    num1 = output.value;
    operetorclicked = false;
    if (num1 == "") {
        disableOperbtn()
        equal_desable() 
    }

}
// this function used for operation between the number and get output...................................
function totle() {
    var number1 = parseFloat(num1);
    var number2 = parseFloat(num2);
    var answer = ''; // this is variable............
    switch (operat) {
        case '+':
            answer = number1 + number2;
            console.log(answer);
            equal_desable() 
            break;
        case '-':
            answer = number1 - number2;
            console.log(answer)
            equal_desable() ;
            break;
        case '*':
            answer = number1 * number2;
            console.log(answer);
            equal_desable() 
            break;
        case '/':
            answer = number1 / number2;
            if (num2 == 0) {
                alert("Cannot be Divided by 0")
                answer = "0";
            }
            console.log(answer);
            break;
        default:
            console.log('Invalid operator');
            break;
    }
    output.value = answer;

    console.log("answer:-" + answer);
    num1 = answer; // 
    enablebtn()
    num2 = '';
    operetorclicked = false
}

// this function used for operators disable ...................................
function disableOperbtn() {   
    var btn = document.getElementsByClassName("operator");
    console.log(btn);
        for (var i = 0; i < btn.length; i++) {
            btn[i].disabled = true;
            console.log(btn[i])
        }
    }

// this function used for operators button enable ...................................
function enablebtn() {    
var btn = document.getElementsByClassName("operator");
console.log(btn);
    for (var i = 0; i < btn.length; i++) {
        btn[i].disabled = false;
        console.log(btn[i])
    }
}

//this function used for equal button enable .......................................
function equal_desable() {
    var answer = document.getElementById("equal");
    answer.disabled = true;
    console.log(answer.disabled)
}


//this function used for equal button enable .......................................
function equal_enable() {
    var answer = document.getElementById("equal");
    answer.disabled = false;
}

// function delbtn_disable(){
//     var clear = document.getElementById("delete");
//     clear.disabled = true;
// }

// function delbtn_enable(){
//     var clear = document.getElementById("delete");
//     clear.enable= true;
// }