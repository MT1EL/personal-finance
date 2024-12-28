import { VStack } from "@chakra-ui/react";
import BillsTag from "../../tags/BillsTag";
import OverviewSectionLayout from "./shared/OverviewSectionLayout";

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
    <OverviewSectionLayout title="Recuirring Bills">
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
    </OverviewSectionLayout>
  );
};

export default ReccuirringBillsSection;
