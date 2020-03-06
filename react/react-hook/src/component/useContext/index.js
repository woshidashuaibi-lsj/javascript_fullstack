import React, { Component } from 'react'


class Child extends Component {
    render() {
        return (
            <div>
                <p>父组件传递过来的name:{this.props.name}</p>
            </div>
        );
    }
}



class Parent extends Component {
    constructor (props) {
        super (props)
        this.state= {
            name: 'woniu'
        } 
    }
    render () {
        return (
            <div>
                <p>父组件中的name: {this.state.name}</p>
                <Child name="mengge"></Child>
            </div>
        )
    }
}

export default Parent