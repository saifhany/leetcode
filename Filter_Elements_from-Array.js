// link of question: https://leetcode.com/problems/filter-elements-from-array/description/
// Level: Easy

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = function(arr, fn) {
    let res = []
    for (element of arr){
    if(fn(element,arr.indexOf(element))){
    res.push(element)
    }
    }
    return res
};