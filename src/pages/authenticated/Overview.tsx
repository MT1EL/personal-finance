import { Button, Flex } from "@chakra-ui/react";
import { getAuth } from "firebase/auth";

const Overview = () => {
  return (
    <Flex flex={1} justifyContent={"center"} alignItems={"center"} bg="red">
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
