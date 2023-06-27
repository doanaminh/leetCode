class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        book = dict()
        for i in range(len(nums)):
            temp = target - nums[i]
            if temp in book:
                return [book[temp], i]
            else:
                book[nums[i]] = i