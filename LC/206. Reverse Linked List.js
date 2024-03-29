// function ListNode(val, next) {
    //     this.val = (val===undefined ? 0 : val)
    //     this.next = (next===undefined ? null : next)
    // }
   
   /**
    * Definition for singly-linked list.
   
    */
   /**
    * @param {ListNode} head
    * @return {ListNode}
    */
   var reverseList = function(node) {
       if(!node) return null
       let res=null
       while(node){
           let curr = node.next
           node.next=res
           res=node
           node=curr
       }
       return res
   };
//    206. Reverse Linked List


//    Given the head of a singly linked list, reverse the list, and return the reversed list.

