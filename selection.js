async function selectionSort(){
    for(let i=0;i<bars.length;i++){
        bars[i].style.backgroundColor = "blue";
        var min_index = i;
        let val1 = parseInt(bars[i].style.height);
        for(let j=i+1;j<bars.length;j++){
            bars[j].style.backgroundColor = "orange";
            await delay();
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
            await delay();
        }
        bars[i].style.backgroundColor = "green";
    }
}

document.getElementById('btn-sort-selection').addEventListener("click",selectionSort);