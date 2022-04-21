/**
 * 207. Course Schedule
 * Medium
 * https://leetcode.com/problems/course-schedule/
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(V+E) where ‘V’ is the total number of vertices and ‘E’ is the total number of edges in the graph
 * Space complexity : O(V+E) where ‘V’ is the total number of vertices and ‘E’ is the total number of edges in the graph
 */

var canFinish = function (numCourses, prerequisites) {
  let inDegree = Array(numCourses).fill(0),
    graph = Array(numCourses)
      .fill(0)
      .map(() => []),
    sortedData = [];
  for (let i of prerequisites) {
    let parent = i[0],
      child = i[1];
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
  return sortedData.length === numCourses;
};
