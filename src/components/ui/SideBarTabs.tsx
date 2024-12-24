import { Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  label: string;
  Icon: React.ElementType;
  isOpen?: boolean;
};

const SideBarTabs = ({ label, Icon, isOpen }: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  const isActive = useLocation().pathname.includes(
    label.toLowerCase().replace(" ", "-")
  );
  return (
    <Flex
      as={Link}
      to={`/${label.toLowerCase().replace(" ", "-")}`}
      height={["100%", "100%", "56px"]}
      gap={[50, 50, 200]}
      alignItems={"center"}
      px={[0, 0, 400]}
      pt={[100, 100, 200]}
      pb={[150, 150, 200]}
      bg={isActive ? "beige.100" : "transparent"}
      borderLeft={["unset", "unset", isActive ? "4px solid green" : "unset"]}
      borderBottom={[
        isActive ? "4px solid green" : "unset",
        isActive ? "4px solid green" : "unset",
        "unset",
      ]}
      borderTopLeftRadius={["8px", "8px", 0]}
      borderTopRightRadius={"8px"}
      borderBottomRightRadius={[0, 0, "8px"]}
      role="group"
      cursor={"pointer"}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      flexDirection={["column", "column", "row"]}
      maxW={["unset", "104px", "unset"]}
      width={"100%"}
    >
      <Icon type={isActive ? "active" : isHovering ? "hover" : "default"} />
      <Text
        textStyle={["text5Bold", "text5Bold", "text3"]}
        color={isActive ? "grey.900" : "grey.300 !important"}
        _groupHover={{
          color: isActive ? "grey.900" : "beige.100",
        }}
        display={["none", "block", isOpen ? "block" : "none"]}
        // display={["none", "none", "block"]}
      >
        {label}
      </Text>
    </Flex>
  );
};

export default SideBarTabs;
