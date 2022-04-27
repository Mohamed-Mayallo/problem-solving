/**
 * All Tasks Scheduling Orders
 * Hard
 * https://www.educative.io/courses/grokking-the-coding-interview/q2YmVjQMMr3
 */

/**
  Problem Statement

  There are ‘N’ tasks, labeled from ‘0’ to ‘N-1’. Each task can have some prerequisite tasks which need to be completed before it can be scheduled. Given the number of tasks and a list of prerequisite pairs, write a method to print all possible ordering of tasks meeting all prerequisites.

  Example 1:
  Input: Tasks=3, Prerequisites=[0, 1], [1, 2]
  Output: [0, 1, 2]
  Explanation: There is only possible ordering of the tasks.

  Example 2:
  Input: Tasks=4, Prerequisites=[3, 2], [3, 0], [2, 0], [2, 1]
  Output: 
  1) [3, 2, 0, 1]
  2) [3, 2, 1, 0]
  Explanation: There are two possible orderings of the tasks meeting all prerequisites.

  Example 3:
  Input: Tasks=6, Prerequisites=[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]
  Output: 
  1) [0, 1, 4, 3, 2, 5]
  2) [0, 1, 3, 4, 2, 5]
  3) [0, 1, 3, 2, 4, 5]
  4) [0, 1, 3, 2, 5, 4]
  5) [1, 0, 3, 4, 2, 5]
  6) [1, 0, 3, 2, 4, 5]
  7) [1, 0, 3, 2, 5, 4]
  8) [1, 0, 4, 3, 2, 5]
  9) [1, 3, 0, 2, 4, 5]
  10) [1, 3, 0, 2, 5, 4]
  11) [1, 3, 0, 4, 2, 5]
  12) [1, 3, 2, 0, 5, 4]
  13) [1, 3, 2, 0, 4, 5]
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(V!∗E) where ‘V’ is the total number of tasks and ‘E’ is the total prerequisites
 * Space complexity : O(V!∗E) where ‘V’ is the total number of tasks and ‘E’ is the total prerequisites
 */

const print_orders = function (tasks, prerequisites) {
  let graph = Array(tasks)
    .fill(0)
    .map(() => []);
  let inDegree = Array(tasks).fill(0);
  for (let p of prerequisites) {
    let parent = p[0],
      child = p[1];
    graph[parent].push(child);
    inDegree[child]++;
  }
  let sources = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      sources.push(i);
    }
  }
  let sortedArr = [];
  loop(graph, inDegree, sources, sortedArr);
};

function loop(graph, inDegree, sources, sortedArr) {
  if (sources.length > 0) {
    for (let i = 0; i < sources.length; i++) {
      let vertex = sources[i];
      sortedArr.push(vertex);
      let nextSources = [...sources];
      nextSources.splice(sources.indexOf(vertex), 1);
      graph[vertex].map((child) => {
        if (--inDegree[child] === 0) {
          nextSources.push(child);
        }
      });
      loop(graph, inDegree, nextSources, sortedArr);
      sortedArr.splice(sortedArr.indexOf(vertex), 1);
      for (let p = 0; p < graph[vertex].length; p++) {
        inDegree[graph[vertex][p]]++;
      }
    }
  }
  if (sortedArr.length === inDegree.length) {
    console.log(sortedArr);
  }
}
