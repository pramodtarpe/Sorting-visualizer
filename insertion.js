var delay = function(){
    return new Promise((resolve) => {setTimeout(() => {resolve()},speed)})
}

async function fun(){
    for(let i=0;i<5;i++){
        await delay();
        console.log(i);
    }
}

async function insertionSort(){
    for(let i=1;i<bars.length;i++){

        bars[i].style.backgroundColor = "blue";
        let ii = i;
        let jj = ii-1;
        await delay();
        while(jj>=0 && (parseInt(bars[ii].style.height) < parseInt(bars[jj].style.height))){
            await delay();
            swap(bars[ii],bars[jj]);
            bars[ii].style.backgroundColor = "green";
            bars[jj].style.backgroundColor = "blue";
            jj--;
            ii--;
        }
        for(let c=0;c<=i;c++){
            bars[c].style.backgroundColor = "green";
        }
    }
}

document.getElementById("btn-sort-insertion").addEventListener("click",insertionSort);