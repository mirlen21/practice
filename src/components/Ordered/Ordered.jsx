import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUser } from '../../store/reducers/auth.reducer'
import styles from './Ordered.css'

function Login() {
  const [user, setUser] = useState({
    identifier: '',
    password: ''
  })
  const dispatch = useDispatch()
  const changeHandler = e => {
    console.log(user);
    setUser(user => {
      return {
        ...user,
        [e.target.name]: e.target.value
      }
    })
  }
  const submitHandler = e => {
    e.preventDefault()
    dispatch(fetchUser(user))
  }
  return (
    <div className={styles.auth}>
     
    </div>
  )
}

export default Login