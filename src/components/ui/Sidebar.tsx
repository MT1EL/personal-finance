import { Box, Flex, Image, Text } from "@chakra-ui/react";
import logo from "@/assets/images/logo-large.svg";
import smalllogo from "@/assets/images/logo-small.svg";
import OverViewIcon from "../icons/OverviewIcon";
import TransactionsIcon from "../icons/TransactionsIcon";
import PotsIcon from "../icons/PotsIcon";
import BudgetsIcon from "../icons/BudgetsIcon";
import RecurringBillsIcon from "../icons/RecurringBillsIcon";
import minimizeMenu from "@/assets/images/icon-minimize-menu.svg";

import SideBarTabs from "./SideBarTabs";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Flex
      flexDirection={["row", "row", "column"]}
      gap={300}
      pb={300}
      backgroundColor={"grey.900"}
      borderRight={["none", "none", "1px solid #DBE5E6"]}
      height={["fit-content", "fit-content", "100%"]}
      borderRightRadius={[0, 0, "16px"]}
      borderTopRadius={["16px", "16px", 0]}
      position={["absolute", "absolute", "relative"]}
      bottom={"0"}
      left={"0"}
      right={"0"}
    >
      <Box px={400} py={500} display={["none", "none", "block"]}>
        <Image src={isOpen ? logo : smalllogo} alt="logo" />
      </Box>
      <Flex
        flexDirection={["row", "row", "column"]}
        gap={[0, 0, 50]}
        pl={[200, 200, 0]}
        pr={[200, 500, isOpen ? 300 : 100]}
        pt={[100, 100, 0]}
        width={["100%", "100%", isOpen ? "300px" : "fit-content"]}
        transform={"width 300ms ease"}
        flex={1}
        justifyContent={["space-between", "space-between", "flex-start"]}
      >
        <SideBarTabs label={"Overview"} Icon={OverViewIcon} isOpen={isOpen} />
        <SideBarTabs
          label={"Transactions"}
          Icon={TransactionsIcon}
          isOpen={isOpen}
        />
        <SideBarTabs label={"Pots"} Icon={PotsIcon} isOpen={isOpen} />
        <SideBarTabs label={"Budgets"} Icon={BudgetsIcon} isOpen={isOpen} />
        <SideBarTabs
          label={"Recuirring bills"}
          Icon={RecurringBillsIcon}
          isOpen={isOpen}
        />
      </Flex>
      <Flex
        gap={isOpen ? 200 : 0}
        px={400}
        py={300}
        alignItems={"center"}
        cursor={"pointer"}
        onClick={() => setIsOpen(!isOpen)}
        transform={isOpen ? "unset" : "rotate(180deg)"}
        transition={"300ms ease"}
        justifyContent={isOpen ? "unset" : "flex-end"}
        display={["none", "none", "flex"]}
      >
        <Image src={minimizeMenu} alt="minimize menu" />
        <Text
          textStyle={"text3"}
          color="grey.300"
          display={isOpen ? "block" : "none"}
        >
          Minimize menu
        </Text>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
