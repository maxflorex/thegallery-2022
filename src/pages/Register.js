import React, { useState } from 'react'
import Login from '../components/account/Login'
import Register from '../components/account/Register'

const RegisterPage = () => {
 const [showRegister, setShowRegister] = useState(true)

  return (
    <>
      {!showRegister &&
        <Login
          setShow={setShowRegister}
          show={showRegister}
        />}
      {showRegister &&
        <Register setShow={setShowRegister}
          show={showRegister}

        />}
    </>
  )
}

export default RegisterPage