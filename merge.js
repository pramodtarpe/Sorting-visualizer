function merge(start,mid,end){
    for(let i=start;i<=end;i++){
        bars[i].style.backgroundColor = "orange";
    }
    var temp = [];
    let i = start;
    let j = mid + 1;
    while((i<=mid) && (j<=end)){
        let val1 = parseInt(bars[i].style.height);
        let val2 = parseInt(bars[j].style.height);
        if(val1 < val2){
            temp.push(val1);
            i++;
        }
        else{
            temp.push(val2);
            j++;
        }
    }
    while(i<=mid){
        temp.push(parseInt(bars[i++].style.height));
    }
    while(j<=end){
        temp.push(parseInt(bars[j++].style.height));
    }
    for(let i=0;i<(temp.length);i++){
        bars[i+start].style.height = temp[i] + 'px';
    }
}

const timer = ms => new Promise(res => setTimeout(res, ms))

async function mergeSort(start=0,end=bars.length-1){
    if(start >= end){
        return;
    }
    let n = bars.length;
    let mid = Math.floor((start + end) / 2);
    console.log(mid);
    async function load(){
        for(let i = 0; i < 3; i++){
            await timer(3000);
        }
    }

    load();

    mergeSort(start,mid);
    mergeSort(mid+1,end);
    merge(start,mid,end);
}

// var btn = document.getElementById('btn-sort-merge');
// btn.addEventListener("click",mergeSort);