/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    // node is the first node inside the graph
    // return the first node of the copy of the original graph
    // Input: adjList = [[2,4],[1,3],[2,4],[1,3]] Output: [[2,4],[1,3],[2,4],[1,3]]
    // create a map
    // create a depth first search function
    // if the current node passed into the function exists inside the map then return the map's value of said node
    // if not then create a copy of the node 
    // assign the copy of the node into the map as the value of the original node as the key
    // loop through the neighbors of the current node
    // for each neighbor push the copy of the node inside the the neighbor array of the copy
    // if the copy exists then it will be added if not then it will be created
    // to achieve this use recursion 
    // push the node by calling the dfs function 

    const map = {};
    const dfs = node => {
        if (map[node.val]) {
            return map[node.val];
        }
        const copy = new Node(node.val);
        map[node.val] = copy;
        for (n of node.neighbors) {
            copy.neighbors.push(dfs(n))
        }
        return copy;
    }
    return node !== null ? dfs(node) : null;
};