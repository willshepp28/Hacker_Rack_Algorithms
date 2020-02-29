// Given an array , increment any duplicate values until all elements are unique


function getMinimumUniqueSum(arr) {
    // Write your code here
  
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] === arr[j] && i !== j) {
                arr[j] = arr[j] + 1;
            }
        }
    }


    return arr.reduce((a,b) => a + b, 0);
}





console.log(getMinimumUniqueSum([3,2,1,2,7]));
console.log(getMinimumUniqueSum([5,6,5]))
console.log(getMinimumUniqueSum([5,6,7,8]))