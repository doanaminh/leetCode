class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # prices is an integer array
        # i of prices is the different days
        # return max profit achievable from selling stock within prices array
        # max profit = prices[j] - prices[i] && j > i
        # if no profit can be made return 0
        # create a max_profit variable and assign it to 0
        # create two pointers left and right
        # loop through prices using the pointers
        # create a temp var to hold the current profit/loss
        # if temp is greater or equal to max_profit then iterate the right pointer
        # update max_profit
        # else if the temp is less than max_profit 
        # update the left pointer and right pointer
        # this will start a new window to check
        # when the left counter or right counter is no longer a valid index of prices break the loop
        # return max_profit
        
        max_profit = 0
        l = 0
        r = 1
        while l < len(prices) and r < len(prices):
            temp = prices[r] - prices[l]
            if temp > 0:
                max_profit = max(temp, max_profit)
                r += 1
            else:
                l = r
                r = l + 1
        return max_profit