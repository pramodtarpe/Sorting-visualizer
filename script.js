var delay = function(){
    return new Promise((resolve) => {setTimeout(() => {resolve()},speed)})
}
var size = 10;
var speed = 300;
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
function generateArray(){
    var arr = new Array(size);
    bars = document.getElementsByClassName('bar');
    arrcontainer.innerHTML = '';
    for(let i=0;i<size;i++){
        arr[i] = Math.floor(Math.random() * 500);
        if(arr[i] <= 10){
            arr[i] = 10 + i;
        }
    }
    for(let i of arr){
        let element = document.createElement('div');
        element.classList.add("bar");
        element.style.height = i + "px";
        arrcontainer.appendChild(element);
        element.addEventListener("mouseenter",function(){document.getElementById('bar-value').textContent = parseInt(this.style.height)});
        element.addEventListener("mouseleave",function(){document.getElementById('bar-value').textContent = '--'});
        // fillBar(element,i);
    }
}

//Swap bar 
async function swap(bar1,bar2){
    let h1 = parseInt(bar1.style.height);
    let h2 = parseInt(bar2.style.height);
    bar1.style.height = h2 + 'px';
    bar2.style.height = h1 + 'px';
}


generateArray(size);
var btn = document.getElementById('btn-generate');
btn.addEventListener("click",generateArray,size);
//slider for size of array
var slider = document.getElementById("myRange");
slider.oninput = function() {
    size = parseInt(slider.value);
    generateArray();
}
//slider for speed of sorting
var speedSlider = document.getElementById("mySpeed");
speedSlider.oninput = function() {
    speed = -1 * parseInt(speedSlider.value);
}