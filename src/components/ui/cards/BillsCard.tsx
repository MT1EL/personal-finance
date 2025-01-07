import { Flex, Image, Text, VStack } from "@chakra-ui/react";
import billsIcon from "@/assets/images/icon-recurring-bills.svg";
type Props = {
  amount: string;
};

const BillsCard = ({ amount }: Props) => {
  return (
    <Flex
      gap={[250, 400]}
      px={[250, 300]}
      py={300}
      flexDirection={["row", "column"]}
      bg="grey.900"
      borderRadius={"12px"}
      maxW={["unset", "332px"]}
      w={"100%"}
    >
      <Image src={billsIcon} alt="bills icon" maxW={"40px"} maxH={"40px"} />
      <VStack gap={150} alignItems={"flex-start"}>
        <Text textStyle={"text4"} color={"white"}>
          Total Bills
        </Text>
        <Text textStyle={"text1"} color={"white"}>
          ${amount}
        </Text>
      </VStack>
    </Flex>
  );
};

export default BillsCard;
