import { Button } from "@chakra-ui/react";
import { getAuth } from "firebase/auth";

const PageNotFound = () => {
  return <Button onClick={() => getAuth().signOut()}>Sign out</Button>;
};

export default PageNotFound;
