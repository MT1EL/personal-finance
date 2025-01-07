import BillsCard from "@/components/ui/cards/BillsCard";
import SummaryCard from "@/components/ui/cards/SummaryCard";
import BillsTable from "@/components/ui/tables/BillsTable";
import { Flex, VStack } from "@chakra-ui/react";

const Recuiringbills = () => {
  const data = [
    {
      title: "Total Bills",
      amount: "$1,000",
    },
    {
      title: "Total Income",
      amount: "$1,500",
    },
    {
      title: "Total Expenses",
      amount: "$500",
    },
  ];
  return (
    <Flex flexDirection={["column", "row"]} gap={10}>
      <VStack gap={200} w="100%" maxW={"332px"}>
        <BillsCard amount={"500"} />
        <SummaryCard data={data} />
      </VStack>
      <BillsTable />
    </Flex>
  );
};

export default Recuiringbills;
