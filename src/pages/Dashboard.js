import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config';
import Hero from '../components/account/Hero'
import Users from '../components/users/Users';
import Admin from '../components/users/Admin';
import Guests from '../components/users/Guests';

const Dashboard = () => {

  const navigate = useNavigate()

  // LOGOUT FUNCTION
  const logoutApp = () => {
    auth.signOut();
    navigate('/login')

  };

  return (
    <>
      <Hero />
      <Users />
      {/* <Admin />
      <Guests /> */}
    </>
  )
}

export default Dashboard
{/* <button className={buttontw} onClick={logoutApp}>Logout</button> */ }