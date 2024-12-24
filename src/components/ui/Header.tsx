import { Flex, Image } from "@chakra-ui/react";
import logo from "../../assets/images/logo-large.svg";
const Header = () => {
  return (
    <Flex
      px={500}
      py={300}
      justifyContent={"center"}
      bg="grey.900"
      borderBottomRadius={"8px"}
      display={["flex", "flex", "flex", "none"]}
    >
      <Image src={logo} alt={"logo"} />
    </Flex>
  );
};

export default Header;
