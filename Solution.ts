
function countHillValley(input: number[]): number {
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

function skipSameValues(index: number, input: number[]): number {
    while (index + 1 < input.length && input[index + 1] == input[index]) {
        ++index;
    }
    return index;
}

function isHillOrValley(leftValue: number, middleValue: number, rightValue: number): boolean {
    return (leftValue > middleValue && rightValue > middleValue)
            || (leftValue < middleValue && rightValue < middleValue);
}
