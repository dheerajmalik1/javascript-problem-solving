var validMountainArray = function(arr) {
    
    let peakFromStartEnc = false;
    let peakFromEndEnc = false;
    let peakValues = [Infinity, Infinity];
    let j = arr.length - 1;
    for(let i = 1 ; i < arr.length  ; i++){
    
        if(arr[i-1] > arr[i] && !peakFromStartEnc){
            peakFromStartEnc = true;
            peakValues[0] = i-1;
        }
        
        if(arr[j] > arr[j-1] && !peakFromEndEnc && j>=0){
            peakFromEndEnc = true;
            peakValues[1] = j;
        }
        j = j-1;
    }
    
    if(peakValues.includes(Infinity)) {
        return false;
    }
    else if(peakValues[0] !== peakValues[1]){
      return false;  
    } 
    return true
};



console.log(validMountainArray([0,3,2,1,8]))