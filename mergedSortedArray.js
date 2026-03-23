// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// function sortedArray(arr1, arr2, m, n){
//     // const arrOneLength = arr1.length;
//     // const arrTwoLength = arr2.length;
//     let finalArr = [];
    
//     for(let i=0; i<6; i++){
//         console.log('i', i, arr1.length, arr2.length)
//         if( arr2.length && arr1.length && m >= 0 && arr2[n - 1] < arr1[m-1]){
//             finalArr[m+n-1] = arr1[m-1];
//             arr1.pop();
//             m--;
//         }else if(arr2.length && arr1.length && n >=0) {
//             finalArr[m+n-1] = arr2[n - 1]
//             arr2.pop()
//             n--;
            
//         }else if( m >=0){
//             finalArr[m+n-1] = arr1[m-1];
//             m--;
//         }else if( n >=0){
//             finalArr[m+n-1] = arr1[n-1];
//             n--;
//         }
        
//     }
    
//     return finalArr;
// }

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m-1;
    let j = n-1;
    let k = m+n-1;

    while(j>=0){
        if(i>=0 && nums1[i] > nums2[j]){
            nums1[k]=nums1[i];
            i--;
        }else{
            nums1[k]=nums2[j];
            j--;
        }
        k--;
    }
    return nums1;
};

console.log(merge([ 1,2, 3,3], 4, [1, 2,5,6], 4))