import BalanceCard from "@/components/ui/cards/BalanceCard";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import PotSection from "@/components/ui/sections/overview/PotSection";
import TransactionsSection from "@/components/ui/sections/overview/TransactionsSection";
import ReccuirringBillsSection from "@/components/ui/sections/overview/ReccuirringBillsSection";
import BudgetsSection from "@/components/ui/sections/overview/BudgetsSection";

const Overview = () => {
  return (
    <Flex
      px={[200, 500]}
      py={[250, 400]}
      gap={400}
      flexDirection={"column"}
      width={"100%"}
      maxW={"1040px"}
      overflowX={"hidden"}
      mx="auto"
    >
      {/* Title Section */}
      <Box py={[0, 100]}>
        <Text textStyle={"text1"} color={"grey.900"}>
          Overview
        </Text>
      </Box>

      {/* Balance Section */}

      <Flex
        flexDirection={["column", "row"]}
        gap={[150, 300]}
        maxW={"100%"}
        w={"100%"}
        overflowX={"scroll"}
      >
        <BalanceCard title={"Current Balance"} balance={"4,836.00"} />
        <BalanceCard title={"Income"} balance={"3,814.25"} />
        <BalanceCard title={"Expenses"} balance={"1,700.50"} />
      </Flex>

      {/* Body Section */}
      <Flex
        gap={300}
        flexDirection={["column", "column", "row"]}
        w={"100%"}
        flexWrap={"wrap"}
      >
        <Flex flexDirection={"column"} gap={300} flexGrow={1}>
          {/* Pots Section */}
          <PotSection />

          {/* Transactions Section */}
          <TransactionsSection />
        </Flex>
        <VStack alignItems={"space-between"} flexGrow={1}>
          <BudgetsSection />
          {/* Reccuirring Bills Section */}
          <ReccuirringBillsSection />
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Overview;
