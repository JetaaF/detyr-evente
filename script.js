let pl = document.getElementById('plus')
let mis = document.getElementById('minus')
let ris = document.getElementById('reset')
let pll = document.getElementById('plusdh')
let miss = document.getElementById('minusdh')
let number = document.getElementById('numr')

let count = 0
function rrite(){ 
    count = count + 1;
    number.textContent = count;
}
function ule(){ 
    count = count - 1;
    number.textContent = count;
}
function reser(){ 
    count = 0;
    number.textContent = count;
}
function rritedh(){ 
    count = count + 10;
    number.textContent = count;
}
function uledh(){ 
    count = count - 10;
    number.textContent = count;
}
 pl.addEventListener('click',rrite)
 pll.addEventListener('click',rritedh)
 mis.addEventListener('click',ule)
 miss.addEventListener('click',uledh)
 ris.addEventListener('click',reser)