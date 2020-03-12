import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper =styled.div`
position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo =styled.a.attrs({
    href: '/'
})`
  position:absolute;
  top: 0;
  left: 0;
  display: block;
  height: 56px;
  width:100px;
  border-bottom: 1px solid #f0f0f0;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav =styled.div`
  width: 960;
  margin:0 auto;
  height: 100%;
`
export const NavItem= styled.div`
  
`