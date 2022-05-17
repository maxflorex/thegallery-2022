import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config';
import { buttontw } from '../style/styles';

const Dashboard = () => {

  const navigate = useNavigate()

  // LOGOUT FUNCTION
  const logoutApp = () => {
    auth.signOut();
    navigate('/login')

  };

  return (
    <div className='text-4xl'>
      {/* {user !== null ? (
        <div className='p-8'>
          <h1>{user.displayName}</h1>
          <h1>{user.email}</h1>
          <img src={user.photoURL} alt="Profile" className='rounded-xl' />
        </div>) : 'Go log yourself!'} */}
      <button className={buttontw} onClick={logoutApp}>Logout</button>
    </div>
  )
}

export default Dashboard