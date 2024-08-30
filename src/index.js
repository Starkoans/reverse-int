module.exports = function reverse(n) {
    if (n < 0) n = n * -1;
    let digits = String(n).split("");
    return Number(digits.reverse().join(""));
};
