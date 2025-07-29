
class Solution {

    fun countHillValley(input: IntArray): Int {
        var leftIndex = skipSameValues(0, input)
        var middleIndex = skipSameValues(leftIndex + 1, input)
        var rightIndex = middleIndex + 1

        var countHillValley = 0
        while (rightIndex < input.size) {

            rightIndex = skipSameValues(middleIndex + 1, input)
            if (isHillOrValley(input[leftIndex], input[middleIndex], input[rightIndex])) {
                ++countHillValley
            }

            leftIndex = middleIndex
            middleIndex = rightIndex
            ++rightIndex
        }

        return countHillValley
    }

    private fun skipSameValues(index: Int, input: IntArray): Int {
        var index = index
        while (index + 1 < input.size && input[index + 1] == input[index]) {
            ++index
        }
        return index
    }

    private fun isHillOrValley(leftValue: Int, middleValue: Int, rightValue: Int): Boolean {
        return (leftValue > middleValue && rightValue > middleValue)
                || (leftValue < middleValue && rightValue < middleValue)
    }
}
