// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

var pivotIndex = function(nums) {
    let totalSum = 0,
   leftSum = 0;
   totalSum = nums.reduce((a, b) => a + b, 0);

 for (let i = 0; i < nums.length; i++) {
   if (totalSum - leftSum - nums[i] === leftSum) {
     return i;
   }

   leftSum += nums[i];
 }
 return -1;
}


  console.log(pivotIndex([1,7,3,6,5,6]))