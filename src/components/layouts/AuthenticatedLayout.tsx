import { Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../ui/Sidebar";

type Props = {
  children: React.ReactNode;
};

const AuthenticatedLayout = ({ children }: Props) => {
  return (
    <Flex justifyContent={"space-between"}>
      <Sidebar />
      {children}
    </Flex>
  );
};

export default AuthenticatedLayout;
