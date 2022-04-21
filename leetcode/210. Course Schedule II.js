/**
 * 210. Course Schedule II
 * Medium
 * https://leetcode.com/problems/course-schedule-ii/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(V+E) where ‘V’ is the total number of vertices and ‘E’ is the total number of edges in the graph
 * Space complexity : O(V+E) where ‘V’ is the total number of vertices and ‘E’ is the total number of edges in the graph
 */

var findOrder = function (numCourses, prerequisites) {
  let inDegree = Array(numCourses).fill(0),
    graph = Array(numCourses)
      .fill(0)
      .map(() => []),
    sortedData = [];
  for (let i of prerequisites) {
    let parent = i[1],
      child = i[0];
    graph[parent].push(child);
    inDegree[child]++;
  }
  let sources = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      sources.push(i);
    }
  }
  while (sources.length) {
    let vertex = sources.shift();
    sortedData.push(vertex);
    graph[vertex].map((child) => {
      if (--inDegree[child] === 0) {
        sources.push(child);
      }
    });
  }
  if (sortedData.length !== numCourses) {
    return [];
  }
  return sortedData;
};
