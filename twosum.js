function indicesF(nums, target){
    let i=0,j=1;
        while(nums[i] + nums[j] !== target){
              
        if(nums[i] + nums[j] > 9 && j>i){
            j = j-1;
        }else if(nums[i] + nums[j] < target){
            if(j < nums.length){
                   j=j+1; 
            } 
            else if(i< j){
                i=i+1;
                // if(i == j){
                //     j=j+1;
                // }
            }
        }
    
    }
    return [i,j]
    
    }

  console.log(indicesF([2,3,4], 6))