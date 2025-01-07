import BudgetCard from "@/components/ui/cards/BudgetCard";
import BudgetsSection from "@/components/ui/sections/overview/BudgetsSection";
import { Box, Flex, VStack } from "@chakra-ui/react";

const Budgets = () => {
  const budgets = [
    {
      title: "Entertaiment",
      maxAmount: 50,
      spent: 15,
      remaining: 35,
      color: "green",
    },
    {
      title: "Groceries",
      maxAmount: 200,
      spent: 100,
      remaining: 100,
      color: "blue",
    },
    {
      title: "Transport",
      maxAmount: 100,
      spent: 50,
      remaining: 50,
      color: "yellow",
    },
    {
      title: "Health",
      maxAmount: 150,
      spent: 75,
      remaining: 75,
      color: "red",
    },
    {
      title: "Miscellaneous",
      maxAmount: 50,
      spent: 25,
      remaining: 25,
      color: "purple",
    },
  ];
  return (
    <Flex
      justifyContent={"space-between"}
      w="100%"
      alignItems={"start"}
      flexDirection={["column", "column", "row"]}
      gap={300}
    >
      <Box w="100%">
        <BudgetsSection tagsType={"vertical"} hasTitle={false} />
      </Box>
      <VStack gap={300} w="100%">
        {budgets.map((budget) => (
          <BudgetCard
            title={budget.title}
            maxAmount={budget.maxAmount}
            spent={budget.spent}
            remaining={budget.remaining}
            color={budget.color}
          />
        ))}
      </VStack>
    </Flex>
  );
};

export default Budgets;
