/**
 * Tasks Scheduling Order
 * Medium
 * https://www.educative.io/courses/grokking-the-coding-interview/BnnArPGKolJ
 */

/**
  Problem Statement

  There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’. Each task can have some prerequisite tasks which need to be completed before it can be scheduled. Given the number of tasks and a list of prerequisite pairs, write a method to find the ordering of tasks we should pick to finish all tasks.

  Example 1:
  Input: Tasks=3, Prerequisites=[0, 1], [1, 2]
  Output: [0, 1, 2]
  Explanation: To execute task '1', task '0' needs to finish first. Similarly, task '1' needs
  to finish before '2' can be scheduled. A possible scheduling of tasks is: [0, 1, 2] 

  Example 2:
  Input: Tasks=3, Prerequisites=[0, 1], [1, 2], [2, 0]
  Output: []
  Explanation: The tasks have a cyclic dependency, therefore they cannot be scheduled.

  Example 3:
  Input: Tasks=6, Prerequisites=[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]
  Output: [0 1 4 3 2 5] 
  Explanation: A possible scheduling of tasks is: [0 1 4 3 2 5] 
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(V+E) where ‘V’ is the total number of vertices and ‘E’ is the total number of edges in the graph
 * Space complexity : O(V+E) where ‘V’ is the total number of vertices and ‘E’ is the total number of edges in the graph
 */

const find_order = function (tasks, prerequisites) {
  let inDegree = Array(tasks).fill(0),
    graph = Array(tasks)
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
  if (sortedData.length !== tasks) {
    return [];
  }
  return sortedData;
};
