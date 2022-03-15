import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import jsCookie from "js-cookie";
export const NavItem = (props) => {
 
  return (
    <Link href={props.route}>
      <Box
        borderRadius={["5px", null, "0"]}
        _hover={{ opacity: 0.9 }}
        _active={{ opacity: 0.8 }}
        h="35px"
        gap="10"
        mt="4"
        w={["15rem", "15rem", "13.3rem"]}
      >
        <Box
          pl={["0", null, "30px"]}
        //   my="auto"
          cursor={"pointer"}
          d="flex"
          {...props}
          h="100%"
          alignItems={"center"}
        >
          <Image my="auto" mr="10px" src={props?.iconActive} h="20px" w="20px" />
          <Text fontSize="12px" fontWeight={400} my="auto">
            {props.name}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

const SideBar = (props) => {
  const logout = ()=>{
    jsCookie.remove("user")
    jsCookie.remove("email")
  }
  const navs = [
    {
      name: "Listings",
      route: "/",
      iconActive:"/svgs/speaker.svg" ,
      iconInActive: "/icons/home-2.svg",
    },
    {
      name: "Dashboard",
      route: "/",
      iconActive: "/svgs/dashboard.svg",
      iconInActive: "/icons/tag-user.svg",
    },
    {
      name: "Providers",
      route: "/",
      iconActive: "/svgs/laptop.svg",
      iconInActive: "/icons/category-outline.svg",
    },
    {
      name: "User",
      route: "/",
      iconActive: "/svgs/users.svg",
      iconInActive: "/svgs/users.svg",
    },
    {
      name: "Billing",
      route: "/",
      iconActive: "/svgs/card.svg",
      iconInActive: "/icons/user-profile-outline.svg",
    },
    {
        name: "Settings",
        route: "/",
        iconActive: "/svgs/setting.svg",
        iconInActive: "/icons/user-profile-outline.svg",
      },
    // user-profile-outline.svg
  ];
  return (
    <Box
      d={["none", null, "block"]}
      p={0}
      m={0}
      position="fixed"
      left={0}
      top={0}
      bottom={0}
      h="100vh"
      w="40%"
      maxW="212px"
      minW="212px"
      shadow={"2xl"}
      letterSpacing="normal"
    >
      <Flex px={"6"} alignItems={"center"} columnGap={"4"} mt={8}>
        <Image color={"blue"} src="/svgs/logo.svg" w={"40px"} />
        <Text fontSize={"2xl"} fontWeight={"semibold"}>Rabbu</Text>
      </Flex>

      <Flex mx="auto" flexDir={"column"}>
        {/* <Box mx='auto'  gap='10' > */}
        {navs.map((nav, index) => (
          <NavItem
            //    mx='auto'
            name={nav?.name}
            iconActive={nav?.iconActive}
            iconinactive={nav?.iconInActive}
            route={nav?.route}
            key={index}
          ></NavItem>
          // </Box>
        ))}
        <Button onClick={e=> {e.preventDefault(); logout()}}>
          Logout
        </Button>
        {/* </Box> */}
        <Box position={"relative"} py={"10"}>
        <Box bg={"#F2F9F2"} mx={"5"} rounded={"lg"} h={""} pt={"16"}>
            <Image src="/svgs/real-estate.svg" width={"8rem"} position={"absolute"} top={"0.5"} left={"20%"}/>
            <Box backgroundImage={"/svgs/R.svg"} backgroundSize={"cover"} mt={""} h={"10rem"} w={"100%"} opacity={"0.7"}> 
            <Box fontSize={"14px"} px={"5"} py={"6"} fontWeight={"600"} color={"blue"}>
            <Text mb={"3"}>Upgrade to Pro</Text>
            <Text>Make the best out of Rabbu with pro</Text>
            <Button bg={"blue"} color={"#fff"} rounded={"md"}>Upgrade</Button>
            </Box>
            
        </Box>
        </Box>
        
        </Box>
            
      </Flex>
    </Box>
  );
};

export default SideBar;
