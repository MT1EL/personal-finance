import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import illustration from "../../assets/images/illustration-authentication.svg";
import logo from "../../assets/images/logo-large.svg";
import Header from "../ui/Header";

type Props = {
  children: React.ReactNode;
};

const UnauthenticatedLayout = ({ children }: Props) => {
  return (
    <Flex
      flexDirection={["column", "column", "column", "row"]}
      justifyContent={"center"}
      flex={1}
    >
      <Header />
      <Box p={250} maxH={"100vh"} display={["none", "none", "none", "block"]}>
        <Box position={"relative"} h={"100%"}>
          <Image
            src={illustration}
            alt="illustration"
            width={"100%"}
            height={"100%"}
            objectFit={"cover"}
            borderRadius={"12px"}
          />
          <Flex
            p={500}
            position={"absolute"}
            inset={"0 0 0 0"}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Image src={logo} alt={"logo"} maxW={"121.45px"} maxH={"21.76px"} />
            <VStack spacing={200}>
              <Text textStyle={"text1"} color={"white"}>
                Keep track of your money and save for your future
              </Text>
              <Text textStyle={"text4"} color={"white"}>
                Personal finance app puts you in control of your spending. Track
                transactions, set budgets, and add to savings pots easily.
              </Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      <Flex
        px={[200, 500]}
        py={[300, 400]}
        justifyContent={"center"}
        alignItems={"center"}
        flex={1}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default UnauthenticatedLayout;
