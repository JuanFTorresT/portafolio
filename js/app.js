let numberhtml = document.getElementById("numberhtml");
let counterhtml = 0;

setInterval(()=>{
    if (counterhtml == 65) {
        clearInterval
    }else{
        counterhtml += 1;
        numberhtml.innerHTML = `${counterhtml}%`;
    }

},30)

let numbercss = document.getElementById("numbercss");
let countercss= 0;

setInterval(()=>{
    if (countercss == 100) {
        clearInterval
    }else{
        countercss += 1;
        numbercss.innerHTML = `${countercss}%`;
    }

},20)

let numberhtmlcel = document.getElementById("numberhtmlcel");
let counterhtmlcel = 0;

setInterval(()=>{
    if (counterhtmlcel == 30) {
        clearInterval
    }else{
        counterhtmlcel += 1;
        numberhtmlcel.innerHTML = `${counterhtmlcel}%`;
    }

},65)