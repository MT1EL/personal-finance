import { Flex, Text } from "@chakra-ui/react";

const PageNotFound = () => {
  return (
    <Flex flex={1} h={"100%"} alignItems={"center"}>
      <Text textStyle={"text1"} textAlign={"center"} mx="auto">
        404 Page not found
      </Text>
    </Flex>
  );
};

export default PageNotFound;
