import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION} from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (value) => ({
    type:CHANGE_INPUT_VALUE,
    value: value
})
export const getAddItemAction = () => ({
    type:ADD_TODO_ITEM,
}) 
export const getDeleteItemAction = (index) => ({
    type:DELETE_TODO_ITEM,
    index:index
}) 
export const initListItemAction = (data) => ({
    type:INIT_LIST_ACTION,
    data
}) 
export const getTodoList = () => {
    return (dispatch)=> {
    axios.get('http://musicapi.leanapp.cn/comment/music?id=186016&limit=1').then((res) => {
      console.log(res)
      const data=res.data
      const action = initListItemAction(Object.keys(data.hotComments[0]))
    //   store.dispatch(action)
      console.log(action)
      dispatch(action)
     })
    }
}