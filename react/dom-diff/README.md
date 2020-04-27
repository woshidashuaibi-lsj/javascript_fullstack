# 生成项目

npm i -g create-react-app
create-react-app dom-diff

# vartual dom
虚拟节点，通过js的object对象模拟DOM中的节点，然后再通过特定的render方法将其渲染成真实的DOM节点

createElement => {type.props.,children}

# DOM Diff
dom diff是通过js层面的计算返回一个patch(补丁)对象
再通过特定的操作来解析patch对象，完成页面的重新渲染

dom diff 三种优化策略
- 更新只比较平级

同一层节点位置发生变化，diff直接帮跟新位置，这是key的作用

# 差异计算
 - 先序深度优先遍历
   1. 用js对象模拟dom
   2. 把虚拟dom转成真实dom并插入页面中
   3. 如果有事件发生，修改了虚拟dom，那就比较两颗虚拟dom树的差异，得到差异对象
   4. 把差异对象应用到真实的dom树上去


   当节点类型相同时，去看一下属性是否相同
   产生一个属性的补丁包{type:'ATTRS', attrs: {class:"list-group"}}
   新的dom节点不在{type: 'REMOVE', index: xxxxx}
   节点类型不相同，直接采用替换模式{type: 'REPLACE', newNode: newNOde}
   文本的变化{type: 'TEXT', text: 1}