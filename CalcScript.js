let n = [];
let d = [];
let s = 0;
let total1 = '0';
let total2 = '0';
let total3 = 0;

function output(a) {
    if (total1.length <= 16) {
    if (total1.substring(total1.length - 1, total1.length) === '+' || total1.substring(total1.length - 1, total1.length) === '–' || total1.substring(total1.length - 1, total1.length) === 'x' || total1.substring(total1.length - 1, total1.length) === '÷') {
        d = [];
    }
    if (total1 === '0' || total3 != 0 || total1 === 'Invalid Syntax') {                 
        total1 = a;
        total2 = a;   
        document.getElementById("output").innerHTML = total1;
        total3 = 0;
    }
    else if ((total1.substring(total1.length-2, total1.length - 1) === '+' || total1.substring(total1.length-2, total1.length - 1) === '–' || total1.substring(total1.length-2, total1.length - 1) === 'x' || total1.substring(total1.length-2, total1.length - 1) === '÷' || total1.substring(total1.length-2, total1.length - 1) === '^' || total1.substring(total1.length-2, total1.length - 1) === '(') && total1.substring(total1.length-1, total1.length) === '0'){
        total1 = total1.substring(0,total1.length-1) + a;
        total2 = total2.substring(0,total2.length-1) + a;
        document.getElementById("output").innerHTML = total1;
    }
    else {
        total1 = total1 + a;
        total2 = total2 + a;     
        document.getElementById("output").innerHTML = total1;
        }
        n = [];
    }
}


function outputplus() {
    if (total1.length <= 16) {
if (total1.substring(total1.length-1,total1.length) != '.' && total1.substring(total1.length-1,total1.length) != '-' && total1.substring(total1.length-1, total1.length) != '^') {
    if ((total1.substring(total1.length-1,total1.length) === '+') || (total1.substring(total1.length-1,total1.length) === '–') || (total1.substring(total1.length-1,total1.length) === 'x') || (total1.substring(total1.length-1,total1.length) === '÷')) {
        total1 = total1.substring(0, total1.length-1) + '+';
        total2 = total2.substring(0, total2.length-1) + '+';   
        document.getElementById("output").innerHTML = total1;
    }
    else if ((total1.substring(total1.length-1,total1.length) === ')')) {
        total1 = total1 + '+';
        total2 = total2.substring(0, total2.length-1) + '+';   
        document.getElementById("output").innerHTML = total1;
    }
    else if ((total2.substring(total2.length-8,total2.length) === 'Math.PI*')) {
        total1 = total1 + '+';
        total2 = total2.substring(0, total2.length-1) + '+';   
        document.getElementById("output").innerHTML = total1;
    }
    else if(total2.substring(total2.length-9, total2.length) === '*Math.PI*') {
        total1 = total1 + '+';
        total2 = total2.substring(0, total2.length-1) + '+';   
        document.getElementById("output").innerHTML = total1;
        }
else { 
    total1 = total1 + '+'; 
    total2 = total2 + '+'; 
    document.getElementById("output").innerHTML = total1;
}
}
total3 = 0;
}
}

function outputminus() {
    if (total1.length <= 16) {
if (total1.substring(total1.length-1,total1.length) != '.' && total1.substring(total1.length-1,total1.length) != '-' && total1.substring(total1.length-1, total1.length) != '^') {
    if ((total1.substring(total1.length-1,total1.length) === '+') || (total1.substring(total1.length-1,total1.length) === '–') || (total1.substring(total1.length-1,total1.length) === 'x') || (total1.substring(total1.length-1,total1.length) === '÷')){
        total1 = total1.substring(0, total1.length-1) + '–';
        total2 = total2.substring(0, total2.length-1) + '-';   
        document.getElementById("output").innerHTML = total1;
    }
    else if ((total1.substring(total1.length-1,total1.length) === ')')) {
        total1 = total1 + '–';
        total2 = total2.substring(0, total2.length-1) + '-';   
        document.getElementById("output").innerHTML = total1;
    }
    else if ((total2.substring(total2.length-8,total2.length) === 'Math.PI*')) {
        total1 = total1 + '–';
        total2 = total2.substring(0, total2.length-1) + '-';   
        document.getElementById("output").innerHTML = total1;
    }
    else if(total2.substring(total2.length-9, total2.length) === '*Math.PI*') {
        total1 = total1 + '–';
        total2 = total2.substring(0, total2.length-1) + '-';   
        document.getElementById("output").innerHTML = total1;
        }
else { 
    total1 = total1 + '–'; 
    total2 = total2 + '-'; 
    document.getElementById("output").innerHTML = total1;
}
}
total3 = 0;
    }
}

