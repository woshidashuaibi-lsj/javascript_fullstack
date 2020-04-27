import { createElement,render, renderDom } from './element.js'

import diff from './diff'

let vertualDom = createElement('ul',{class:'list'},[
    createElement('li',{class:'item'},['aaa']),
    createElement('li',{class:'item'},['bbb']),
    createElement('li',{class:'item'},['ccc'])
])
let vertualDom2 = createElement('ul',{class:'list-group'},[
    createElement('li',{class:'item'},['111']),
    createElement('li',{class:'item'},['bbb']),
    createElement('li',{class:'item'},['333'])
])

let pacthes = diff(vertualDom,vertualDom2)





//将虚拟dom转化成了真实dom,渲染到页面上
  // let el = render(vertualDom)
  // renderDom(el, window.root)
  // console.log(el);
  
// console.log(vertualDom);

// DOM Diff 比较两个虚拟的DOM区别，比较两个对象的区别
// dom diff 作用 根据两个虚拟对象创建出补丁，描述改变的内容，将这个补丁用来更新dom