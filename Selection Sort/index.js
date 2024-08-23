
function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function selectionSort(arr) {
    let n = arr.length;
    for(let i = 0; i <= n-2; i++) {
        let minIndex = i;
        for(let j = i+1; j<=n-1; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr, i, minIndex)
    }
    console.log("Sorted Array: ",  arr)
    
}

let arr = [4, 2, -9, -5, 1, 6, 3, 0];
selectionSort(arr);
