import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import SideBar from './SideBar'

const Routing = () => {
  return (
    <>
    <SideBar/>
    <Routes>
        <Route path='/' index element={<Home/>}/>
    </Routes>
    </>
    

  )
}

export default Routing