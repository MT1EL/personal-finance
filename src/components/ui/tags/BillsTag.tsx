import { Flex, Text } from "@chakra-ui/react";

type Props = {
  color: string;
  name: string;
  amount: string;
};

const BillsTag = (props: Props) => {
  const { color, name, amount } = props;
  return (
    <Flex
      px={200}
      py={250}
      bg="beige.100"
      borderRadius={"8px"}
      w="100%"
      position={"relative"}
      borderLeft={`4px solid ${color}`}
    >
      <Flex justifyContent={"space-between"} w="100%">
        <Text textStyle={"text4"}>{name}</Text>
        <Text textStyle={"text4Bold"}>{amount}</Text>
      </Flex>
    </Flex>
  );
};

export default BillsTag;
