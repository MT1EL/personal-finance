import { Box, Flex, Text, VStack } from "@chakra-ui/react";

type Props = {
  color: string;
  name: string;
  amount: number;
  target?: number;
};

const PotTag = (props: Props) => {
  const { color, name, amount, target } = props;
  return (
    <Flex
      gap={200}
      position={"relative"}
      height={"fit-content"}
      justifyContent={target ? "space-between" : "unset"}
    >
      <Box
        bg={color}
        width={"4px"}
        borderRadius={"8px"}
        position={"absolute"}
        top={"0"}
        bottom={"0"}
        left={"0"}
      />
      <VStack
        gap={50}
        alignItems={"flex-start"}
        display={target ? "contents" : "flex"}
        ml={200}
      >
        <Text textStyle={"text5"} color={"grey.500"} ml={target ? 200 : 0}>
          {name}
        </Text>
        <Flex gap={100} display={target ? "flex" : "contents"}>
          <Text textStyle={"text4Bold"} color={"grey.900"}>
            ${amount}
          </Text>
          {target && (
            <Text textStyle={"text5"} color={"grey.500"}>
              of ${target}
            </Text>
          )}
        </Flex>
      </VStack>
    </Flex>
  );
};

export default PotTag;
