var output = document.getElementById("screen");
var operatorclicked = false;
var num1 = ''; //this variable used for store number.................
var num2 = ''; //this variable used for store number operator...............
var operat = ""; //this variable used for store operator...............
disableOperbtn() //use for function call to operator button desabled in first........................
equal_disable()//use for function call to equal button disable in first........................
// this function used for get number from html...........
function myfunction(num) {
    if (operatorclicked == false) { //contion that, if opertor is not clicked yet then all num go to the num1................................
        num1 = num1 + num;
        console.log("num1:-" + num1);
        enableOperator() //use for function call to operator button enable in first........................

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
    operatorclicked = true;
    operat = operator;
    output.value += operat;
    console.log("operator" + num1 + operator + num2)
}

// function used for delete number or operator from screen.................................
function del() {
    let display = document.getElementById("screen"); //
    let value = display.value; // here value is a variable 
    value = value.slice(0, -1);// value.slice use for delete num or operator for screen one by one...................
    display.value = value;
    if (operatorclicked == false) {
        num1 = value;
        if(num1 == ""){
            disableOperbtn()
        }
        equal_disable()
        console.log("delete:-num1" + value)
    }else {
        if (num2 == "") {
            operatorclicked = false;
            console.log("delete:-operator" + operat)
            enableOperator()
            equal_disable()
        } else {
            num2 = num2.slice(0, -1);
            console.log("delete:-num2" + num2)
        }
    }
}
// this function used to clear all the element from screen.....................................
function reset() {
    display = document.getElementById("screen").value;
    output.value = "";
    num1 = output.value;
    operatorclicked = false;
    if (num1 == "") {
        disableOperbtn()
        equal_disable()
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
            equal_disable()
            break;
        case '-':
            answer = number1 - number2;
            console.log(answer)
            equal_disable();
            break;
        case '*':
            answer = number1 * number2;
            console.log(answer);
            equal_disable()
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
    enableOperator()
    num2 = '';
    operatorclicked = false
}

// this function used for operators disable ...................................
function disableOperbtn() {
    var btn = document.getElementsByClassName("operator");
    // console.log(btn);
    for (var i = 0; i < btn.length; i++) {
        btn[i].disabled = true;
        // console.log(btn[i])
    }
}

// this function used for operators button enable ...................................
function enableOperator() {
    var btn = document.getElementsByClassName("operator");
    // console.log(btn);
    for (var i = 0; i < btn.length; i++) {
        btn[i].disabled = false;
        // console.log(btn[i])
    }
}

//this function used for equal button enable .......................................
function equal_disable() {
    var answer = document.getElementById("equal");
    answer.disabled = true;
    console.log(answer.disabled)
}


//this function used for equal button enable .......................................
function equal_enable() {
    var answer = document.getElementById("equal");
    answer.disabled = false;
}
