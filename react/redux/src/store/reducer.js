import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION} from './actionTypes'
const defaultState = {
    inputValue:'',
    list: []
}
//state指的是store里面上一次存储的数据
//action用户传过来的那句话
//纯函数指的是，给定固定的输入，就一定会有固定的输出，而不会有任何副作用
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState  //reduce 有一个限制，可以接受state, 但是不能修改state
    }
    if (action.type  ===ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        console.log(newState)
        newState.list.push(newState.inputValue) 
        newState.inputValue= ''
        return newState 
    }
    if(action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        console.log(newState)
        newState.list.splice(action.index,1)
        return newState 
    }
    if (action.type ===INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list=action.data
        return newState
    }
    console.log(state,action)
    return state
}