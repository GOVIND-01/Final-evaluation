import React from 'react'
import {Route , Routes} from 'react-router-dom'
import { Home } from '../Components/Home'
import { Login } from '../Components/Login'
import { Sign } from '../Components/Sign'

export const Routeing = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
        <Route path='/sign' element={<Sign/>} />
    </Routes>

    </>
  )
}
