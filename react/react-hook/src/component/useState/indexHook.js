import React , { useState } from 'react'
//useState 就是一个hook

function Example () {
    const [ count, setCount] = useState(0)
    // let _useState= useState(0)
    // let count = _useState[0]
    // let setCount = _useState[1]
    // const [ name, setName] = useState("lusuijie")
    //setCount  == this.setState({count: 'number'})
    // count=0
    return (
        <div>
            <p>你点了{count}次</p>
            <button onClick={() => {setCount(count + 1)}}>click me</button>
        </div>
    )
} 
// sueState 多状态
let showSex=true
function Example2 () {
    const [ age, setAge] = useState(18)
    if (showSex){
    const [ sex, setSex] = useState('男')
    showSex=false
}
    const [work, setWork] = useState ('前端程序员')
    

    //react 是如保证usestate找到自己的state
    //react 是根据useState出现的顺序来确定的
    //react Hooks 不能出现再条件判断语句中，因为他必须有完全一样的渲染顺序
    return (
        <div>
            <p onClick={() => {setAge(age+1)}}>大帅逼 今年： {age} 岁</p>
            <p>性别：{sex}</p>
            <p>工作是：{work}</p>
        </div>
    )
}


export default Example2

//hooks本质上就是一类特殊的函数 目的让你不再写 class ,让function一统江湖