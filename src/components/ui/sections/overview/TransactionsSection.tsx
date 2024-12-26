import { Divider, Flex, Image, Text, VStack } from "@chakra-ui/react";
import caretRight from "@/assets/images/icon-caret-right.svg";
import daniel from "@/assets/images/avatars/daniel-carter.jpg";
import emma from "@/assets/images/avatars/emma-richardson.jpg";
import harper from "@/assets/images/avatars/harper-edwards.jpg";
import TransactionComponent from "../../TransactionComponent";
const TransactionsSection = () => {
  const transactions = [
    {
      avatar: daniel,
      name: "Daniel Carter",
      transaction: "+$1,000.00",
      date: "12th Aug, 2021",
    },
    {
      avatar: emma,
      name: "Emma Richardson",
      transaction: "+$1,000.00",
      date: "12th Aug, 2021",
    },
    {
      avatar: harper,
      name: "Harper Edwards",
      transaction: "-$1,000.00",
      date: "12th Aug, 2021",
    },
    {
      avatar: harper,
      name: "Harper Edwards",
      transaction: "+$1,000.00",
      date: "12th Aug, 2021",
    },
    {
      avatar: harper,
      name: "Harper Edwards",
      transaction: "+$1,000.00",
      date: "12th Aug, 2021",
    },
  ];
  return (
    <VStack
      gap={400}
      px={[250, 400]}
      py={[300, 400]}
      bg="white"
      borderRadius={"12px"}
      w={"100%"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"} w="100%">
        <Text textStyle={"text2"}>Transactions</Text>
        <Flex gap={150}>
          <Text textStyle={"text4"}>View All</Text> <Image src={caretRight} />
        </Flex>
      </Flex>
      <VStack gap={250} w={"100%"}>
        {transactions.map((transaction, index) => (
          <>
            <TransactionComponent
              key={index}
              avatar={transaction.avatar}
              name={transaction.name}
              transaction={transaction.transaction}
              date={transaction.date}
            />
            <Divider color={"grey.100"} />
          </>
        ))}
      </VStack>
    </VStack>
  );
};

export default TransactionsSection;
