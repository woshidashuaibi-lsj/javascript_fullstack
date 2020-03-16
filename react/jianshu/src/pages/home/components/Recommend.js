import React, { Component } from 'react'
import { RecommendWrapper,RecommendItem } from '../style'
import { connect } from 'react-redux'

class Recommend extends Component {
    render() {
        return (
            <div>
                <RecommendWrapper>
                    {
                       this.props.list.map((item) => {
                           return(
                            <RecommendItem imgUrl={item.get('imgUrl')}  key={item.get('id')}/>
                           )
                       })
                    }
                </RecommendWrapper>
            </div>
        )
    }
}


const mapStete =(state) => ({
    list: state.home.get('recommendList')
})
export default connect(mapStete, null)(Recommend)