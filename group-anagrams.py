class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # strs is an array of strings
        # return an array of array-grouped anagrams
        # Input: strs = ["eat","tea","tan","ate","nat","bat"] Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
        # if strs is empty return an empty array
        # is strs only has 1 element return an array with an array with the one element
        # create an array 
        # loop through strs
        res = defaultdict(list)
        for s in strs:
            count = [0] * 26
            for c in s:
                count[ord(c) - ord('a')] += 1
            res[tuple(count)].append(s)
        return res.values()