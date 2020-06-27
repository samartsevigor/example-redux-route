import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/user">One user</Link>
        <Link to="/allusers">All users</Link>
      </div>
    </nav>
  )
}
export default Navbar