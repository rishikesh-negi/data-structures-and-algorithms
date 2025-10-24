// Problem: Merge Two Sorted Arrays:

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

function merge(nums1, m, nums2, n) {
  let p1 = m - 1; // Pointer for nums1
  let p2 = n - 1; // Pointer for nums2
  let p = m + n - 1; // Pointer for final merged position

  // Merge from the end
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  // If nums2 still has remaining elements
  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p--;
    p2--;
  }
}

const arr1 = [0, 2, 0, 0, 0, 0, 0];
const arr2 = [-1, -1, 2, 5, 6];

const m = 2;
const n = 5;

merge(arr1, m, arr2, n);

console.log(arr1);

// SUB-OPTIMAL SOLUTION:
// function merge(nums1, m, nums2, n) {
//   if (!nums2.length) return;
//   if (nums2.length && !nums1.length) {
//     nums1 = [...nums2];
//     return;
//   }
//   if (m === 0 && n !== 0) {
//     nums1 = [...nums2];
//     return;
//   }

//   let windowStart = 0;
//   let windowEnd = m > 0 ? m : 1;

//   for (const num of nums2) {
//     if (windowStart >= nums1.length || windowEnd > nums1.length) break;

//     for (let i = windowStart; i <= windowEnd; i++) {
//       if (i === windowEnd) {
//         nums1[i] = num;
//         windowStart = i + 1;
//         windowEnd++;
//         break;
//       }

//       if (num <= nums1[i]) {
//         for (let j = windowEnd; j >= i + 1; j--) {
//           nums1[j] = nums1[j - 1];
//         }

//         nums1[i] = num;
//         windowStart = i + 1;
//         windowEnd++;
//         break;
//       }
//     }
//   }
// }
