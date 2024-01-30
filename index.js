let x="";
let y="";
let operator="";

let numbers=document.querySelectorAll(".number");
let result=document.querySelector("#result");
let operators_button=document.querySelectorAll(".operator");
let display=document.querySelector("#display");
let clear=document.querySelector("#AC");
let decimal=document.querySelector("#decimal");

numbers.forEach(number=>{
    number.addEventListener("click",()=>{
        if(operator==""){
            x=x+number.textContent;
            display.textContent=x;
        }
        else{
            y=y+number.textContent;
            display.textContent=y;
        }
})})

operators_button.forEach(operator_button=>{
    operator_button.addEventListener("click",()=>{
        if(operator==""){
            operator=operator_button.textContent;
        }
        else{
            get_result();
            operator=operator_button.textContent;
        }
})})

decimal.addEventListener("click",()=>{
    if(y.length==0){
        if(x.includes(".")){
            return;
        }
        else{
            x+=decimal.textContent;
        }
    }
    else if(y.length>0){
        if(y.includes(".")){
            return;
        }
        else{
            y+=decimal.textContent;
        }
    }
})

result.addEventListener("click",()=>{
    get_result();
})

clear.addEventListener("click",()=>{
    x="";
    y="";
    operator="";
    display.textContent="0";
})

function add(x,y){
    return(x+y);
}

function subtract(x,y){
    return(x-y);
}

function multiply(x,y){
    return(x*y);
}

function divide(x,y){
    return(x/y);
}

function modulus(x,y){
    return(x%y);
}

function operate(x,y,operator){
    if(operator=="+"){
        return add(x,y);
    }
    else if(operator=="-"){
        return subtract(x,y);
    }
    else if(operator=="*"){
        return multiply(x,y);
    }
    else if(operator=="/"){
        return divide(x,y);
    }
    else if(operator=="%"){
        return modulus(x,y)
    }
}

function get_result(){
    if(y.length===0 && operator.length===0){
        console.log("Hello")
        display.textContent=x;
        return success;
    }
    x=Number(x);
    console.log(x);
    console.log(y);
    console.log(operator);
    y=Number(y);
    if(y===0 && operator==="/"){
        display.textContent="Dont divide by zero";
        x="";
        y="";
        operator="";
        return "success";
    }
    display.textContent=String((Math.round(operate(x,y,operator)*100))/100);
    x=String((Math.round(operate(x,y,operator)*100))/100);
    y="";
    operator="";
    console.log(x,y,operator);
    return "success";
}

window.addEventListener("keyup",(e)=>console.log(e.keyCode));