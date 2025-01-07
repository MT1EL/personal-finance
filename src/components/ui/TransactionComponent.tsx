import { Flex, Image, Text, VStack } from "@chakra-ui/react";

type Props = {
  avatar: string;
  name: string;
  transaction: string;
  date: string;
  size?: string;
};

const TransactionComponent = ({
  avatar,
  name,
  transaction,
  date,
  size,
}: Props) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"100%"}>
      <Flex gap={200} alignItems={"center"}>
        <Image
          src={avatar}
          width={size === "sm" ? "32px" : ["32px", "40px"]}
          height={size === "sm" ? "32px" : ["32px", "40px"]}
          borderRadius={"50%"}
        />
        <Text textStyle={size === "sm" ? "text5Bold" : "text4Bold"}>
          {name}
        </Text>
      </Flex>

      <VStack gap={size === "sm" ? 50 : 100}>
        <Text
          textStyle={size === "sm" ? "text5Bold" : "text4Bold"}
          color={transaction.slice(0, 1) === "+" ? "green" : "grey.900"}
        >
          {transaction}
        </Text>
        <Text textStyle={"text5"}>{date}</Text>
      </VStack>
    </Flex>
  );
};

export default TransactionComponent;
