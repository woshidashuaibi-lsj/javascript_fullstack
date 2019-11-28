var tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7
      },
      right: {
        value: 8
      }
    },
    right: {
      value: 6
    }
  }
}


//前序遍历 + 递归
var preOrder = function (node) {
  if(node) {
      console.log(node.value)//根
      preOrder(node.left)//左
      preOrder(node.right)//右
  }
}
// preOrder(tree)


//深度优先并且不能使用递归
var preOrderUnRecur =function(node){
  if(!node){
    throw new Error('Empty Tree')
  }
  var stack= []
  stack.push(node)
  while(stack.length!==0){
    node = stack.pop()//pop删除数组的最后一项
    console.log(node.value)
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
}
preOrderUnRecur(tree)



//广度优先非递归
function BreadthFirstUnRecur(biTree){
  let queue=[]
  queue.push(biTree)
  while(queue.length !==0){
    let noed =queue.shift()//删除数组最前面一项的项
    console.log(node.value)
    if(node.left) queue.push(node.left)
    if(node.right) queue.push(node.right)
  }

}
// BreadthFirstUnRecur(tree)