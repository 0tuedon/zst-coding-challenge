import React from 'react'
import { Route, Routes,  } from 'react-router'
import {Flex} from '@chakra-ui/react'
import Home from '../pages/Home'
import SideBar from './SideBar'

const Routing = () => {
  return (
    <>
        <Flex
      w="100%"
      minH={"100vh"}
      justifyContent="space-evenly"
      px={"0"}
      m={0}
      bg={"#EEEEEE"}
      letterSpacing="normal"
    >
    <SideBar/>
    <Routes>
        <Route path='/' index element={<Home/>}/>
    </Routes>
    </Flex>
    </>
    

  )
}

export default Routing