import React, { useState } from "react";
import { Box, Image, Text, Flex, Link, Button } from "@chakra-ui/react";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const Listing = (props) => {
  const { data,contact } = props;
  const [liked, setLiked] = useState(false);
  return (
    <Box
      d={"flex"}
      flexDir={["column","column","row"]}
      bg={"#fff"}
    
      columnGap={"8"}
      shadow={"md"}
      p={["5","5","3"]}
      rounded={"lg"}
      boxSizing={"border-box"}
     

    >
      <Box>
        <Image src={data.imagePath} rounded={"lg"} w={"300px"} />
      </Box>
      <Box d={"flex"} flexDir={"column"}>
        <Flex>
          <Text fontWeight={"700"} fontSize={"xl"}>
            {data?.name}
          </Text>
        </Flex>
        <Text>{data?.rating} star rating</Text>
        <Box>
          <Text fontWeight={"600"} fontSize={"lg"}>
            Contact
          </Text>
          <Flex columnGap={"3"}>
            <Image src={"/svgs/contact.svg"} />
            <Text>{data?.contact?.name}</Text>
          </Flex>
          <Flex columnGap={"3"} alignItems={"center"}>
            <BsFillTelephoneForwardFill />
            <Link href={`tel:${data?.contact?.phoneNumber}`}>
              {data?.contact?.phoneNumber}
            </Link>
          </Flex>
          <Text mt={"4"} color={"purple"} fontWeight={"500"}>
            {data.desc}
          </Text>
          {/* Google map intergration here */}
        </Box>
        {/* Like Button */}
        <Flex>
          <Button
            bg={"none"}
            textAlign={"left"}
            _active={{
              background: "none",
              color: "black",
              transition: "all ease-out 0.2s",
              transform: "scale(.6)",
            }}
            _hover={{
              background: "none",
              transition: "all ease-in 0.2s",
              color: "black",
              transform: "scale(1.2)",
            }}
            onClick={(e) => {
              e.preventDefault();
              setLiked((prev) => !prev);
            }}
          >
            {liked ? <AiFillHeart size={30} /> : <AiOutlineHeart size={30} />}
          </Button>
          <Button
            bg={"black"}
            _hover={{
              background: "none",
              color: "black",
              outline: "none",
              border: "none",
              transform: "scale(1.2)",
            }}
            color={"white"}
            _active={{
              background: "none",
              border: "none",
              color: "black",
              transform: "scale(.6)",
            }}
            onClick={(e) => {
              e.preventDefault();
              contact(true);
              console.log("mud")
            }}
          >
            Open Contact
          </Button>
        </Flex>
        
      </Box>
    </Box>
  );
};

export default Listing;