function outputmult() {
    if (total1.length <= 16) {
if (total1.substring(total1.length-1,total1.length) != '.' && total1.substring(total1.length-1,total1.length) != '-' && total1.substring(total1.length-1, total1.length) != '^') {
    if ((total1.substring(total1.length-1,total1.length) === '+') || (total1.substring(total1.length-1,total1.length) === '–') || (total1.substring(total1.length-1,total1.length) === 'x') || (total1.substring(total1.length-1,total1.length) === '÷')){
        total1 = total1.substring(0, total1.length-1) + 'x';
        total2 = total2.substring(0, total2.length-1) + '*';   
        document.getElementById("output").innerHTML = total1;
    }
    else if ((total1.substring(total1.length-1,total1.length) === ')')) {
        total1 = total1 + 'x';
        document.getElementById("output").innerHTML = total1;
    }
    else if ((total2.substring(total2.length-8,total2.length) === 'Math.PI*')) {
        total1 = total1 + 'x';   
        total2 = total2.substring(0, total2.length-1) + '*';
        document.getElementById("output").innerHTML = total1;
    }
    else if(total2.substring(total2.length-9, total2.length) === '*Math.PI*') {
        total1 = total1 + 'x';
        total2 = total2.substring(0, total2.length-1) + '*';   
        document.getElementById("output").innerHTML = total1;
        }
else { 
    total1 = total1 + 'x';
    total2 = total2 + '*'; 
    document.getElementById("output").innerHTML = total1;
}
}
total3 = 0;
    }
}

function outputdiv() {
    if (total1.length <= 16) {
if (total1.substring(total1.length-1,total1.length) != '.' && total1.substring(total1.length-1,total1.length) != '-' && total1.substring(total1.length-1, total1.length) != '^') {
    if ((total1.substring(total1.length-1,total1.length) === '+') || (total1.substring(total1.length-1,total1.length) === '–') || (total1.substring(total1.length-1,total1.length) === 'x') || (total1.substring(total1.length-1,total1.length) === '÷')){
        total1 = total1.substring(0, total1.length-1) + '÷';
        total2 = total2.substring(0, total2.length-1) + '/';   
        document.getElementById("output").innerHTML = total1;
    }
    else if ((total1.substring(total1.length-1,total1.length) === ')')) {
        total1 = total1 + '÷';
        total2 = total2.substring(0, total2.length-1) + '/';   
        document.getElementById("output").innerHTML = total1;
    }
    else if ((total2.substring(total2.length-8,total2.length) === 'Math.PI*')) {
        total1 = total1 + '÷';
        total2 = total2.substring(0, total2.length-1) + '/';   
        document.getElementById("output").innerHTML = total1;
    }
    else if(total2.substring(total2.length-9, total2.length) === '*Math.PI*') {
        total1 = total1 + '÷';
        total2 = total2.substring(0, total2.length-1) + '/';   
        document.getElementById("output").innerHTML = total1;
        }
        else {
            total1 = total1 + '÷'; 
            total2 = total2 + '/'; 
            document.getElementById("output").innerHTML = total1;
        }
}
total3 = 0;
    }
}

