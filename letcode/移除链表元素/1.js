function ListNode(val){
    this.val=val;// 值
    this.next=null;
}

const n1=new ListNode(1);
const n2=new ListNode(2);
const n3=new ListNode(6);
const n4=new ListNode(3);
const n5=new ListNode(4);
const n6=new ListNode(5);
const n7=new ListNode(6);

n1.next=n2;
n2.next=n3;
n3.next=n4;
n4.next=n5;
n5.next=n6;
n6.next=n7;
// console.log(n1);

function removeElements (head , val){  //头结点 ，val要检查的值

    //如果当前节点的下一个节点下一个的值为val，当前节点的next指向next的next
    //如果头结点为val怎么办
    const dummy={  //哨兵结点 假节点
        next: head//哨兵节点为头结点，可能是val的节点服务   保持链表
    }
    let current =dummy;
    while(current &&current.next){  //遍历 尾节点 少做一次
         let next= current.next
         if( next.val===val){
             current.next=next.next;//值位val下一个节点从链表链式关系中移除了
         }
         if(next.val !== val){
             current =next;
         }
    }
    return dummy.next;  //返回dummy 指向下一个next 移除了dummy


}
console.log(removeElements(n1,6));