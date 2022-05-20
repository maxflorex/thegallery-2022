import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config';
import { buttontw } from '../style/styles';
import Hero from '../components/account/Hero'

const Dashboard = () => {

  const navigate = useNavigate()

  // LOGOUT FUNCTION
  const logoutApp = () => {
    auth.signOut();
    navigate('/login')

  };

  return (
    <Hero />
  )
}

export default Dashboard
{/* <button className={buttontw} onClick={logoutApp}>Logout</button> */ }