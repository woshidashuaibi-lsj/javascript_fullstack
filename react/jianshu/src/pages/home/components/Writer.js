import React, { Component } from 'react'
import { WriterWrapper, WriterTitle, WriterList, WriterButton } from '../style'
import { connect } from 'react-redux'

class Writer extends Component {
    render() {
        const { list } = this.props
        return (
            <WriterWrapper>
                <WriterTitle>
                    <span className="title">推荐作者</span>
                    <span className="pagechange">换一批</span>
                </WriterTitle>
                {
                    list.map((item) => {
                        return (
                            <WriterList key={item.get('id')}>
                                <img className="pho" src={item.get('imgUrl')} alt="" />
                                <p className="following">{item.get('follow')}</p>
                                <p className="name">{item.get('name')}</p>
                                <p className="src">{item.get('src')}</p>
                            </WriterList>
                        )
                    })
                }
                <WriterButton><p className="find">查看更多</p></WriterButton>
            </WriterWrapper>
        )
    }
}
const mapState = (state) => ({
    list: state.home.get('writerList')
})

export default connect(mapState, null)(Writer)