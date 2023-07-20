// Maximum Sum SubArray of Size K

function findMaxSumSubarray(arr: number[], k: number): number {
    if (k <= 0 || k > arr.length) {
      throw new Error("Invalid value of 'k'.");
    }
  
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
      windowSum += arr[i];
    }
  
    let maxSum = windowSum;
  
    for (let i = k; i < arr.length; i++) {
      windowSum += arr[i] - arr[i - k];
      maxSum = Math.max(maxSum, windowSum);
    }
  
    return maxSum;
  }
  
  // Test cases
  console.log(findMaxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Output: 9
  console.log(findMaxSumSubarray([2, 3, 4, 1, 5], 2));    // Output: 7
  