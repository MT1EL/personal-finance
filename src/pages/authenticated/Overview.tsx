import { Button, Flex, Text } from "@chakra-ui/react";
import { getAuth } from "firebase/auth";

const Overview = () => {
  return (
    <Flex gap={200} p={200}>
      <Text>Overview</Text>
      <Button
        colorScheme={"teal"}
        onClick={() => {
          getAuth().signOut();
        }}
      >
        Log out
      </Button>
    </Flex>
  );
};

export default Overview;
