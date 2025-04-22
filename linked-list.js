function Node(value = null) {
  this.value = value;
  this.next = null;
}

// TODO: Refractor
class LinkedList {
  constructor(node = null) {
    this.node = node;

    this.head = this.node;
    this.tail = this.node;
    this.size = 0;
  }

  // TODO: Fix this function. Using this will give us an infinite loop for an unknown reason.
  // // If there are no Nodes has been set, and we were about to create a new one, this function will be called.
  // #setNewLinkedList(newNode) {
  //   this.node = this.head = this.tail = newNode;
  //   return;
  // }

  append(value) {
    let newNode = new Node(value);
    this.size += 1;
    if (!this.node) {
      this.node = this.head = this.tail = newNode;
      return;
    }

    let pointer = this.node;
    while (pointer.next != null) {
      pointer = pointer.next;
    }
    pointer.next = newNode;
    this.tail = pointer.next;
  }

  prepend(value) {
    let newNode = new Node(value);
    this.size += 1;
    if (!this.node) {
      this.node = this.head = this.tail = newNode;
      return;
    }

    newNode.next = this.node;
    this.node = newNode;
    this.head = this.node;
  }

  at(index) {
    let pointer = this.node;
    for (let i = 0; i < index; i++) {
      pointer = pointer.next;
    }

    return pointer;
  }

  pop() {
    if (!this.node) throw new RangeError("No arrays to be erased");

    let pointer = this.node;
    while (pointer.next.next != null) {
      pointer = pointer.next;
    }

    pointer.next = null;
    this.tail = pointer;

    this.size -= 1;
  }

  // Optional: Consider the search terms to not be case-sensitive
  contains(value) {
    let pointer = this.node;
    while (pointer != null) {
      if (pointer.value == value) {
        return true;
      }
      pointer = pointer.next;
    }

    return false;
  }

  find(value) {
    let pointer = this.node;

    let index = 0;
    while (pointer != null) {
      if (pointer.value == value) {
        return index;
      }
      pointer = pointer.next;
      index += 1;
    }

    return null;
  }

  toString() {
    let pointer = this.node;

    let string = "";
    while (pointer.next != null) {
      string += `( ${pointer.value} ) -> `;
      pointer = pointer.next;
    }
    string += `( ${pointer.value} ) -> null`;

    return string;
  }

  // TODO: Create an error invocation if the index was out of range
  insertAt(value, index) {
    let pointer = this.node;
    for (let i = 0; i < index - 1; i++) {
      pointer = pointer.next;
    }

    let newNode = new Node(value);
    let temp = pointer.next;
    pointer.next = newNode;
    newNode.next = temp;

    this.size += 1;
  }

  // TODO: Create an error invocation if the index was out of range
  removeAt(index) {
    let pointer = this.node;
    for (let i = 0; i < index - 1; i++) {
      pointer = pointer.next;
    }

    pointer.next = pointer.next.next;

    this.size -= 1;
  }
}

let list = new LinkedList();
list.append("Test");
list.append("Test2");
list.append("Test3");
list.append("Test4");
list.prepend("Start");
list.insertAt("Inserted", 2);
list.removeAt(2);

console.log(list.toString());
console.log(`List Size: ${list.size}`);
