import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import {actionCreators}  from './store'
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



const Header = (props) =>{
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem
                        className={props.click1 ? 'left active' : 'left'}
                        onClick={props.handleClick1}
                    ><span className="iconfont">&#xe60d;</span>首页</NavItem>
                    <NavItem className={props.click2 ? 'left active' : 'left'}
                        onClick={props.handleClick2}><span className="iconfont">&#xe6d4;</span>下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right"><span className="iconfont">&#xe904;</span></NavItem>
                    <SearchWrapper>
                        <CSSTransition timeout={200} in={props.focused} classNames="slide">
                            {/* slide-enter  slider-enter-active slide-exit slide-sxit-active */}
                            <NavSearch
                                className={props.focused ? 'focused' : ''}
                                onFocus={props.handleInputFocus}
                                onBlur={props.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe63f;</span>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writting"><span className="iconfont">&#xe7c2;</span>写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
}
// class Header extends Component {
//     constructor(props) {
//         super(props)
//         this.handleInputFocus = this.handleInputFocus.bind(this)
//         this.bindleInputBlur = this.bindleInputBlur.bind(this)
//         this.handleClick1 = this.handleClick1.bind(this)
//         this.handleClick2 = this.handleClick2.bind(this)
//     }
//     handleInputFocus() {
//         this.setState({
//             focused: true
//         })
//     }
//     bindleInputBlur() {
//         this.setState({
//             focused: false
//         })
//     }
//     handleClick1() {
//         this.setState({
//             click1: true,
//             click2: false
//         })
//     }
//     handleClick2() {
//         this.setState({
//             click1: false,
//             click2: true
//         })
//     }
//     render() {
//         return (
//             <HeaderWrapper>
//                 <Logo />
//                 <Nav>
//                     <NavItem
//                         className={this.props.click1 ? 'left active' : 'left'}
//                         onClick={this.props.handleClick1}
//                     ><span className="iconfont">&#xe60d;</span>首页</NavItem>
//                     <NavItem className={this.props.click2 ? 'left active' : 'left'}
//                         onClick={this.props.handleClick2}><span className="iconfont">&#xe6d4;</span>下载App</NavItem>
//                     <NavItem className="right">登录</NavItem>
//                     <NavItem className="right"><span className="iconfont">&#xe904;</span></NavItem>
//                     <SearchWrapper>
//                         <CSSTransition timeout={200} in={this.props.focused} classNames="slide">
//                             {/* slide-enter  slider-enter-active slide-exit slide-sxit-active */}
//                             <NavSearch
//                                 className={this.props.focused ? 'focused' : ''}
//                                 onFocus={this.props.handleInputFocus}
//                                 onBlur={this.props.handleInputBlur}
//                             ></NavSearch>
//                         </CSSTransition>
//                         <span className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe63f;</span>
//                     </SearchWrapper>
//                 </Nav>
//                 <Addition>
//                     <Button className="writting"><span className="iconfont">&#xe7c2;</span>写文章</Button>
//                     <Button className="reg">注册</Button>
//                 </Addition>
//             </HeaderWrapper>
//         )
//     }
// }

const mapStateToProps =(state) => {
    return{
        focused:state.header.get('focused'),
        click1:state.header.get('click1'),
        click2:state.header.get('click2')
    }
}
//store.dispath===>props
const mapDispatchToProps = (dispatch) => {
    return{
      handleInputFocus() {
          dispatch(actionCreators.searchFocus())
      },
      handleInputBlur() {
        dispatch(actionCreators.searchBlur())
      },
      handleClick1() {
        dispatch(actionCreators.iconClick1())
      },
      handleClick2() {
        dispatch(actionCreators.iconClick2())
      },
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Header)