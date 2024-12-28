import { Box, Flex, Text, VStack } from "@chakra-ui/react";

type Props = {
  color: string;
  name: string;
  amount: string;
};

const PotTag = (props: Props) => {
  const { color, name, amount } = props;
  return (
    <Flex gap={200} position={"relative"} height={"fit-content"}>
      <Box bg={color} width={"4px"} borderRadius={"8px"} />
      <VStack gap={50} alignItems={"flex-start"}>
        <Text textStyle={"text5"} color={"grey.500"}>
          {name}
        </Text>
        <Text textStyle={"text4Bold"} color={"grey.900"}>
          {amount}
        </Text>
      </VStack>
    </Flex>
  );
};

export default PotTag;
