class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # nums is an integer array 
        # return an array with the elements of nums replaced by the product of the array except itself
        # CANNOT USE THE DIVISION OPERATOR
        # create a res list with length of nums
        # create a temp variable
        # loop through nums 
        # update res[i] with temp
        # update temp with temp * nums[i]
        # reset value of temp to 1
        # loop through nums again but in reverse order
        # update res[i] with res[i] * temp
        # update temp with temp * nums[i]
        # return res

        res = [1] * len(nums)
        temp = 1
        for i in range(len(nums)):
            res[i] = temp
            temp *= nums[i]
        temp = 1
        for i in range(len(nums) -1, -1, -1):
            res[i] *= temp
            temp *= nums[i]
        return res