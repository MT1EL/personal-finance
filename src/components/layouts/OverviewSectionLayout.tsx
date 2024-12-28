import { Flex, Image, Text } from "@chakra-ui/react";
import caretRight from "@/assets/images/icon-caret-right.svg";
import React from "react";
import { Link } from "react-router-dom";

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
      <Link to={`/${title.toLowerCase().split(" ").join("-")}`}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Text textStyle={"text2"} color={"grey.900"}>
            {title}
          </Text>
          <Flex gap={150} alignItems={"center"}>
            <Text textStyle={"text4"} color={"grey.500"}>
              {title === "Transactions" ? "View All" : "See details"}
            </Text>
            <Image src={caretRight} />
          </Flex>
        </Flex>
      </Link>

      {children}
    </Flex>
  );
};

export default OverviewSectionLayout;
