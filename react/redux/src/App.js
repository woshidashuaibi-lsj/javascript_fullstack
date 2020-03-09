//Redux = flux + Reduce

import React , { Component } from 'react'
import { Input,Button,List } from 'antd' 
import 'antd/dist/antd.css'
import store from './store/index.js'
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './store/actionTypes'
//store 的创建

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state=store.getState()
    // console.log(this.state)
    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleStoreChange=this.handleStoreChange.bind(this)
    this.handleBtnClick=this.handleBtnClick.bind(this)
    store.subscribe(this.handleStoreChange)//只要store里面的数据发生变化，实时获取
  }

  handleInputChange (e) {
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    }
    store.dispatch(action)  //让管理员听到这句话
  }

  handleStoreChange () {
    // console.log('change')
    this.setState(store.getState())
  }

  handleBtnClick () {
    const action ={
      type:ADD_TODO_ITEM,
    }
    store.dispatch(action)
  }


  handleItemDelete (index) {
    console.log(index)
    const action ={
      type: DELETE_TODO_ITEM,
      index: index
    }
    store.dispatch(action)
  }



  render() {
    return(
      <div style={{marginLeft:'10px',marginTop:'10px'}}>
        <div>
          <Input
           value={this.state.inputValue}
           placeholder="too info"
           style={{width:'300px' ,marginRight: '10px'}}
           onChange={this.handleInputChange}
           />
          <Button type="primary"onClick={this.handleBtnClick}>提交</Button>
        </div>
        <List 
          style={{marginTop:'10px',width:'300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item,index )=> (
            <List.Item onClick={this.handleItemDelete.bind(this,index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}
export default TodoList