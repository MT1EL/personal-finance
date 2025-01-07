import { Flex, Image, Text } from "@chakra-ui/react";
import caretRight from "@/assets/images/icon-caret-right.svg";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  title: string;

  size?: string;
  hasTitle?: boolean;
};

const OverviewSectionLayout = ({ children, title, size, hasTitle }: Props) => {
  return (
    <Flex
      px={size === "sm" ? [200, 250] : [250, 400]}
      py={size === "sm" ? [200, 250] : [300, 400]}
      flexDirection={"column"}
      gap={250}
      borderRadius={"12px"}
      w={"100%"}
      height={"100%"}
      bg={size === "sm" ? "beige.100" : "white"}
    >
      {hasTitle !== false && (
        <Link to={`/${title.toLowerCase().split(" ").join("-")}`}>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Text
              textStyle={size === "sm" ? "text3" : "text2"}
              color={"grey.900"}
            >
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
      )}

      {children}
    </Flex>
  );
};

export default OverviewSectionLayout;
