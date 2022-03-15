
import React, { useEffect, useState } from 'react'
import { Box, Flex, Heading} from '@chakra-ui/react'
import Cookie from 'js-cookie'
import {realEstate} from '../data/data'
import ContactModal from '../components/ContactModal'
import Login from '../components/Login'
import SearchComponent from '../components/SearchComponent'
import Listing from '../components/Listing'


const Home = () => {
  const [contactModal, setContactModal] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState("")
  const userLogged = Cookie.get("user")
  useEffect(()=>{
    // Check if something is in cookie 
    let user = Cookie.get("user")
    // if there, set login to true since it is only one component no need for context
    if(user)
    {
      setIsLoggedIn(true)
    }
    else{
      setIsLoggedIn(false)
    }
    // if not 
    // set to false then that modal will pop up blurring all backgrounds

  },[userLogged])
  const filterListings =  realEstate.filter(data=>data.name.includes(search))
  return (
    
    <>
    <Box w={"60%"} p={"5"}  filter={(contactModal || !isLoggedIn) && "blur(10px)"} overflowX={"hidden"}>
      <SearchComponent search={search} setSearch={setSearch}/>
      <Heading mt={"4"}>
        Listings
      </Heading>
     {!search.length > 1? <Flex flexDir={"column"} rowGap={"3"} mt={"4"}>
        {realEstate?.map(data => <Listing contact={setContactModal} key={data?.id} data={data} />)}
      </Flex>:<Flex flexDir={"column"} rowGap={"3"} mt={"4"}>
        {filterListings?.map(data => <Listing contact={setContactModal} key={data?.id} data={data} />)}
      </Flex>}
    </Box>
    {contactModal ? (
          <ContactModal  setContactModal={setContactModal} />
        ) : null}
        {!isLoggedIn&&<Login setIsLoggedIn={setIsLoggedIn}/>}
    </>
  )
}

export default Home