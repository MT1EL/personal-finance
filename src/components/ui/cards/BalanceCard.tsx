import { Flex, Text } from "@chakra-ui/react";

type Props = {
  title: string;
  balance: string;
};

const BalanceCard = ({ title, balance }: Props) => {
  return (
    <Flex
      flexDirection={"column"}
      gap={150}
      p={300}
      bg={title === "Current Balance" ? "grey.900" : "white"}
      borderRadius={"12px"}
      width={"100%"}
      maxW={["unset", "304px"]}
    >
      <Text
        textStyle={"text4"}
        color={title === "Current Balance" ? "white" : "grey.500"}
      >
        {title}
      </Text>
      <Text
        textStyle={"text1"}
        color={title === "Current Balance" ? "white !important" : "grey.900"}
        maxW={"100%"}
      >
        ${balance}
      </Text>
    </Flex>
  );
};

export default BalanceCard;
