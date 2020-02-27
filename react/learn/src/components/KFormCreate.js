//拥有form表单的布局和提交功能
// fromItem 收集错误信息
//input输入框前增加icon
//提供input 输入框空间提示事件处理，表单校验功能
import React, { Component } from 'react';
import { Icon } from 'antd'

//Hoc: 包装用户单位 增加数据管理和检验
function KFormCreate (Comp) {
    return class NewComp extends Component {
        constructor (props) {
            super(props)

            this.options = {} //字段选项设置
            this.state = {}  // 字段值
        }

      //处理表单输入事件
      handleChange = e => {
          
          this.setState (
              {
                  [name]:value
              },
              () =>{
                  //数据变化后还需要检验//48分钟
                  this.validateField(name)
              }
          )
      }
      validateField = field => {
          const rules= this.options[field].rules
          // 只要任何一样失败就失败
          const ret =rules.some(rule => {
              if(rule.required){
                  //仅检验必填项
                  if(!this.state[field]){
                      //校验失败
                      this.setState({
                        [field + "Message"]: rule.message
                      })
                      return true
                  }
              }
          })
          if(!ret){
              //没失败
              this.setState({[field +"message"]: ''})
          }
          return !ret
      }
    }
}


class FormItem extends Component {
    render () {
        return(
            <div className="formItem">
                {this.props.children}
                {this.props.validateStatus === "error" && (
                    <p style={{color: 'red'}}>{this.props.help}</p>
                )}
            </div>
        )
    }
}
class KInput extends Component {
    render () {
        return (
            <div>
                {this.props.prefix}
                <input {...this.props}/>
            </div>
        ) 
    }
}

@KFormCreate
class KFormSample extends Component {
    onSubmit = () => {
        this.props.validate(isValid => {
            if(isValid) {
                console.log('检验成功，提交登录',this.props.value)
            }else {
                console.log('检验失败')
            }
        })
    }
    render() {
        const { getFieldDec ,isFieldTouched, getFieldError }=this.props
        const userNameError = isFieldTouched('uname') && getFieldError('uname')
        const passwordError = isFieldTouched('pwd') && getFieldError('pwd')
        return (
            <div>
                <FormItem
                 validateStatus={userNameError ? "error" : ''}
                 help={userNameError || ''}>
                  {getFieldDec('uname',{
                      rules: [{required: true, message: '请填写用户名'}]
                    },
                    <KInput type='text' prefix={<Icon type="user"></Icon>}></KInput>
                  )}
                 </FormItem>
                 <FormItem
                 validateStatus={passwordError ? "error" : ''}
                 help={passwordError || ''}>
                  {getFieldDec('pwd',{
                      rules: [{required: true, message: '请填写密码'}]
                    },
                    <KInput type='password' prefix={<Icon type="lock"></Icon>}></KInput>
                  )}
                 </FormItem>

                 <button onClick={this.onSubmit}>登录</button>
            </div>
        );
    }
}

export default KFormSample;