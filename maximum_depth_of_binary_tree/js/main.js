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
 * @return {number}
 */
// var maxDepth = function(root) {
//   let count = 0;
//   let i = 0;
//   console.log(`root: ${ root }`);
//    console.log(`root.length: ${root.length}`);

//   // console.log(root[1]);
//   // console.log(root[10]);

//   if (root.length === 0) return;

//   while (i < root.length) {
//     count++;
//     // let index = count * 2;
//     if (i === 0 && root[ 0 ] !== undefined)
//     {
//       i++;
//     }
//     if (root[i] !== undefined) {
//       i = count * 2;
//       count = i;
//     } else {
//       break;
//     }
//   }

//   console.log(count);
// for (let i = 0; i < root.length;) {
//   count++;
//   let index = count * 2;

//   wi
// }

// console.log(...root);
// for (let val of root) {
//   console.log(val);
// }
// };

// maxDepth([3, 9, 20, null, null, 15, 7]);

if (!root) return 0;
var lval = maxDepth(root.left) + 1;
var rval = maxDepth(root.right) + 1;
return lval > rval ? lval : rval;
