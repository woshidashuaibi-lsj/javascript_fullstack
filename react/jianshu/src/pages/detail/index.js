import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { withRouter } from 'react-router-dom'
import {
  DetailWrapper,
  Header,
  Content
} from './style'

class Detail extends Component {
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }
  render() {
      console.log(this.props.match.params.id)
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
      </DetailWrapper>
    )
  }
}

const mapState = (state) => ({
  title: state.detail.get('title'),
  content: state.detail.get('content')
})

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    let action = actionCreators.getDetail(id)
    action(dispatch)
  }
})

export default connect(mapState, mapDispatch)(withRouter(Detail))