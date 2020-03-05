// componentWillUnmount 组件卸载之前
//useEffect 实现组件卸载 componentWillUnmount (解绑副作用)

 import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
 import React , { useState, useEffect } from 'react'


function Example () {
    const [ count, setCount ] = useState(0)

    useEffect (() =>{
        console.log(`componentDidMount => 你点击了 ${count} 次`)
        return () => {
            console.log('-------------')
        }
    },[count])
    return (
        <div>
            <p>你点了{count}次</p>
            <button onClick={() => {setCount(count + 1)}}>click me</button>

            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list">列表</Link></li>
                </ul>
                <Route exact path='/' component={Index}></Route>
                <Route path='/list' component={List}></Route>
            </Router>
        </div>
    ) 
}

function Index () {
    useEffect(() => {
        console.log(`useEffect => 这里是Index页面`)
        return () =>{
            console.log(`你离开了index页面`)
        }
    },[])
    return <h2>旅梦开发团</h2>
}
function List () {
    useEffect(() => {
        console.log(`useEffect => 这里是List页面`)
    },[])
    return <h2>List-page</h2>
}

export default Example

