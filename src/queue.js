const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this._queue = [];
  }

  _getUnderlyingList() {
    if (this._queue.length == 0) {
      return {}
    }

    const buildNext = (i) => {
      if (!this._queue[i]) { return null; }
      const item = {
        value: this._queue[i],
      }
      item['next'] = buildNext(i + 1);

      return item;
    }

    const result = {
      value: this._queue[0],
    };
    result['next'] = buildNext(1);

    return result;
  }

  getUnderlyingList() {
    if (this._queue.length == 0) {
      return {}
    }

    const root = {
      value: this._queue[0],
      next: null
    };

    let currentNode = root;

    for (let i = 1; i < this._queue.length; i++) {
      if (!this._queue[i]) { break; }

      currentNode.next = {
        value: this._queue[i],
        next: null,
      }

      currentNode = currentNode.next;
    }

    return root;
  }

  enqueue(elem) {
    this._queue.push(elem)
  }

  dequeue() {
    return this._queue.shift()
  }
}

module.exports = {
  Queue
};
