'use strict';

const inputel=document.querySelector('#input');
const btnel=document.querySelectorAll('.btn');
const customtip=document.querySelector('#customtip');
const errorel=document.querySelector('#error');
const peopleel=document.querySelector('#people');
const totalval=document.querySelectorAll('.tipvalue');
const resetel=document.querySelector('.reset');

let billval=0;
let peopleval=1;
let tipval=0.15;

inputel.addEventListener('click',validatebill);
customtip.addEventListener('input',tipcustomva);

peopleel.addEventListener('click',setpeoplevalue);
resetel.addEventListener('click',handlereset);

btnel.forEach((btn)=>{
    btn.addEventListener('click',handleclick);
});

function handleclick(e) {
    btnel.forEach((btn)=>{
        btn.classList.remove('active');
        if(e.target.innerHtml===btn.innerHTML){
            btn.classList.add('active');
            tipval=parseFloat(btn.innerHTML)/100;
            console.log(tipval);
        }
        // console.log(e.target.innerHtml);
    });
    customtip.value='';
    calculate();
}
function validatebill() {
if (inputel.value.includes(",")) {
    inputel.value.replace(',',',');
    }
    billval=parseFloat(inputel.value)
    calculate();  
}  
function tipcustomva() {
    tipval=parseFloat(customtip/100);

    btnel.forEach((btn)=>{
        btn.classList.remove('active');
    });
    if (customtipvalue===0) {
        calculate();
    }
}
function setpeoplevalue() {
    peopleval=parseFloat(peopleel.value);
    if (peopleval<=0) {
        errorel.innerHTML='number must be greater than zero';
        setTimeout(() => {
            errorel.innerHTML='';
        }, 2000);
        calculate();
    }
    
}

function calculate() {
    if (peopleval>=1) {
        let tip =(billval=tipval)/peopleval;
        let totalAmount=(billval*(tipval*1)/peopleval);

        totalval[0].innerHTML='$'+tip.toFixed(2);
        totalval[1].innerHTML='$'+totalAmount.toFixed(2);
        }

}
function handlereset() {
    inputel.value=0.0;
    validatebill();
    peopleel.value=1;
    setpeoplevalue();
    
}

