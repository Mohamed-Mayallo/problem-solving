"""
    Tree: Height of a Binary Tree
    Easy
    https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree/problem
"""

"""
    First solution
    -----------------
    Time complexity  : O(N)
    Space complexity : O(N)
"""

def traverse(node, counter):
    if (node == None):
        newCounter = counter - 1
        counter = 0
        return newCounter
    leftCounter = traverse(node.left, counter + 1)
    rightCounter = traverse(node.right, counter + 1)
    return max(leftCounter, rightCounter)

def height(root):
    return traverse(root, 0)
