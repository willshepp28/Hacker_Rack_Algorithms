
/**
 * 
    FIZZBUZZ CHALLENGE LOL
 */


 
function fizzBuzz(n) {
    // Write your code here
    for(let i = 1; i <= n; i++) {

        if(i % 3 === 0 && i% 5 !== 0){
            console.log("Fizz")
        } else if(i % 5 === 0 && i % 3 !== 0){
            console.log("Buzz")
        } else if(i % 5 === 0 && i % 3 === 0) {
            console.log("FizzBuzz")
        } else {
            console.log(i)
        }
    }
};





// TEST
fizzBuzz(10);
fizzBuzz(15);
fizzBuzz(50);

