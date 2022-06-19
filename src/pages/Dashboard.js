import React from 'react'
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import Hero from '../components/account/Hero'
import Users from '../components/users/Users';

const Dashboard = () => {

  const user = useSelector((state) => state.user.user)

  return (
    <>
      <Hero />
      {user?.email === 'prints@artcaymanco.com' &&
        <Users />
      }
      {/* <Admin />
      <Guests /> */}
    </>
  )
}

export default Dashboard