"""
  900· Closest Binary Search Tree Value
  Easy
  https://www.lintcode.com/problem/900/
"""

"""
  Time complexity  : O(H)
  Space complexity : O(1)
"""

"""
Definition of TreeNode:
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left, self.right = None, None
"""
class Solution:
    """
    @param root: the given BST
    @param target: the given target
    @return: the value in the BST that is closest to the target
    """
    def closestValue(self, root, target):
        closest = root.val

        while (root != None):
            if (abs(target - root.val) < abs(closest - target)):
                closest = root.val
            root = root.right if root.val < target else root.left

        return closest
