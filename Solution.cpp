
#include <vector>
using namespace std;

class Solution {

public:
    int countHillValley(vector<int>& input) const {
        int leftIndex = skipSameValues(0, input);
        int middleIndex = skipSameValues(leftIndex + 1, input);
        int rightIndex = middleIndex + 1;

        int countHillValley = 0;
        while (rightIndex < input.size()) {

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

private:
    int skipSameValues(int index, span<const int> input) const {
        while (index + 1 < input.size() && input[index + 1] == input[index]) {
            ++index;
        }
        return index;
    }

    bool isHillOrValley(int leftValue, int middleValue, int rightValue) const {
        return (leftValue > middleValue && rightValue > middleValue)
                || (leftValue < middleValue && rightValue < middleValue);
    }
};
