function sumOfOddNumber(arr){
    arrLength = arr.length - 1;
    if(arr.length === 0){
        return 0;
    }
    if(arr[arrLength]%2!==0){
        return arr[arrLength] +  sumOfOddNumber(arr.slice(0, (arrLength)));
    }
    return sumOfOddNumber(arr.slice(0, (arrLength)))
}
console.log("Odd Sum:", sumOfOddNumber([5,2, 3, 1, 2, 4]));