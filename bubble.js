async function bubbleSort(){
    for(let i=0;i<bars.length;i++){
        for(let j=0;j<bars.length-1-i;j++){
            bars[j].style.backgroundColor = "orange";
            bars[j+1].style.backgroundColor = "orange";
            await new Promise((resolve) =>
                setTimeout(() => {
                resolve();
                }, 300)
            );
            let val1 = parseInt(bars[j].style.height);
            let val2 = parseInt(bars[j+1].style.height);

            if(val1 > val2){
                swap(bars[j],bars[j+1]);
            }
            await new Promise((resolve) =>
                setTimeout(() => {
                resolve();
                }, 300)
            );
            bars[j].style.backgroundColor = "red";
            bars[j+1].style.backgroundColor = "red";
        }
        bars[bars.length-i-1].style.backgroundColor = "green";
    }
}

var btn = document.getElementById('btn-sort');
btn.addEventListener("click",bubbleSort);