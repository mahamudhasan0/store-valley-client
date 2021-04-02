import React from 'react'
import Home from './Home'
import Header from './Header'
import DataTable from './Admin/DataTable'
import Admin from './Admin/Admin'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login/Login'


const App = () => {
  return (
    <div>
    <Router>
    <Header/>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/addproduct' component={DataTable}/>
        <Route exact path='/manageproduct' component={Admin}/>
        <Route exact path='/login' component={Login}/>
     </Switch>
     </Router>
    </div>
  )
}

export default App
