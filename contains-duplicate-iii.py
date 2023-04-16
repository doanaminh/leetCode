class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        s1 = set()
        for i in range(len(nums)):
            if nums[i] in s1:
                return True
            else:
                s1.add(nums[i])