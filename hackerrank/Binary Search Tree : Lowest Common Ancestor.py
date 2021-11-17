"""
    Binary Search Tree : Lowest Common Ancestor
    Easy
    https://www.hackerrank.com/challenges/binary-search-tree-lowest-common-ancestor/problem
"""

"""
    First solution
    -----------------
    Time complexity  : O(N log(N))
    Space complexity : O(N)
"""

def traverse(node, searchVal, path):
    if (node == None):
        return path

    path.append(node)
        
    if (node.info == searchVal):
        return path

    if (node.info > searchVal):
        traverse(node.left, searchVal, path)
    
    if (node.info < searchVal):
        traverse(node.right, searchVal, path)

    return path


def lca(root, v1, v2):
    maxNum = max(v1, v2)
    minNum = min(v1, v2)
    
    path1 = []
    path2 = []
    
    if (root.info >= minNum):
        path1 = traverse(root.left, minNum, [root])
        
    elif (root.info <= minNum):
        path1 = traverse(root.right, minNum, [root])
        
    if (root.info <= maxNum):
        path2 = traverse(root.right, maxNum, [root])    
        
    elif (root.info >= maxNum):
        path2 = traverse(root.left, maxNum, [root])

    minLength = min(len(path1), len(path2))
    common = root

    i = 0
    while i < minLength:
        if path1[i] == path2[i]:
            common = path1[i]
        i += 1
        
    return common
  
