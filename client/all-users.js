import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setUsers} from "./redux/reducers/data";

const AllUsers = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setUsers())
    console.log('test')
  }, [])
  const users = useSelector((s) => s.data.users)
  return (
    <div>
      {
        users.map((user) => (
          <div>
            <div>{user.name}</div>
            <div>{user.username}</div>
            <div>{user.email}</div>
          </div>
        ))
      }
    </div>
  )
}

export default AllUsers