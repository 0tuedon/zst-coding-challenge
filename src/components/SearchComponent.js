import { Input, InputGroup, InputLeftElement, Image, FormControl } from "@chakra-ui/react";

const SearchComponent = (props) => {
  return (
    <FormControl>
    <InputGroup {...props} maxW="80%" h="3rem">
      <InputLeftElement h="3rem" paddingLeft="15px" cursor="pointer">
        <Image src="icons/search-icon.svg" w="1rem" h="1rem" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder={props?.placeholder || "Search for real estate"}
        bg="#fff"
        color="canta-grey.600"
        borderRadius="20px"
        outline="none"
        border="none"
        h="3rem"
        value={props.search}
        onChange={ e=>{props.setSearch(e.target.value)}}
        name={'search'}
        fontSize="14px"
        paddingLeft="45px"
        fontWeight="400"
        _placeholder={{
          color: "#85878D",
          fontWeight: "400",
          fontSize: "12px",
          lineHeight: "20px",
          letterSpacing: "wide",
        }}
      />
    </InputGroup>
    </FormControl>
  );
};

export default SearchComponent;
