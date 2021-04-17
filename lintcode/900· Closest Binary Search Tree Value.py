"""
  900· Closest Binary Search Tree Value
  Easy
  https://www.lintcode.com/problem/900/
"""

"""
Definition of TreeNode:
class TreeNode:
  def __init__(self, val):
    self.val = val
    self.left, self.right = None, None
"""

"""
  First solution
  -----------------
  Approach: Iteratively
  Time complexity (average)  : O(log(N))
  Time complexity (worse)  : O(1)
  Space complexity (average) : O(log(N))
  Space complexity (worse) : O(1)
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

"""
  Second solution
  -----------------
  Approach: Recursively
  Time complexity (average)  : O(log(N))
  Time complexity (worse)  : O(n)
  Space complexity (average) : O(log(N))
  Space complexity (worse) : O(n)
"""

class Solution:
  """
  @param root: the given BST
  @param target: the given target
  @return: the value in the BST that is closest to the target
  """
  closest = None

  def closestValue(self, root, target):
    self.closest = root.val
    self.traverse(root, target)
    return self.closest

  def traverse(self, node, target):
    if (node != None):      
      if (node.val < target):
        self.traverse(node.right, target)
      else:
        self.traverse(node.left, target)

      if (abs(target - node.val) < abs(self.closest - target)):
        self.closest = node.val
