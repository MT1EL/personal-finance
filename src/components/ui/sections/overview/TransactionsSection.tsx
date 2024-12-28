import { Divider, VStack } from "@chakra-ui/react";
import daniel from "@/assets/images/avatars/daniel-carter.jpg";
import emma from "@/assets/images/avatars/emma-richardson.jpg";
import harper from "@/assets/images/avatars/harper-edwards.jpg";
import TransactionComponent from "../../TransactionComponent";
import OverviewSectionLayout from "./shared/OverviewSectionLayout";
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
    <OverviewSectionLayout title="Transactions">
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
    </OverviewSectionLayout>
  );
};

export default TransactionsSection;
