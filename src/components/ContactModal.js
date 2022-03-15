import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Image,
    Input,
    InputGroup,
    Text,
    Textarea,
  } from "@chakra-ui/react";
import {  useFormik } from "formik";
import * as Yup from 'yup'
  import React from "react";
  
  const ContactModal = (props) => {
    const { setContactModal,data } = props;
    const handleSubmit = ()=>{
      setContactModal(false)
    }
    const validateSchema = Yup.object({
      email:Yup.string().required(),
      fullName:Yup.string().required(),
      message:Yup.string().required()
    })
    const formik = useFormik({
      initialValues:{
        email:"",
        fullName:"",
        message:""
      },
      onSubmit:handleSubmit,
      validationSchema:validateSchema
    })
    return (
      <>
        <Box
          as="section"
          position="absolute"
          zIndex="99"
          inset="0"
          bg="rgba(0, 0, 0, 0.4)"
          
        >
          <Box
            as="aside"
            bg="#fff"
            position="fixed"
            right="0"
            top="0"
            bottom="0"
            maxW="29.3125rem"
            boxShadow="0px 4px 88px rgba(181, 181, 181, 0.31)"
          >
            <Flex flexDir="column" p="4rem" letterSpacing="wide">
              <HStack justify="space-between" mb={"3rem"}>
                <Text
                  color="canta-grey.600"
                  fontWeight="500"
                  fontSize="1.625rem"
                  lineHeight="36px"
                >
                  Contact Modal
                </Text>
                <Flex
                  as="picture"
                  cursor="pointer"
                  width="20px"
                  height="20px"
                  borderRadius="50%"
                  transition="all 0.2s ease-in-out"
                  _hover={{
                    color: "#fff",
                    opacity: ".9",
                  }}
                  _active={{
                    transform: "scale(.95)",
                  }}
                  onClick={(e) =>{ e.preventDefault();setContactModal(false)}}
                >
                  <Image src="svgs/close-solid.svg" w="100%" />
                </Flex>
              </HStack>
            
              <FormControl>
                <FormLabel
                  htmlFor="amount"
                  fontSize="0.75rem"
                  lineHeight="16px"
                  color="canta-grey.800"
                >
                  Email
                </FormLabel>
                <InputGroup>
                <Input
                  name="email"
                  type={"email"}
                  disabled
                  value={data?.contact?.email}
                  id="email"
                  mb="1.5rem"
                  borderRadius="10px"
                  _placeholder={{
                    fontSize: "14px",
                    color: "#85878D",
                    letterSpacing: "wide",
                    lineHeight: "20px",
                  }}
                  borderRight={"none"}
                />
                </InputGroup>
                <FormLabel
                  htmlFor="currency"
                  fontSize="0.75rem"
                  lineHeight="16px"
                  color="canta-grey.800"
                >
                  Name
                </FormLabel>
                <InputGroup>
               
                <Input
                  name="fullName"
                  id="name"
                  placeholder="Name"
                  mb="1.5rem"
                  borderRadius="10px"
                  _placeholder={{
                    fontSize: "14px",
                    color: "#85878D",
                    letterSpacing: "wide",
                    lineHeight: "20px",
                  }}
                  borderRight={"none"}
                />
            
                 </InputGroup>
                <FormLabel
                  htmlFor="rate"
                  fontSize="0.75rem"
                  lineHeight="16px"
                  color="canta-grey.800"
                >
                  Message
                </FormLabel>
                <Textarea name="message"></Textarea>
                {(formik.touched.message && formik.errors.message) && <Text color={"red"} fontSize={"12px"}>
                  {formik.errors.message}
                  </Text>}
                <Button
                mt={"3"}
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
            formik.handleSubmit(formik.values)
            }}
          >
             Contact Me
          </Button>
              </FormControl>
            </Flex>
          </Box>
        </Box>
      </>
    );
  };
  
  export default ContactModal;
  