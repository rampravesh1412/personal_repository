/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 function twoSum(nums, target) {
    for( i = 0; i<nums.length; i++){
         temp = nums[i];
        for(j = temp + 1; j<nums.length; j++){
            if(nums[i] + nums[j] == target){
                console.log(nums[i] , nums[j]);
            }
        }
    }
}

let  arrr =  [3 , 2 , 4];
let key = 6;
twoSum(arrr , key);