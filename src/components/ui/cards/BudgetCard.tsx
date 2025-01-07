import { Box, Divider, Flex, Progress, Text, VStack } from "@chakra-ui/react";
import daniel from "@/assets/images/avatars/daniel-carter.jpg";
import emma from "@/assets/images/avatars/emma-richardson.jpg";
import harper from "@/assets/images/avatars/harper-edwards.jpg";
import TransactionComponent from "../TransactionComponent";
import OverviewSectionLayout from "@/components/layouts/OverviewSectionLayout";
import CardsTitle from "./shared/CardsTitle";
import PotTag from "../tags/PotTag";

type Props = {
  title: string;
  maxAmount: number;
  spent: number;
  remaining: number;
  color: string;
};

const BudgetCard = ({ title, maxAmount, spent, remaining, color }: Props) => {
  const transactions = [
    {
      avatar: daniel,
      name: "Daniel Carter",
      transaction: "-$1,000.00",
      date: "12th Aug, 2021",
    },
    {
      avatar: emma,
      name: "Emma Richardson",
      transaction: "-$1,000.00",
      date: "12th Aug, 2021",
    },
    {
      avatar: harper,
      name: "Harper Edwards",
      transaction: "-$1,000.00",
      date: "12th Aug, 2021",
    },
  ];
  return (
    <VStack
      gap={250}
      px={[250, 400]}
      py={[300, 400]}
      bg="white"
      w="100%"
      borderRadius={"12px"}
    >
      <CardsTitle title={title} color={color} />

      {/* Budget Progress */}

      <VStack gap={200} alignItems={"flex-start"} w="100%">
        <Text textStyle={"text4"}>Maximum of {maxAmount}</Text>
        <Progress
          value={(spent / maxAmount) * 100}
          max={100}
          w="100%"
          borderRadius={"4px"}
          size={"lg"}
          p={50}
          height={"32px"}
          colorScheme={color}
        />
        <Flex gap={200} w="100%">
          <PotTag color={color} name={"Spent"} amount={spent} />
          <Box mx={"auto"}>
            <PotTag color={"grey"} name={"Remaining"} amount={remaining} />
          </Box>
        </Flex>
      </VStack>

      {/* Spending Section */}
      <OverviewSectionLayout title="Transactions" size="sm">
        <VStack gap={150} w={"100%"}>
          {transactions.map((transaction, index) => (
            <>
              <TransactionComponent
                key={index}
                avatar={transaction.avatar}
                name={transaction.name}
                transaction={transaction.transaction}
                date={transaction.date}
                size="sm"
              />
              {index !== transactions.length - 1 && (
                <Divider color={"grey.100"} />
              )}
            </>
          ))}
        </VStack>
      </OverviewSectionLayout>
    </VStack>
  );
};

export default BudgetCard;
