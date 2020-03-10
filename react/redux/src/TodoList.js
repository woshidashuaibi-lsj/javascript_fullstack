//Redux = flux + Reduce

import React , { Component } from 'react'
// import { Input,Button,List } from 'antd' 
import 'antd/dist/antd.css'
import store from './store/index.js'
// import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './store/actionTypes'
import {getTodoList,getInputChangeAction,getAddItemAction,getDeleteItemAction,initListItemAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'

//store 的创建

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state=store.getState()
    // console.log(this.state)
    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleStoreChange=this.handleStoreChange.bind(this)
    this.handleBtnClick=this.handleBtnClick.bind(this)
    this.handleItemDelete=this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange)//只要store里面的数据发生变化，实时获取
  }

  componentDidMount () {
    const action =getTodoList()
    store.dispatch(action)// 因为此刻的store已经集成的thunk的功能，所以支持dispath一个函数，这个函数会自动执行
    console.log(action)
    //  axios.get('https://api.github.com/users/octocat/gists').then((res) => {
    //   console.log(res)
    //   const data=res.data
    //   const action = initListItemAction(Object.keys(data[0].owner))
    //   store.dispatch(action)
    //   // console.log(action)

    //  })
  }


  handleInputChange (e) {
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }
    const action =getInputChangeAction(e.target.value)
    store.dispatch(action)  //让管理员听到这句话
  }

  handleStoreChange () {
    // console.log('change')
    this.setState(store.getState())
  }

  handleBtnClick () {
    // const action ={
    //   type:ADD_TODO_ITEM,
    // }
    const action = getAddItemAction()
    store.dispatch(action)
  }


  handleItemDelete (index) {
    console.log(index)
    // const action ={
    //   type: DELETE_TODO_ITEM,
    //   index: index
    // }
    const action =getDeleteItemAction(index)
    store.dispatch(action)
  }



  render() {
    return <TodoListUI 
      inputValue={this.state.inputValue}
      handleInputChange={this.handleInputChange}
      handleBtnClick={this.handleBtnClick}
      list={this.state.list}
      handleItemDelete={this.handleItemDelete}
      />
  }
}
export default TodoList