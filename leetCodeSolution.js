// Longest Palindromic Substring
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

const s = "babadabshnaasdfghjkllkjhgfdsaytut"
const changeInArr = s.split("")
// console.log(changeInArr)
const final = []
changeInArr.forEach((v, i) => {
    // console.log(v, i)
    // let count = 0
    changeInArr.forEach((x, y) => {
        // console.log(x, y)
        if(v === changeInArr[y+1]){
            const data = changeInArr.slice(i, y+2)
            if (JSON.stringify(data.reverse()) === JSON.stringify(changeInArr.slice(i, y+2)) && changeInArr.slice(i, y+2).length > 1) {
                final.push(changeInArr.slice(i, y+2))
            }
            
        }
    })
})
console.log(final)
console.log("Welcome to Programiz!");
