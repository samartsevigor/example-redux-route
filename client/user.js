import React from 'react'
import {useSelector} from "react-redux";

const User = () => {
  const user = useSelector((s) => s.data.user)
  return (
    <div>
      <div>{user.name}</div>
      <div>{user.username}</div>
      <div>{user.email}</div>
    </div>
  )
}

export default User