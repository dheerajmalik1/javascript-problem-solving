var sortEvenOdd = function(nums) {
    let numsAtEvenArr = nums.filter((n,i) => i == 0|| i%2 == 0).sort((a,b)=>a-b);
    let numsAtOddArr = nums.filter((n,i) =>  i%2 !== 0).sort((a,b)=>b-a);
    let finalArr = []
let i=0,j=0;
    while(i != numsAtEvenArr.length && j!=numsAtOddArr){
        finalArr.push(numsAtEvenArr[i]);
        finalArr.push(numsAtOddArr[j]);
        i++;
        j++;
    }
    return finalArr;
    
};
console.log(sortEvenOdd([3,4,5,1,2])) 