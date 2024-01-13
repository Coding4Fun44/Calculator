let moreNumbers = true;
let numbers = [];
let total = 0;
let sign = "";
let i = 0;

function output0() {
    if (moreNumbers === true) {
    document.getElementById("output").innerHTML = "0";
    numbers.push(0);
    }
}

function output1() {
    if (moreNumbers ===  true) {
    document.getElementById("output").innerHTML = "1";
    numbers.push(1);
    }
}

function output2() {
    if (moreNumbers === true) {
    document.getElementById("output").innerHTML = "2";
    numbers.push(2);
    }
}

function output3() {
    if (moreNumbers === true) {
    document.getElementById("output").innerHTML = "3";
    numbers.push(3);
    }
}

function output4() {
    if (moreNumbers === true) {
    document.getElementById("output").innerHTML = "4";
    numbers.push(4);
    }
}

function output5() {
    if (moreNumbers === true) {
    document.getElementById("output").innerHTML = "5";
    numbers.push(5);
    }
}

function output6() {
    if (moreNumbers === true) {
    document.getElementById("output").innerHTML = "6";
    numbers.push(6);
    }
}

function output7() {
    if (moreNumbers === true) {
    document.getElementById("output").innerHTML = "7";
    numbers.push(7);
    }
}

function output8() {
    if (moreNumbers === true) {
    document.getElementById("output").innerHTML = "8";
    numbers.push(8);
    }
}

function output9() {
    if (moreNumbers === true) {
    document.getElementById("output").innerHTML = "9";
    numbers.push(9);
    }
}

function outputplus() {
    if (moreNumbers === true) {
    document.getElementById("output").innerHTML = "+";
    sign = "+";
    }
}

function outputminus() {
    if (moreNumbers === true) {
    document.getElementById("output").innerHTML = "-";
    sign = "-";
    }
}

function outputmult() {
    if (moreNumbers === true) {
    document.getElementById("output").innerHTML = "×";
    sign = "×";
    }
}

function outputdiv() {
    if (moreNumbers === true) {
    document.getElementById("output").innerHTML = "÷";
    sign = "÷";
    }
}

function outputequals() {
    moreNumbers = false;
    document.getElementById("output").innerHTML = total.toString();
}

while (moreNumbers === true) {
    while (i<numbers.length) {
    if (sign === "×" && numbers.length >= 2) {
        if (i === 0) {
        total = numbers[i] * numbers[i+1];
        }
        else {
        total = total * numbers[i+1];
        }
        i = i + 2;
    }
    else if (sign === "÷" && numbers.length >= 2) {
        if (i === 0) {
        total = numbers[i] / numbers[i+1];
        }
        else {
        total = total / numbers[i+1];
        }
        i = i + 2;
    }
    else if (sign === "+" && numbers.length >= 2) {
        if (i === 0) {
        total = numbers[i]+ numbers[i+1];
        }
        else {
        total = total + numbers[i+1];
        }
        i = i + 2;
}
    else if (sign === "-" && numbers.length >= 2) {
        if (i === 0) {
        total = numbers[i] - numbers[i+1];
        }
        else {
        total = total - numbers[i+1];
        }
        i = i + 2;
    }
}
}
