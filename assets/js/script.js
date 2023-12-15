const horas= document.getElementById('horas');
const minutos= document.getElementById('minutos');
const segundos= document.getElementById('segundos');

const relogio= setInterval(function time(){
    let dateToday = new Date();
    let hr= dateToday.getHours();
    let mn= dateToday.getMinutes();
    let sc= dateToday.getSeconds();
// Relogio digital
    if(hr<10){
        hr = '0' + hr;
    }
    if(mn<10){
        mn = '0' + mn;
    }
    if(sc<10){
        sc = '0' + sc;
    }
    horas.textContent = hr;
    minutos.textContent = mn;
    segundos.textContent = sc;

    //Relógio Analógico
    hrValue = (hr * 30) + (mn * 6)/12;
    mnValue = mn * 6;
    scValue = sc * 6;

    document.querySelector(".hr-hand").style.transform = 
    "rotate(" + hrValue + "deg)";
   
    document.querySelector(".min-hand").style.transform = 
    "rotate(" + mnValue + "deg)";
  
    document.querySelector(".sec-hand").style.transform = 
    "rotate(" + scValue + "deg)";


})