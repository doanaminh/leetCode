class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        # nums is an integer array
        # k is an integer dictating how many elements are allowed between each duplicate to be a valid answer
        # return true if there are distinct indices i and j in nums such that nums[i] === num[j] and abs(i - j) <= k
        # Input: nums = [1,2,3,1,2,3], k = 2 Output: false
        # abs(i - j) > k   so return false
        # create a map
        # loop through nums
        # if nums[i] exists in map then check to see if the indexes between the two is valid with respect to k
        # if condition k is accepted return true
        # else add nums[i] to the map with the current index as the value
        # if loop ends then return false

        map = dict()
        for i in range(len(nums)):
            if nums[i] in map:
                if map[nums[i]] != i and abs(map[nums[i]] - i) <= k:
                    return True
                else:
                    map[nums[i]] = i
            else:
                map[nums[i]] = i
        print(map)