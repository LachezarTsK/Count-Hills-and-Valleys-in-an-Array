
public class Solution {

    public int countHillValley(int[] input) {
        int leftIndex = skipSameValues(0, input);
        int middleIndex = skipSameValues(leftIndex + 1, input);
        int rightIndex = middleIndex + 1;

        int countHillValley = 0;
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
    }

    private int skipSameValues(int index, int[] input) {
        while (index + 1 < input.length && input[index + 1] == input[index]) {
            ++index;
        }
        return index;
    }

    private boolean isHillOrValley(int leftValue, int middleValue, int rightValue) {
        return (leftValue > middleValue && rightValue > middleValue)
                || (leftValue < middleValue && rightValue < middleValue);
    }
}
