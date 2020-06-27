import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import store from './redux/index'
import Home from "./home";


const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={() => <Home />} />
          <Route exact path='/user' component={() => <Home />} />
          <Route exact path='/allusers' component={() => <Home />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default Root