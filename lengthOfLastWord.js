

const x = "My name is amitabh  is";
// const y = x.trim().split(" ");
// const z = y[y.length - 1]

let len = x.length - 1;
// trim first
while(len >= 0){
    if(x[len -1] == " "){
        len--
    }else {
        break;
    }
}

// count last word length
let count = 0;
while(len >= 0){
    if(x[len -1] != " "){
        len--;
        count++;
    }else{
        break;
    }
}
console.log("Last word count is: ", count);
