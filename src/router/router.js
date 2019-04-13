import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

function Router01() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/topics">Topics</Link>
      </div>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect from="/about" to="/" />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </Switch>
    </Router>
  )
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
    </div>
  )
}
export default Router01
