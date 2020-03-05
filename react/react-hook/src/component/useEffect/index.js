// 副作用 hooks模式下状态（state）发生变更的时候提供给我们的额外操作的变更
import React , { Component } from 'react'

class Example extends Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 0
        }
        // this.addCount=this.addCount.bind(this)
    }

    componentDidMount() {
        console.log(`componentDidMount => 你点击了 ${this.state.count} 次`)
    }
    componentDidUpdate() {
        console.log(`componentDidMount => 你点击了 ${this.state.count} 次`)
    }

    addCount () {
        this.setState ({
            count: this.state.count + 1
        }) 
    }


    render () {
        return (
            <div>
                <p>你点了{this.state.count}次</p>
                <button onClick={this.addCount.bind(this)}>click me</button>
            </div>
        )
    }
}

export default Example