function outputequals() {
    
    if (total1.substring(total1.length-1, total1.length) === ')') {
    total2 = total2.substring(0, total2.length-1);
    }
    if (total2.substring(total2.length-8, total2.length) === 'Math.PI*') {
        total2 = total2.substring(0, total2.length-1);
        }
    try {
         total3 = eval(total2);
    } catch (error) {
         total1 = 'Invalid Syntax';
         document.getElementById("output").innerHTML = total1;
         total1 = '0';
         total2 = '0';
         total3 = 0;
         n = [];
         d = [];  
         s = 1;
         return;      
        }
    if ((total3.toString()).includes('.')) {
        d.push('d');
    }
    if (typeof total3 === 'number') {
    document.getElementById("output").innerHTML = total3.toString();
    total1 = total3.toString();
    total2 = total3.toString();
    n = [];
    }
}

function outputclear() {
    total1 = '0';
    total2 = '0';
    total3 = 0;
    n = [];
    d = [];
    document.getElementById("output").innerHTML = total1;
}

function outputbackspace() {
if (total3 != 0 || s === 1) {
    total1 = '0';
    total2 = '0';
    total3 = 0;
    n = [];
    d = [];
    document.getElementById("output").innerHTML = total1;
}
else if (total1 != '0' && total1.length > 1) {
    if (total1.substring(total1.length - 1, total1.length) === '^') {
        total1 = total1.substring(0, total1.length - 1);
        total2 = total2.substring(0, total2.length - 2);
        document.getElementById("output").innerHTML = total1;
    }
    else if (total1.substring(total1.length - 1, total1.length) === ')') {
        total1 = total1.substring(0, total1.length - 1);
        total2 = total2.substring(0, total2.length - 2);
        document.getElementById("output").innerHTML = total1;
    }
    else if (total1.substring(total1.length - 1, total1.length) === '(') {
        total1 = total1.substring(0, total1.length - 1);
        total2 = total2.substring(0, total2.length - 2);
        document.getElementById("output").innerHTML = total1;
    }
    else if (total2.substring(total2.length - 9, total2.length) === '*Math.PI*') {
        total1 = total1.substring(0, total1.length - 1);
        total2 = total2.substring(0, total2.length - 9);
        document.getElementById("output").innerHTML = total1;
    }
    else if (total2.substring(total2.length - 8, total2.length) === 'Math.PI*') {
        total1 = total1.substring(0, total1.length - 1);
        total2 = total2.substring(0, total2.length - 8);
        document.getElementById("output").innerHTML = total1;
    }
    else if (total2.substring(total2.length - 7, total2.length) === 'Math.PI') {
        total1 = total1.substring(0, total1.length - 1);
        total2 = total2.substring(0, total2.length - 7);
        document.getElementById("output").innerHTML = total1;
    }
    else if (total1.substring(total1.length - 1, total1.length) === '.') {
        d = [];
        total1 = total1.substring(0, total1.length-1);
        total2 = total2.substring(0, total2.length-1);
        document.getElementById("output").innerHTML = total1;
    }
    else if (total2.substring(total2.length - 2, total2.length) === '*-') {
        n = [];
        total1 = total1.substring(0, total1.length-1);
        total2 = total2.substring(0, total2.length-2);
        document.getElementById("output").innerHTML = total1;
    }
    else if (total2.substring(total2.length - 1, total2.length) === '-') {
        n = [];
        total1 = total1.substring(0, total1.length-1);
        total2 = total2.substring(0, total2.length-1);
        document.getElementById("output").innerHTML = total1;
    }
    else {
    total1 = total1.substring(0, total1.length-1);
    total2 = total2.substring(0, total2.length-1);
    document.getElementById("output").innerHTML = total1;
    }
    }
    else if (total1.length === 1 && total1.substring(0, 1) != 0) {
    total1 = '0';
    total2 = '0';
    document.getElementById("output").innerHTML = total1;
    }
    total3 = 0;
}

