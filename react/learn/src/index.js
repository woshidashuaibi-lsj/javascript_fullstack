//入口
import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
// class App extends React.Component {
//     render () {
//     return <div>
//             hello {this.props.name}, i am {9 + 9} years old 
//           </div>
//     }
// }


//state
class Counter extends React.Component {
    constructor (props) {
        //初始化构造器时设置内部状态 num值为一
        super(props)
        this.state = {
            num: 1
        }
        this.handleClick =this.handleClick.bind(this)
    }
    //生命周期方法， 组件渲染完成
    componentDidMount () {
        console.log('componentDidMount 函数触发')
    }
    //生命周期方法， 避免组件重复或者无意义的渲染
    shouldComponentUpdate (nextProps, nextState) {
    //    console.log (nextProps, nextState)
    if (nextState.num%2) {
        return true
    }
    return false
    }
    handleClick () {
       console.log(123)
       this.setState({
           num: this.state.num + 1
       })
    }
    render () {
        return (
            <div>
              <p>{this.state.num}</p>
              <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter/>,document.querySelector('#root'))