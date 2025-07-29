
package main

func countHillValley(input []int) int {
    leftIndex := skipSameValues(0, input)
    middleIndex := skipSameValues(leftIndex+1, input)
    rightIndex := middleIndex + 1

    countHillValley := 0
    for rightIndex < len(input) {

        rightIndex = skipSameValues(middleIndex+1, input)
        if isHillOrValley(input[leftIndex], input[middleIndex], input[rightIndex]) {
            countHillValley++
        }

        leftIndex = middleIndex
        middleIndex = rightIndex
        rightIndex++
    }

    return countHillValley
}

func skipSameValues(index int, input []int) int {
    for index+1 < len(input) && input[index+1] == input[index] {
        index++
    }
    return index
}

func isHillOrValley(leftValue int, middleValue int, rightValue int) bool {
    return (leftValue > middleValue && rightValue > middleValue) ||
            (leftValue < middleValue && rightValue < middleValue)
}
