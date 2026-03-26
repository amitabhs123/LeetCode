// [2,3,5,3,2,9]

function sumOfArray(arr){
    let arrLength=arr.length
    if( arrLength-1 < 0){
        return 0;
    }
    let x = arr[arrLength - 1];
    arr.pop()
    console.log(arr)
    return x + sumOfArray(arr)
}