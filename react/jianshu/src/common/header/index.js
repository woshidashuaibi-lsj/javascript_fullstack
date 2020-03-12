import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            focused: false,
            click1: true,
            click2: false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this)
        this.bindleInputBlur = this.bindleInputBlur.bind(this)
        this.handleClick1 = this.handleClick1.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
    }
    handleInputFocus() {
        this.setState({
            focused: true
        })
    }
    bindleInputBlur() {
        this.setState({
            focused: false
        })
    }
    handleClick1() {
        this.setState({
            click1: true,
            click2: false
        })
    }
    handleClick2() {
        this.setState({
            click1: false,
            click2: true
        })
    }
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem
                        className={this.state.click1 ? 'left active' : 'left'}
                        onClick={this.handleClick1}
                    ><span className="iconfont">&#xe60d;</span>首页</NavItem>
                    <NavItem className={this.state.click2 ? 'left active' : 'left'}
                        onClick={this.handleClick2}><span className="iconfont">&#xe6d4;</span>下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right"><span className="iconfont">&#xe904;</span></NavItem>
                    <SearchWrapper>
                        <CSSTransition timeout={200} in={this.state.focused} classNames="slide">
                            {/* slide-enter  slider-enter-active slide-exit slide-sxit-active */}
                            <NavSearch
                                className={this.state.focused ? 'focused' : ''}
                                onFocus={this.handleInputFocus}
                                onBlur={this.bindleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <span className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe63f;</span>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writting"><span className="iconfont">&#xe7c2;</span>写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header