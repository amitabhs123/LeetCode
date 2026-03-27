function isNumberIsPowOfTwo(x){
    if(x > 1){
        return isNumberIsPowOfTwo(x/2)
    }else if(x === 1){
        return true;
    }
    return false 
}
console.log("Is Power of Two:", isNumberIsPowOfTwo(512));