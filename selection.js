async function selectionSort(){
    for(let i=0;i<bars.length;i++){
        bars[i].style.backgroundColor = "blue";
        var min_index = i;
        let val1 = parseInt(bars[i].style.height);
        for(let j=i+1;j<bars.length;j++){
            bars[j].style.backgroundColor = "orange";
            await new Promise((resolve) =>
                setTimeout(() => {
                resolve();
                }, speed)
            );
            let val2 = parseInt(bars[j].style.height);
            if(val2 < val1){
                if(min_index != i){
                    bars[min_index].style.backgroundColor = "red";
                }
                min_index = j;
                val1 = val2;
            }

            bars[j].style.backgroundColor = "red";
            bars[min_index].style.backgroundColor = "blue";
        }
        if(i != min_index){
            swap(bars[i],bars[min_index]);
            bars[min_index].style.backgroundColor = "red";
        }
        await new Promise((resolve) =>
            setTimeout(() => {
            resolve();
            }, speed)
        );
        bars[i].style.backgroundColor = "green";
    }
}

var btn = document.getElementById('btn-sort-selection');
btn.addEventListener("click",selectionSort);