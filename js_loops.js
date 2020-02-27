/**
 * 
 * Objective

    In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.

    Task

    Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, , consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:

    First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
    Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .
    Input Format

    Locked stub code in the editor reads string  from stdin and passes it to the function.

    Output Format

    First, print each vowel in  on a new line (in the same order as they appeared in ). Second, print each consonant (i.e., non-vowel) in  on a new line (in the same order as they appeared in ).
 */





/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var words = Array.from(s);
    var consonant = [];


   for(let i = 0; i < words.length; i++) {
        if(words[i] === "a" || words[i] ===  "e" || words[i] ===  "i" || words[i] ===  "o" || words[i] ===  "u") {
            console.log(words[i])
        } else {
            consonant.push(words[i]);
        }
   }

   for(let j = 0; j < consonant.length; j++) {
       console.log(consonant[j])
}
  
}




vowelsAndConsonants("javascriptloops");