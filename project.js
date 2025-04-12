const btnel=document.querySelectorAll('.btn')
var costip = document.getElementById('customtip')
var tips =0
var val =0

function CaptureValue(){
    val=parseInt( document.getElementById("input").value);   
}


function validateinput(input) {
    if (input.value<0) {
        input.value='';
        alert("Please enter a positive number")
    }
    
}
function CaptureTip(button){
     tips= parseInt(button.value)
}

function Cal() {
    var tip=document.getElementById('tip')
    var total=document.getElementById('total')

    var values = parseFloat(val*(tips/100));
    var totalbill = values+val;

    tip.innerHTML = `Rupee ${values}`
    total.innerHTML =`Rupee ${totalbill}`
}

function reset() {
    values=0;
    totalbill=0
    costip.value =null
     tip.innerHTML = `Rupee ${values}`
    total.innerHTML =`Rupee ${totalbill}`
}



