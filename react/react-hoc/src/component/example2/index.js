import React, { Component } from 'react'


//HOC 高阶组件

function HOC(WrappedComponent) {
    return class extends Component {
        constructor (props) {
            super(props)
            this.state= {
                name: ''
            }
        }
        onChange = (event) =>{
            this.setState({
                name: event.target.value
            })
            console.log(event.target.value)
        }
        render() {
            const newProps = {
                name: {
                    value: this.state.name,
                    onChange: this.onChange
                }
            }
            return <WrappedComponent {...newProps}/>
        }
    }
}

// 使用
// @HOC
class Example extends Component {
    render () {
        return (
            <input {...this.props.name}/>
        )
    }
}

const TEST= HOC (Example)

export default TEST