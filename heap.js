async function heapify(n,i){
    let child = i;
    let LCI = (2*i)+1;
    let RCI = (2*i)+2;
    if(LCI < n && (parseInt(bars[LCI].style.height) > parseInt(bars[child].style.height))){
        child = LCI;
    }
    if(RCI < n && (parseInt(bars[RCI].style.height) > parseInt(bars[child].style.height))){
        child = RCI;
    }
    if(child != i){
        await swap(bars[child],bars[i]);
        await heapify(n,child);
    }
    return  new Promise(resolve => {setTimeout(() => {
        resolve();
    }, speed);})
}

async function heapSort(){
    let lastchild = Math.floor(bars.length/2) -1;
    for(let i=(lastchild);i>=0;i--){
        console.log(i)
        await heapify(bars.length,i);
    }
    for(let i=bars.length-1;i>=1;i--){
        bars[i].style.backgroundColor = "green";
        await swap(bars[0],bars[i]);
        console.log(i + 'swap');
        await heapify(i,0);
        console.log(i + 'heapify');
    }
    bars[0].style.backgroundColor = "green";
}

document.getElementById("btn-sort-heap").addEventListener("click",heapSort);