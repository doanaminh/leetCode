class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # nums is an integer array and k is an integer
        # return the the k most elements in nums in any order
        # Input: nums = [1,1,1,2,2,3], k = 2 Output: [1,2]
        # create a map that counts how many times each element appears in nums
        # loop through nums
        # if current element exists as a key in map then iterate it by 1
        # else create a key with that element and set the value to 1
        # create a list freq with default value of an empty list of length nums + 1
        # loop through count and use the index of freq as the count
        # append the key of count to the element of index
        # loop through freq list in reverse order
        # loop through the list of each freq (if it exists)
        # append each value to a new res list
        # once the length of the res list equals k
        # return res list

        count = dict()
        for i in range(len(nums)):
            if nums[i] in count:
                count[nums[i]] += 1
            else:
                count[nums[i]] = 1
        freq = [[] for i in range(len(nums) + 1)]
        for i in count:
            freq[count[i]].append(i)
        res = []
        for i in range(len(freq) - 1, 0, -1):
            for j in freq[i]:
                res.append(j)
                if len(res) == k:
                    return res