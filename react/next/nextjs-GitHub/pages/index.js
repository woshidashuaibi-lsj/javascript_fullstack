// import React from 'react'
// React.createElement('span',{},'hello')
import Link from 'next/link'
import Router from 'next/router'
import { Button } from 'antd'
import store from '../store/store'

const events = [
  'routeChangeStart',
  'routeChangeComplete',
  'routeChangeError',
  'beforeHistoryChange',
  'hashChangeStart',
  'hashChangeComplete'
]

function makeEvent(type) {
  return (...args) => {
    console.log(type, ...args)
  }
}

events.forEach(event => {
  Router.events.on(event,makeEvent(event))
})

export default () => {
  function gotoTestB() {
    Router.push({
      pathname: '/test/b',
      query: {
        id: 2
      }
    }, '/test/b/2')
  }
  return (
    <>
    <span>Index</span>
      {/* <Link href='/a?id=1' as='/a/1'>
        <Button>hello</Button>
      </Link> */}
      {/* <Button onClick={gotoTestB}>test b</Button> */}
    </>
  )
}







// params是路由的一部分,必须要在路由后面添加参数名。
// query是拼接在url后面的参数，没有也没关系。
// params一旦设置在路由，params就是路由的一部分，
// 如果这个路由有params传参，但是在跳转的时候没有传这个参数，会导致跳转失败或者页面会没有内容。