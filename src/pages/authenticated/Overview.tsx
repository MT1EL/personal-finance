import { Button } from "@chakra-ui/react";
import { getAuth } from "firebase/auth";

const Overview = () => {
  return (
    <Button
      colorScheme={"teal"}
      onClick={() => {
        getAuth().signOut();
      }}
    >
      Log out
    </Button>
  );
};

export default Overview;
