function alphabetSort(message){
    // write your code here
    return message.split("")
        .sort(
            (prior, next) => {return prior.charCodeAt(0) - next.charCodeAt(0)}
        ).join("");
}
alphabetSort('hello'); // should return 'ehllo'