import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Input,
    InputGroup,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import { useFormik } from "formik";
  import * as Yup from 'yup'
  import jsCookie from "js-cookie";
  const LoginModal = (props) => {
    const { setIsLoggedIn} = props;
    const handleSubmit = (val)=>{
      jsCookie.set("user", JSON.stringify(val))
      jsCookie.set("email",val.email)
      setIsLoggedIn(true)
      
      
    }
    const validateSchema = Yup.object({
      username:Yup.string().required().min(3,"invalid format"),
      password:Yup.string().required().min(3,"invalid format")
    })
    const Formik = useFormik({
      initialValues:{
        username:"",
        password:""
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
                  Login Modal
                </Text>
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
                   name="username"
                   id="username"
                   value={Formik.values.username}
                   onChange={Formik.handleChange}
                   onBlur={Formik.handleBlur}
                    placeholder={"Sam123"}
                  mb={Formik.errors.username && "1.2rem"}
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
                {(Formik.touched.username && Formik.errors.username) && <Text color={"red"} fontSize={"12px"}>
                  {Formik.errors.username}  </Text>
                }
                <FormLabel
                  htmlFor="currency"
                  fontSize="0.75rem"
                  lineHeight="16px"
                  color="canta-grey.800"
                >
                  username
                </FormLabel>
                <InputGroup>
               
                <Input
                  name="password"
                  id="password"
                  type={"password"}
                  value={Formik.values.password}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                  placeholder="password"
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
                 {(Formik.touched.password && Formik.errors.password) && <Text color={"red"} fontSize={"12px"}>
                  {Formik.errors.password}
                  </Text>}
                <Button
                onClick={(e) =>{ e.preventDefault(); Formik.handleSubmit(Formik.values)}}
                  fontSize="0.85rem"
                  lineHeight="20px"
                  letterSpacing="wide"
                  bg={"purple"}
                  width="100%"
                  mt="1.5rem"
                  _hover={{
                    background: "canta-blue.900",
                    color: "#fff",
                  }}
                  _active={{
                    background: "canta-blue.900",
                    transform: "scale(.95)",
                  }}
                  _focus={{ background: "canta-blue.900" }}
                >
                  Login
                </Button>
              </FormControl>
            </Flex>
          </Box>
        </Box>
      </>
    );
  };
  
  export default LoginModal;
  