
using System;

public class Solution
{
    public int CountHillValley(int[] input)
    {
        int leftIndex = SkipSameValues(0, input);
        int middleIndex = SkipSameValues(leftIndex + 1, input);
        int rightIndex = middleIndex + 1;

        int countHillValley = 0;
        while (rightIndex < input.Length)
        {

            rightIndex = SkipSameValues(middleIndex + 1, input);
            if (IsHillOrValley(input[leftIndex], input[middleIndex], input[rightIndex]))
            {
                ++countHillValley;
            }

            leftIndex = middleIndex;
            middleIndex = rightIndex;
            ++rightIndex;
        }

        return countHillValley;
    }

    private int SkipSameValues(int index, int[] input)
    {
        while (index + 1 < input.Length && input[index + 1] == input[index]) {
            ++index;
        }
        return index;
    }

    private bool IsHillOrValley(int leftValue, int middleValue, int rightValue)
    {
        return (leftValue > middleValue && rightValue > middleValue)
                || (leftValue < middleValue && rightValue < middleValue);
    }
}
