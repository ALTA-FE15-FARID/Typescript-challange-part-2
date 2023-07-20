//Pair with Target Sum

function findPairWithTargetSum(arr: number[], target: number): number[] | null {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return null;
  }
  
  // Test cases
  console.log(findPairWithTargetSum([1, 2, 3, 4, 6], 6)); // Output: [1, 3]
  console.log(findPairWithTargetSum([2, 5, 9, 11], 11)); // Output: [0, 2]
  