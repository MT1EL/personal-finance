import { Flex, Image, Text } from "@chakra-ui/react";
import caretRight from "@/assets/images/icon-caret-right.svg";

type Props = {};

const BudgetsSection = (props: Props) => {
  return (
    <Flex
      px={[250, 400]}
      py={[300, 400]}
      flexDirection={"column"}
      gap={250}
      borderRadius={"12px"}
      bg={"white"}
      w={"100%"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text textStyle={"text2"} color={"grey.900"}>
          Pots
        </Text>
        <Flex gap={150} alignItems={"center"}>
          <Text textStyle={"text4"} color={"grey.500"}>
            See details
          </Text>
          <Image src={caretRight} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BudgetsSection;
