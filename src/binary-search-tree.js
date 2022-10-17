const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.nodeRoot = null;
  }
  root() {
      return this.nodeRoot;
  }

  add(data) {
    this.nodeRoot = addWithin(this.nodeRoot, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchWithin(this.nodeRoot, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? 
        searchWithin(node.left, data) : 
        searchWithin(node.right, data);
    }
  }

  find(data) {
    return _find(this.nodeRoot, data);

    function _find(node, data) {
      if (node === null) {
          return null;
      } else if (data < node.data) {
          return this._find(node.left, data);
      } else if (data > node.data) {
          return this._find(node.right, data);
      } else {
          return node;
      }
    }
  }

  remove(data) {
   
  }

  min() {
    if (!this.nodeRoot) {
      return;
    }

    let node = this.nodeRoot;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.nodeRoot) {
      return;
    }

    let node = this.nodeRoot;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};