function outputdecimal() {
    if (total1.length <= 17) {
    if (d[0] != 'd' ) {
    if (total1.substring(total1.length-1,total1.length) != '.' && total1.substring(total1.length-1,total1.length) != 'π') {
    total1 = total1 + '.'; 
    total2 = total2 + '.'; 
    d.push('d');
    document.getElementById("output").innerHTML = total1;
    total3 = 0;
    }
}
else if (total1.substring(total1.length - 1, total1.length) === '+' || total1.substring(total1.length - 1, total1.length) === '–' || total1.substring(total1.length - 1, total1.length) === 'x' || total1.substring(total1.length - 1, total1.length) === '÷' || total1.substring(total1.length - 1, total1.length) === '^' || total1.substring(total1.length - 1, total1.length) === '(' || total1.substring(total1.length - 1, total1.length) === ')') {
    total1 = total1 + '.'; 
    total2 = total2 + '.'; 
    d.push('d');
    document.getElementById("output").innerHTML = total1;
    total3 = 0;
}
}
}

function outputnegative() {
    if (total1.length <= 17) {
if (total1.substring(total1.length-1, total1.length) != '.') {
    if (total1 === '0') {
        total1 = '-';
        total2 = '-';
        n.push('n')
        document.getElementById("output").innerHTML = total1;
    }
    else if (n[0] === 'n') {
        if (total1 === '-'){
            total1 = '0';
            total2 = '0';
            document.getElementById("output").innerHTML = total1;
            n.pop();
        }
        else {
            if (total2.substring(total2.length - 2, total2.length) === '*-') {
            total1 = total1.substring(0, total1.length-1);
            total2 = total2.substring(0, total2.length-2);
            document.getElementById("output").innerHTML = total1;
            n.pop();
            }
            else {
                total1 = total1.substring(0, total1.length-1);
                total2 = total2.substring(0, total2.length-1);
                document.getElementById("output").innerHTML = total1;
                n.pop();
            }
        }
    }
    else if ((total1.substring(total1.length-1, total1.length) === '0') || (total1.substring(total1.length-1, total1.length) === '1') || (total1.substring(total1.length-1, total1.length) === '2') || (total1.substring(total1.length-1, total1.length) === '3') || (total1.substring(total1.length-1, total1.length) === '4') || (total1.substring(total1.length-1, total1.length) === '5') || (total1.substring(total1.length-1, total1.length) === '6') || (total1.substring(total1.length-1, total1.length) === '7') || (total1.substring(total1.length-1, total1.length) === '8') || (total1.substring(total1.length-1, total1.length) === '9')) {
        n.push('n')
        total1 = total1 + '-';
        total2 = total2 + '*-'; 
        document.getElementById("output").innerHTML = total1;
    }
    else {
        n.push('n')
        total1 = total1 + '-';
        total2 = total2 + '-'; 
        document.getElementById("output").innerHTML = total1;
    } 
}
total3 = 0;
}
}

function outputexponent() {
    if (total1.length <= 16) {
    if (total1.substring(total1.length-1, total1.length) != '^' && total1.substring(total1.length-1, total1.length) != '.' && total1.substring(total1.length-1, total1.length) != '-' && total1.substring(total1.length-1, total1.length) != '(' && total1.substring(total1.length - 1, total1.length) != '+' && total1.substring(total1.length - 1, total1.length) != '–' && total1.substring(total1.length - 1, total1.length) != 'x' && total1.substring(total1.length - 1, total1.length) != '÷') {
        if (total1.substring(total1.length-1, total1.length) === ')') {
            total1 = total1 + '^';
            total2 = total2.substring(0, total1.length-1) + '**';
            document.getElementById("output").innerHTML = total1;
        }
        else if (total2.substring(total2.length-8, total2.length) === 'Math.PI*') {
        total1 = total1 + '^';
        total2 = total2.substring(0, total2.length-1) + '**';   
        document.getElementById("output").innerHTML = total1;
        }
        else if (total2.substring(total2.length-9, total2.length) === '*Math.PI*') {
        total1 = total1 + '^';
        total2 = total2.substring(0, total2.length-1) + '**';   
        document.getElementById("output").innerHTML = total1;
        }
        else {
        total1 = total1 + '^';
        total2 = total2 + '**';
        document.getElementById("output").innerHTML = total1;
        }
        n = [];
    }
    total3 = 0;
}
}

