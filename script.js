var size = 10;
var arrcontainer = document.getElementById('bar-container');

function fillBar(bar,target){
    let currH = 0;
    var interval = setInterval(function(){
        if(currH >= target){
            clearInterval(interval);
            return;
        }
        currH += target/100;
        bar.style.height = currH + 'px';
    },1)
}
var bars = document.getElementsByClassName('bar');
//Generate Array
function generateArray(size){
    var arr = new Array(size);
    bars = document.getElementsByClassName('bar');
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
        // element.textContent = i;
    }
}

//Swap bar 
function swap(bar1,bar2){
    let h1 = parseInt(bar1.style.height);
    let h2 = parseInt(bar2.style.height);
    bar1.style.height = h2 + 'px';
    bar2.style.height = h1 + 'px';
}


generateArray(size);
var btn = document.getElementById('btn-generate');
btn.addEventListener("click",generateArray);


var slider = document.getElementById("myRange");
slider.oninput = function() {
  generateArray(parseInt(slider.value));
}