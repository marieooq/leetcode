/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root === null) return true;
  return symmetric(root.left, root.right);
  function symmetric(leftNode, rightNode) {
    if (leftNode === null && rightNode === null) return true;
    if (leftNode !== null && rightNode !== null) {
      if (leftNode.val !== rightNode.val) return false;
      return (
        symmetric(leftNode.left, rightNode.right) &&
        symmetric(leftNode.right, rightNode.left)
      );
    } else {
      return false;
    }
  }
};

console.log(isSymmetric([1, 2, null]));
// isSymmetric([1, 2, 2]);
