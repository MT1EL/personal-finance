import { Flex, Image, Text, VStack } from "@chakra-ui/react";
import caretRight from "@/assets/images/icon-caret-right.svg";
import BillsTag from "../../tags/BillsTag";

const ReccuirringBillsSection = () => {
  const bills = [
    {
      color: "red",
      name: "Electricity",
      amount: "$1,000.00",
    },
    {
      color: "green",
      name: "Water",
      amount: "$1,000.00",
    },
    {
      color: "blue",
      name: "Internet",
      amount: "$1,000.00",
    },
  ];

  return (
    <Flex
      flexDirection={"column"}
      gap={400}
      py={[300, 400]}
      px={[250, 400]}
      bg={"white"}
      borderRadius={"12px"}
    >
      <Flex w={"100%"} justifyContent={"space-between"} alignItems={"center"}>
        <Text textStyle={"text2"}>Reccuirring Bills</Text>
        <Flex gap={150}>
          <Text textStyle={"text4"}>View All</Text>
          <Image src={caretRight} />
        </Flex>
      </Flex>

      <VStack gap={150}>
        {bills.map((bill, index) => (
          <BillsTag
            key={index}
            color={bill.color}
            name={bill.name}
            amount={bill.amount}
          />
        ))}
      </VStack>
    </Flex>
  );
};

export default ReccuirringBillsSection;
