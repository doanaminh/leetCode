class Solution:
    def maxProfit(self, prices: List[int]) -> int:
      # prices is an array of integers where i is the day and prices[i] is price of a stock on i day
      # return max profit possible as an integer if no profit is possible return 0
      # Input: prices = [7,1,5,3,6,4] Output: 5
      # define a max profit variable and set it to 0
      # create two pointers and set the left to 0 and the right to 1
      # we will use these pointers to iterate nums
      # while the right pointer is in bounds of the index of nums array
      # define a temp variable to hold the current profit from subtracting the value the right pointer is at from the left
      # if this value is higher than the current max profit redefine max profit to temp
      # if right value is ever less or equal to left's then update left pointer to current right and right to right + 1
      # return max profit variable when the loop ends

      profit, l, r = 0, 0, 1
      while l < len(prices) and r < len(prices):
        if prices[r] <= prices[l]:
          l = r
          r += 1
        else:
          temp = prices[r] - prices[l]
          profit = max(profit, temp)
          r += 1
          
      return profit