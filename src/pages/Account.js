import { useState } from 'react'
import Login from '../components/account/Login'
import Register from '../components/account/Register'

const Account = () => {
  const [showRegister, setShowRegister] = useState(false)

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

export default Account