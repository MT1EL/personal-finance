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
      <Flex
        px={[200, 500]}
        py={[300, 400]}
        display={"flex"}
        flex={1}
        flexDirection={"column"}
        gap={400}
        // maxW={"1040px"}
        overflowX={"hidden"}
        mx="auto"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default AuthenticatedLayout;
