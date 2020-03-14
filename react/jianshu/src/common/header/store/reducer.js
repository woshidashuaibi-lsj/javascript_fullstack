import * as  types from './actionTypes'
import { fromJS } from 'immutable'
// immutable.js
// facebook
// immutable对象


const defaultState = fromJS({
    focused: false,
    click1: true,
    click2: false
})

export default (state = defaultState, action) => {
if(action.type === types.SEARXH_FOCUS){
    return state.set('focused',true) 
    //immutable 对象的set方法，会结合之前immutable对象的值和设置的值，
    // 返会一个全新的对象
}
if(action.type === types.SEARXH_BLUR){
    return state.set('focused',false)
}
if(action.type === types.ICON_CLICK1){
    return state.set('click1',true,'click2',false)
    // return {
    //     click1: true,
    //     click2: false
    // }
}
if(action.type === types.ICON_CLICK2){
    return state.set('click1',false,'click2',true)
    // return {
    //     click1: false,
    //     click2: true
    // }
}
return state
}