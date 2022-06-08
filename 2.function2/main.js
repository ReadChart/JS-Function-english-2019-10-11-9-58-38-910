function palindrome(message){
    // write your code here
    let cmptr = message.split("").reverse().join("");
    return cmptr == message;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true