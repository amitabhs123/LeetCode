obj1 = {a: 5, b: {c: 4, d:5}}
obj2 = {b: {c: {h: 7}}}

function mergeObjects(obj1, obj2){
    let mergedObj = {...obj1};
    for(let key in obj2){
        if(key in obj1 && typeof obj2[key] === 'object' ){
            mergedObj[key] = mergeObjects(obj1[key], obj2[key])
        }else{
            mergedObj[key] = obj2[key]
        }
    }
    return mergedObj;
}