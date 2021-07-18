var size = 50;
var arrcontainer = document.getElementById('bar-container');
var arr = new Array(size);

function fillBar(bar,target){
    let currH = 0;
    var interval = setInterval(function(){
        if(currH >= target){
            clearInterval(interval);
            return;
        }
        currH += target/100;
        bar.style.height = currH + 'px';
    },5)
}
function generateArray(){
    var bars = document.querySelectorAll('bar');
    arrcontainer.innerHTML = '';
    for(let i=0;i<size;i++){
        arr[i] = Math.floor(Math.random() * 500);
    }
    for(let i of arr){
        let element = document.createElement('div');
        element.classList.add("bar");
        element.style.height = "0px";
        arrcontainer.appendChild(element);
        fillBar(element,i);
    }
}
generateArray();
var btn = document.getElementById('btn-generate');
btn.addEventListener("click",generateArray);