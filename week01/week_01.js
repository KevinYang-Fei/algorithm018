
//1. 删除排序数组中的重复项

var removeDuplicates = function(nums) {
    var count = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i-1]) {
            nums[i-count] = nums[i];
        } else {
            count++;
        }
        
    }
    return nums.length - count;
}

//2.旋转数组
var rotate = function(nums, k){
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());       
    }
}

//3.合并两个有序列表 (没有思路)

//4.合并两个有序数组
var merge = function(nums1, m, nums2, n) {
    let len1 = m - 1;
    let len2 = n - 1;
    let len = m + n - 1;
    while (len1 >= 0 && len2 >= 0) {
        if (nums1[len1] > nums2[len2]) {
            nums1[len] = nums1[len1];
            len--;
            len1--;
        } else {
            nums1[len] = nums2[len2];
            len--;
            len2--;
        }
    }
    if (len1 <= 0) {
        nums1.splice(0,0,...nums2.slice(0,len2+1));
    }
    
}

//5.求两数之和
var twoSm = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
         let count = nums[i];
         let m = nums.indexOf(target - count);
         if ( m > -1 && nums[m] != count) {
             return [m,i];
         }
        
    }
}

//6.移动零
var moveZeroes = function(nums){
    var j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            [nums[j],nums[i]] = [nums[i],nums[j]];
            j++;
        }
        
    }
}

//7.加一
var plusOne = function(digits) {
    for (let i = digits.length-1;i >=0;i--) {
        digits[i]++;
        if (digits[i] < 10) {
            return digits;
        }else{
            digits[i] = 0;
        }

    }
    digits.unshift(1);
    return digits;
}