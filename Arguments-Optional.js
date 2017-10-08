/*
Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

*/

function addTogether() {
    var argA = arguments[0];
    var argB = arguments[1];

    function isNumber(isN) {
        if (typeof (isN) !== "number") return false;
        return true;
    }

    if (!isNumber(argA)) return undefined;

    if (!argB) return (argB) => {
        if (isNumber(argB)) return argB + argA;
        return undefined;
    }

    if (!isNumber(argB)) return undefined;
    return argA + argB;
}

console.log(addTogether(2, 3)); // should return 5.
console.log(addTogether(2)(3)); // should return 5.
console.log(addTogether("http://bit.ly/IqT6zt")); // should return undefined.
console.log(addTogether(2, "3")); // should return undefined.
console.log(addTogether(2)([3])); // should return undefined.