import { useState } from 'react'
import Login from '../components/account/Login'
import Register from '../components/account/Register'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

const Account = () => {
  const [user, setUser] = useState({})
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showRegister, setShowRegister] = useState(false)

  //   LOGIN FUNCTION
  const login = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
      alert('Wrong Credentials!');
    }
  };

  // PREVENTS USER TO AUTOMATICALLY LOGOUT
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <>
      {!showRegister &&
        <Login setEmail={setEmail}
          setPassword={setPassword}
          setShowRegister={setShowRegister}
          login={login} />}
      {showRegister && <Register />}
      {user && <h1 className='text-4xl'>Welcome {user}</h1>}
    </>
  )
}

export default Account