import React, { Component } from 'react'
import { actionCreators }  from './store'

import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style'


class Login extends Component {
    render() {
        const { loginState } = this.props 
        
        if (!loginState){
            return(
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" ref={(input) =>{this.account = input}}></Input>
                        <Input placeholder="密码" type='password' ref={(input) =>{this.password = input}}></Input>
                        <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return<Redirect to="/" />
        }
        
    }
}

const mapState = (state) => ({
  loginState: state.login.get('login')
})


const mapDispatch = (dispatch) => ({
   login (accountElement,passwordElement) {
    //    console.log(accountElement.value,passwordElement.value);
    const action =actionCreators.login(accountElement.value,passwordElement.value)
    action(dispatch)
   }
  })

export default connect(mapState, mapDispatch) (Login)