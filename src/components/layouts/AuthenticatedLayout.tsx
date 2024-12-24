import { Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../ui/Sidebar";

type Props = {
  children: React.ReactNode;
};

const AuthenticatedLayout = ({ children }: Props) => {
  return (
    <Flex justifyContent={"space-between"} flex={1}>
      <Sidebar />
      <Flex alignItems={"flex-start"} flex={1}>
        {children}
      </Flex>
    </Flex>
  );
};

export default AuthenticatedLayout;
