function Node(data) {
  this.data = data||null;
  this.next = null;
}

function sortedInsert(head, data) {
 if (!head || data < head.data) {
   let n = new Node(data)
   n.next=head
   return n
 }
  else {
    head.next = sortedInsert(head.next, data)
    return head
  }
}

// DESCRIPTION:
// Linked Lists - Sorted Insert

// Write a SortedInsert() function which inserts a node into the correct location of a pre-sorted linked list which is sorted in ascending order. SortedInsert takes the head of a linked list and data used to create a node as arguments. SortedInsert() should also return the head of the list.

// sortedInsert(1 -> 2 -> 3 -> null, 4) === 1 -> 2 -> 3 -> 4 -> null)
// sortedInsert(1 -> 7 -> 8 -> null, 5) === 1 -> 5 -> 7 -> 8 -> null)
// sortedInsert(3 -> 5 -> 9 -> null, 7) === 3 -> 5 -> 7 -> 9 -> null)