function primeNumber(a) {
    if (a <= 1) {
        return "NO";
    }
    if (a === 2) {
        return "YES";
    }
    if (a % 2 === 0) {
        return "NO";
    }
    for (var i = 3; i <= Math.sqrt(a); i += 2) {
        if (a % i === 0) {
            return "NO";
        }
    }
    return "YES";
}
// Test cases
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
//ชนะชัย ชำนาญหมอ 660612140
