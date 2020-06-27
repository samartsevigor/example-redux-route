import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import { addUser } from "./redux/reducers/data";

const AddUser = () => {
  const [id, setId] = useState('')
  const dispatch = useDispatch()
  return (
    <div>
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={() => dispatch(addUser(id))}>Add</button>
    </div>
  )
}

export default AddUser