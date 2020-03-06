//useContext 让父子组件传值变得更加简单

import React, { useState, createContext, useContext } from 'react'


const CountCountext = createContext()



function Example () {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>你点了{count}次</p>
            <button onClick={() => {setCount(count + 1)}}>click me</button>
            <CountCountext.Provider value={count}>
              <Counter></Counter>
            </CountCountext.Provider>
        </div>
    ) 
}

function Counter () {
    const ABC = useContext (CountCountext)
    return (
    <h2>{ABC}</h2>
    )
}


export default Example