class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # an anagram is a word that can have its letters rearrange to form another word
        # strs is an array of strings
        # return strings in strs grouped together by anagrams in any order
        # create a defaultdict and set the default value to a list
        # loop through strs
        # create an alphabetical count list
        # loop through the letters in the current string in strs
        # increment the count list using the index as the alphabetical character
        # to find out which index the letter is use ord()
        # basing off of 0 to 25 index
        # ord(<current letter>) - ord('a') will give us the index in that range for all characters from a to z
        # use the count list as a key for the defualtdict in the form of a tuple
        # append the current string of strs to the value of that key
        # return the defualtdict after the looping is finsihed

        res = defaultdict(list)
        for s in strs:
            count = [0] * 26
            for c in s:
                count[ord(c) - ord('a')] += 1
            
            res[tuple(count)].append(s)
        return res.values()