import { withRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Link from 'next/link'
// import Comp from '../components/comp'
import Head from 'next/head'
import styled from 'styled-components'
// import moment from 'moment'

const Comp1 = dynamic(import('../components/comp'))


const Title = styled.h1`
  color:yellow;
  font-size:40px;
`

const color = '#113366'

const A= ({ router, name,time }) =>(
<>
<Title>this is title {time}</Title>
<Comp1/>
<Link href="#aaa">
    <a className="link">{router.query.id}{name}</a>
</Link>
<style jsx>{`
  a {
      color: blue; 
  }
  .link {
      color: ${color};
  }
`}</style>

</>
)

A.getInitialProps = async(ctx) => {   //没有跳来我A页面的时候此处的getInitialProps不会执行
    // console.log('-------------------')
    const moment = await import('moment')

    const promise =new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve({
                name: 'wn',
                time: moment.default(Date.now() -60 *1000).fromNow()
            })
        },1000)
    })
    return await promise
}



export default withRouter(A)