function outputpi() {
    if (total1.length <= 16) {
if (total1.substring(total1.length - 1, total1.length) != '.') {
    if (total1 === '0') {                 
        total1 = 'π';
        total2 = 'Math.PI*';   
        document.getElementById("output").innerHTML = total1;
    }
    else if ((total1.substring(total1.length-1, total1.length) === '0') || (total1.substring(total1.length-1, total1.length) === '1') || (total1.substring(total1.length-1, total1.length) === '2') || (total1.substring(total1.length-1, total1.length) === '3') || (total1.substring(total1.length-1, total1.length) === '4') || (total1.substring(total1.length-1, total1.length) === '5') || (total1.substring(total1.length-1, total1.length) === '6') || (total1.substring(total1.length-1, total1.length) === '7') || (total1.substring(total1.length-1, total1.length) === '8') || (total1.substring(total1.length-1, total1.length) === '9')) {
        total1 = total1 + 'π';
        total2 = total2 + '*Math.PI*';   
        document.getElementById("output").innerHTML = total1;
    }
    else if ((total1.substring(total1.length-1, total1.length) === ')') || (total1.substring(total1.length-1, total1.length) === '+') || (total1.substring(total1.length-1, total1.length) === '-') || (total1.substring(total1.length-1, total1.length) === 'x') || (total1.substring(total1.length-1, total1.length) === '÷')) {
        total1 = total1 + 'π';
        total2 = total2 + 'Math.PI*';   
        document.getElementById("output").innerHTML = total1;
    }
    else if ((total2.substring(total2.length-8, total1.length) === 'Math.PI*') || (total2.substring(total2.length-9, total1.length) === '*Math.PI*')) {
        total1 = total1 + 'π';
        total2 = total2.substring(0, total2.length - 1) + '*Math.PI*';   
        document.getElementById("output").innerHTML = total1;
    }
    else {
        total1 = total1 + 'π'; 
        total2 = total2 + 'Math.PI*';  
        document.getElementById("output").innerHTML = total1;
        }
        n = [];
    }
    total3 = 0;
}
}

function outputleftp() {
    if (total1.length <= 16) {
    if (total1 === '0') {
        total1 = '(';
        total2 = '(';
        document.getElementById("output").innerHTML = total1;
    }
    else if (total1.substring(total1.length-1, total1.length) != '.') {
        if ((total1.substring(total1.length-1, total1.length) === '0') || (total1.substring(total1.length-1, total1.length) === '1') || (total1.substring(total1.length-1, total1.length) === '2') || (total1.substring(total1.length-1, total1.length) === '3') || (total1.substring(total1.length-1, total1.length) === '4') || (total1.substring(total1.length-1, total1.length) === '5') || (total1.substring(total1.length-1, total1.length) === '6') || (total1.substring(total1.length-1, total1.length) === '7') || (total1.substring(total1.length-1, total1.length) === '8') || (total1.substring(total1.length-1, total1.length) === '9')) {
        total1 = total1 + '(';
        total2 = total2 + '*(';
        document.getElementById("output").innerHTML = total1;
        }
        else {
        total1 = total1 + '(';
        total2 = total2 + '(';
        document.getElementById("output").innerHTML = total1;
        }
    }
    n = [];
    total3 = 0;
}
}

function outputrightp() {
    if (total1.length <= 16) {
if (total1 != '0') {
    if(total1.substring(total1.length-1, total1.length) != '.' && total1.substring(total1.length-1, total1.length) != '^') {
        total1 = total1 + ')';
        total2 = total2 + ')*';
        document.getElementById("output").innerHTML = total1;
    }
    n = [];
}
total3 = 0;
}
}

function outputpercent() {
    if (total1.substring(total1.length-1, total1.length) === ')') {
        total2 = total2.substring(0, total2.length-1);
    }
    total3 = eval(total2);
    total3 = total3 / 100;
    document.getElementById("output").innerHTML = total3.toString();
    if ((total3.toString()).includes('.')) {
        d.push('d');
    }
    total1 = total3.toString();
    total2 = total3.toString();
}
