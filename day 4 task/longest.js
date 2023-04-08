let strings = ["brahmaiah", "ram", "ravi", "india","raju"];

let longestString = strings.reduce(function(longest, current) {

return current.length > longest.length ? current : longest;

}, "");




console.log(longestString);