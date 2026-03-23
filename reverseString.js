// Earlier approach

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    midElementNode = s.length % 2 ? Math.round(s.length / 2) : ((s.length / 2) -1);
    for(let i =0; i< s.length; i++){
        if(i < midElementNode){
        if(s[i] != s[s.length - 1 - i]){
            let temp;
            temp=s[i];
            s[i] = s[s.length - 1 - i];
            s[s.length - 1 - i]=temp;
        }else {
            return;
        }
        }
    }
};


// Time Complexity: O(n)
// Space Complexity: O(1)

// ************************************************************************************************************************************************************************

// Optimal approach

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    while(left < right){
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }
};

// Time Complexity: O(n/2) → O(n)
// Space Complexity: O(1)