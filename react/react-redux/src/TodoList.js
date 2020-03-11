import React, { Component } from 'react'
// import store from './store/index'
import { connect } from 'react-redux'

class TodoList extends Component {
    render () {
        return(
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.changeInputValue}/>
                    <button>提交</button>
                </div>
            <ul>
        <li>hahaha</li>
            </ul>
            </div>
        )
    }
}
//mapStateToProps 翻译为中文就是遍历state数据给props,这样就能通过props直接用数据
 const mapStateToProps = (state) => {
     return {
         inputValue: state.inputValue
     }
 }


 const mapDispatchToProps = (dispatch) =>{ //把 store.dispatch方法 映射到props
     return {
        changeInputValue (e) {
           const action ={
               type:'change_input_value',
               value: e.target.value
           }
           console.log(e.target.value)
            dispatch(action)
        }
     }
 }
 //  connect 是连接
 // TodoList 和 store 做连接
 //mapStateToProps 的参数就是store里面的数据 该方法会帮我们把store映射到当前的props


export default connect(mapStateToProps, mapDispatchToProps) (TodoList)