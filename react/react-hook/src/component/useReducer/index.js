// function countReducer (state, action) {
//     switch (action) {
//         case 'add':
//         return state + 1
//         case 'cut':
//         return state - 1
//         default:
//             return state
//     }
// }

import React, { useReducer } from 'react'

// const count = 0
// function add () {
//     count++
// }
// function cut () {
//     count--
// }

//useReducer 帮助我们整合组件中 操作同一状态 的各种方法
function ReducerDemo () {
     const [ count,dispath ]= useReducer((state, action) =>{
          switch (action) {
        case 'add':
        return state + 1
        case 'cut':
        return state - 1
        default:
            return state
      }
     },0)
    return (
        <div>
            <h2>现在的分数是{count}</h2>
            <button onClick={() =>dispath('add')}>add</button>
            <button onClick={() => dispath('cut')}>cut</button>
        </div>
    )
}
export default ReducerDemo