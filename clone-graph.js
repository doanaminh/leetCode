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
    console.log(node !== null)
    const map = {};
    const dfs = node => {
        if (map[node.val]){ 
            return map[node.val];
        }
        const copy = new Node(node.val);
        map[node.val] = copy;
        for (n of node.neighbors) {
            copy.neighbors.push(dfs(n));
        }
        return copy;
    }
    return node !== null ? dfs(node) : null;
};