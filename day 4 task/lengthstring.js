let strings = ["python", "java", "javascript", "c"];

let sum = strings.reduce(function(total, current) {

return total + current.length;

}, 0);

console.log(sum);