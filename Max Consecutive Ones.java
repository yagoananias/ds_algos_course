class Solution {
    int count = 0;
    int result = 0;
    
    public int findMaxConsecutiveOnes(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                count = 0;
            } else {
                count++;
                result = Math.max(result, count);
            }
        }
        return result;
    }
}
