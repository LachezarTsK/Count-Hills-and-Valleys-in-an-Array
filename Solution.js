

/**
 * @param {number[]} input
 * @return {number}
 */
var countHillValley = function (input) {
    let leftIndex = skipSameValues(0, input);
    let middleIndex = skipSameValues(leftIndex + 1, input);
    let rightIndex = middleIndex + 1;

    let countHillValley = 0;
    while (rightIndex < input.length) {

        rightIndex = skipSameValues(middleIndex + 1, input);
        if (isHillOrValley(input[leftIndex], input[middleIndex], input[rightIndex])) {
            ++countHillValley;
        }

        leftIndex = middleIndex;
        middleIndex = rightIndex;
        ++rightIndex;
    }

    return countHillValley;
};

/**
 * @param {number} index
 * @param {number[]} input 
 * @return {number}
 */
function skipSameValues(index, input) {
    while (index + 1 < input.length && input[index + 1] === input[index]) {
        ++index;
    }
    return index;
}

/**
 * @param {number} leftValue
 * @param {number} middleValue 
 * @param {number} rightValue 
 * @return {boolean}
 */
function isHillOrValley(leftValue, middleValue, rightValue) {
    return (leftValue > middleValue && rightValue > middleValue)
            || (leftValue < middleValue && rightValue < middleValue);
}
