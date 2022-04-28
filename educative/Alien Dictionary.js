/**
 * Alien Dictionary
 * Hard
 * https://www.educative.io/courses/grokking-the-coding-interview/R8AJWOMxw2q
 */

/**
  Problem Statement

  There is a dictionary containing words from an alien language for which we don’t know the ordering of the alphabets. Write a method to find the correct order of the alphabets in the alien language. It is given that the input is a valid dictionary and there exists an ordering among its alphabets.

  Example 1:
  Input: Words: ["ba", "bc", "ac", "cab"]
  Output: bac
  Explanation: Given that the words are sorted lexicographically by the rules of the alien language, so
  from the given words we can conclude the following ordering among its characters:

  1. From "ba" and "bc", we can conclude that 'a' comes before 'c'.
  2. From "bc" and "ac", we can conclude that 'b' comes before 'a'

  From the above two points, we can conclude that the correct character order is: "bac"

  Example 2:
  Input: Words: ["cab", "aaa", "aab"]
  Output: cab
  Explanation: From the given words we can conclude the following ordering among its characters:

  1. From "cab" and "aaa", we can conclude that 'c' comes before 'a'.
  2. From "aaa" and "aab", we can conclude that 'a' comes before 'b'

  From the above two points, we can conclude that the correct character order is: "cab"

  Example 3:
  Input: Words: ["ywx", "wz", "xww", "xz", "zyy", "zwz"]
  Output: ywxz
  Explanation: From the given words we can conclude the following ordering among its characters:

  1. From "ywx" and "wz", we can conclude that 'y' comes before 'w'.
  2. From "wz" and "xww", we can conclude that 'w' comes before 'x'.
  3. From "xww" and "xz", we can conclude that 'w' comes before 'z'
  4. From "xz" and "zyy", we can conclude that 'x' comes before 'z'
  5. From "zyy" and "zwz", we can conclude that 'y' comes before 'w'

  From the above five points, we can conclude that the correct character order is: "ywxz"
 */

/**
 * First solution
 * -----------------
 * Time complexity  : O(V+N) where ‘V’ is the total number of different characters and ‘N’ is the number of words in the input
 * Space complexity : O(V+N) where ‘V’ is the total number of different characters and ‘N’ is the number of words in the input
 */

const find_order = function (words) {
  if (!words.length) return '';
  let graph = {},
    inDegree = {};
  for (let w of words) {
    for (let i = 0; i < w.length; i++) {
      let letter = w[i];
      graph[letter] = [];
      inDegree[letter] = 0;
    }
  }
  for (let i = 0; i < words.length - 1; i++) {
    let w1 = words[i],
      w2 = words[i + 1];
    for (let j = 0; j < Math.min(w1.length, w2.length); j++) {
      let parent = w1[j],
        child = w2[j];
      if (parent !== child) {
        graph[parent].push(child);
        inDegree[child]++;
        break;
      }
    }
  }
  let sources = [];
  let chars = Object.keys(inDegree);
  for (let i = 0; i < chars.length; i++) {
    if (inDegree[chars[i]] === 0) {
      sources.push(chars[i]);
      sources.sort((a, b) => a - b);
    }
  }
  let sortedArray = [];
  while (sources.length) {
    let vertex = sources.shift();
    sortedArray.push(vertex);
    graph[vertex].map((child) => {
      if (--inDegree[child] === 0) {
        sources.push(child);
        sources.sort((a, b) => a - b);
      }
    });
  }
  if (sortedArray.length !== chars.length) {
    return '';
  }
  return sortedArray.join('');
};
