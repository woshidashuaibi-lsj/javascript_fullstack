import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route , Link } from "react-router-dom"

//react router 其中包含三种类型 
// 1.路由组件 : BrowserRouter  HashRouter
// 2.路由匹配组件 : Route Switch
// 3.导航组件 : Link

function Home() {
  return <h2>Home</h2>
}
function About() {
  return <h2>About</h2>
}

function Topic ({ match }){
return <h3>Requested Param: { match.params.id}</h3>
}


function Topics(props) {
  console.log(props)
  const { match , location} = props
  //react 中的二级路由
  return (
  <div>
    <h2>Topics</h2>
      
    <ul>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:id`} component={Topic}/>
    <Route 
    exact 
    path={location.path} 
    render={() => <h3>please select a topic.</h3>}/>
  </div>
  )
}

function Header () {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/about">About</Link>
      </li>
      <li>
      <Link to="/topics">Topics</Link>
      </li>
    </ul>
  )
}


function App () {
  return (
    <Router>
      <div>
        <Header/>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
      </div>
    </Router>
  )
}


export default App;
