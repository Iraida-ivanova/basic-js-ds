const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
      this.rootNode = null;
  }
  root() {
      return this.rootNode;
  }

  add(data) {
      this.rootNode = updateTreeWithData(this.rootNode, data);
      function updateTreeWithData(node, data) {
          if (!node) {
              return new Node(data);
          }
          if (node.data === data) {
              return node;
          }
          else if (data < node.data) {
              node.left = updateTreeWithData(node.left, data);
          } else {
              node.right = updateTreeWithData(node.right, data);
          }
          return node;
      }
  }

  has(data) {
      return search(this.rootNode, data);
      function search(node, data) {
          if (!node) {
              return false;
          }
          if (node.data === data) {
              return true;
          }
          else if (data < node.data) {
             return search(node.left, data);
          } else {
             return search(node.right, data);
          }

      }
  }

  find(data) {
      return findData(this.rootNode, data);
      function findData(node, data) {
          if (!node) {
              node = null;
              return node;
          }
          if (node.data === data) {
              return node;
          }
          else if (data < node.data) {
            node =  findData(node.left, data);
            return node;
          } else {
              node = findData(node.right, data);
              return node;
          }

      }
  }

  remove(data) {
      this.rootNode = removeNodeWithData(this.rootNode, data);
      function removeNodeWithData(node, data) {

          if (!node) {
              return null;
          }
          if (node.data === data) {
              if (node.left === null && node.right === null) {
                  return null;
              } else if (node.left === null) {
                  node = node.right;
                  return node;
              } else if (node.right === null) {
                  node = node.left;
                  return node;
              } else {
                  let maxFromLeft = node.left;
                  while(maxFromLeft.right) {
                      maxFromLeft = maxFromLeft.right;
                  }
                  node.data = maxFromLeft.data;
                  node.left = removeNodeWithData(node.left, maxFromLeft.data);
                  return node;
              }
          }
          else if (data < node.data) {
              node.left = removeNodeWithData(node.left, data);
              return node;
          } else {
              node.right = removeNodeWithData(node.right, data);
              return node;
          }

      }
  }

  min() {
      if (this.rootNode === null) {
          return null;
      }
      return findMinData (this.rootNode);
      function findMinData(node) {
          if (node.left === null) {
              return node.data;
          } else {
            return  findMinData(node.left);
          }
      }
  }

  max() {
      if (this.rootNode === null) {
          return null;
      }
      let node = this.rootNode;
      while (node.right) {
        node = node.right;
      }
      return node.data;
  }
}

module.exports = {
  BinarySearchTree
};