var minSubsequence = function(nums) {
    if(nums.length === 1) return nums;
    let allSum = 0;
    for(let i = 0 ; i < nums.length ; i++){
        allSum = allSum + nums[i];
    }
    
    let nonIncreasingOrigArr = nums.sort((a,b) => b-a);
    let arrSum = 0;
    let returnArr = [];
    for(let j = 0 ; j < nonIncreasingOrigArr.length ; j++){
        if(arrSum <= allSum -  arrSum){
            returnArr.push(nonIncreasingOrigArr[j]);
            arrSum = arrSum + nonIncreasingOrigArr[j];
        }else{
            return returnArr;
        }
       
    }
    return returnArr
};

minSubsequence([4,3,10,9,8])