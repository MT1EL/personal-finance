import { Box, Divider, Flex, Text, VStack } from "@chakra-ui/react";

type Props = {
  data: { title: string; amount: string }[];
};

const SummaryCard = (props: Props) => {
  return (
    <Box
      gap={250}
      p={250}
      bg="white"
      borderRadius={"12px"}
      maxW={"332px"}
      w="100%"
    >
      <Text textStyle={"text3"} color={"grey.900"}>
        Summary
      </Text>
      <VStack alignItems={"flex-start"}>
        {props.data.map((item, index) => (
          <Box key={item.title} w="100%">
            <Flex justifyContent={"space-between"} w={"100%"} py={200}>
              <Text
                textStyle={"text5"}
                color={index === props.data.length - 1 ? "red.500" : "grey.500"}
              >
                {item.title}
              </Text>
              <Text
                textStyle={"text5Bold"}
                color={index === props.data.length - 1 ? "red.500" : "grey.900"}
              >
                {item.amount}
              </Text>
            </Flex>
            {index !== props.data.length - 1 && <Divider bg="#696868" />}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default SummaryCard;
