class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # s and t are strings
        # return true if they are anagrams to each other else return false
        # Input: s = "rat", t = "car" Output: false
        # if the lengths of s and t are not equal return false
        # turn s and t into dictionaries that contains the amount of each letters
        # for loop both strings and add the values to the respective dictionary
        # if both dictionaries contain the same amount of letters then they will be considered an anagram
        # for loop through either dictionary and compare key/values
        # if not then return false

        if len(s) != len(t):
            return False

        sDict, tDict = dict(), dict()
        for i in range(len(s)):
            if s[i] in sDict:
                sDict[s[i]] += 1
            else:
                sDict[s[i]] = 1
        for i in range(len(t)):
            if t[i] in tDict:
                tDict[t[i]] += 1
            else:
                tDict[t[i]] = 1

        return sDict == tDict