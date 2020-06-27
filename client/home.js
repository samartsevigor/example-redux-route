import React from "react"
import {Route} from "react-router-dom";
import Navbar from './navbar'
import AddUser from "./myUsers";
import User from "./user";
import AllUsers from "./all-users";

const Home = () => {
  return (
    <div>
      <Navbar />
      <AddUser />
      <Route exact path='/user' component={() => <User />} />
      <Route exact path='/allusers' component={() => <AllUsers />} />
    </div>
  )
}

export default Home