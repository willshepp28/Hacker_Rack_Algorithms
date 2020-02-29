


// return the longest even lenght wors
// LONGEST EVEN LENGTH

// i would need to be able to break the words in the sentence up into an array
// go through all the words in the array to 
function longestEvenWord(sentence) {

    // Write your code here
    var words = sentence.split(" "); // bring the words into an array
    var largestEven = '00';

    for(let i = 0; i < words.length; i++) {
    
       if(words[i].length % 2 == 0) {
           if(!largestEven || largestEven.length < words[i].length && largestEven.length !== words[i].length){
               largestEven = words[i];
           }
       }

    }


    return largestEven;


}







// longestEvenWord("Time to write great code");

longestEvenWord(" write great");