const twoSum = (nums, target) => {
    for (let i = 0; i <= nums.length; i++) {
        for (let n = 0; n <= nums.length; n++) {
            if (i !== n && nums[i] + nums[n] == target) {
                return [n, i]
            }
        }
    } 
};