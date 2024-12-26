import { Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../ui/Sidebar";

type Props = {
  children: React.ReactNode;
};

const AuthenticatedLayout = ({ children }: Props) => {
  return (
    <Flex justifyContent={"space-between"} flex={1} mb={["60px", "60px", 0]}>
      <Sidebar />

      {children}
    </Flex>
  );
};

export default AuthenticatedLayout;
