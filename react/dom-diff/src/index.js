import { createElement,render, renderDom } from './element.js'
let vertualDom = createElement('ul',{class:'list'},[
    createElement('li',{class:'item'},['aaa']),
    createElement('li',{class:'item'},['bbb']),
    createElement('li',{class:'item'},['ccc'])
])

//将虚拟dom转化成了真实dom,渲染到页面上
  let el = render(vertualDom)
  renderDom(el, window.root)
  console.log(el);
  


// console.log(vertualDom);
