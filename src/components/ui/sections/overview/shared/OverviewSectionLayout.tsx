import { Flex } from "@chakra-ui/react";
import OverviewSectionTitle from "./OverviewSectionTitle";
import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
};

const OverviewSectionLayout = ({ children, title }: Props) => {
  return (
    <Flex
      px={[250, 400]}
      py={[300, 400]}
      flexDirection={"column"}
      gap={250}
      borderRadius={"12px"}
      bg={"white"}
      w={"100%"}
      height={"100%"}
    >
      <OverviewSectionTitle title={title} />
      {children}
    </Flex>
  );
};

export default OverviewSectionLayout;
