import { useState } from 'react'
import React from 'react'


function LoginPage(props) {

    const [userLogin, setUserLogin] = useState("")

    function handleUpdate(evt) {
        props.setUser(userLogin)
    }

    function handleInputChange(e) {
        setUserLogin(e.target.value)
    }

  return (
    <form onSubmit={handleUpdate}>
        <input 
            type="email"
            placeholder="Email"
            value={userLogin}
            onChange={handleInputChange}
            required
        />
        <button type='submit'>Login</button>
    </form>
  )
}

export default LoginPage