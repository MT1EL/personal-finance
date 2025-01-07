import { Button, Flex, Progress, Text, VStack } from "@chakra-ui/react";

import CardsTitle from "./shared/CardsTitle";

type Props = {
  color: string;
  name: string;
  saved: number;
  target: number;
};

const PotCard = (props: Props) => {
  const { color, name, saved, target } = props;
  return (
    <VStack
      alignItems={"flex-start"}
      gap={400}
      px={[250, 300]}
      py={300}
      borderRadius={"12px"}
      bg="white"
    >
      <CardsTitle title={name} color={color} />

      <VStack gap={200} w={"100%"}>
        <Flex justifyContent={"space-between"} w={"100%"} alignItems={"center"}>
          <Text textStyle={"text4"}>Total Saved </Text>
          <Text textStyle={"text1"}>{saved}</Text>
        </Flex>
        <VStack gap={150} w={"100%"}>
          <Progress
            size="sm"
            value={20}
            w={"100%"}
            borderRadius={"8px"}
            height={"8px"}
            colorScheme={color}
          />
          <Flex justifyContent={"space-between"} w={"100%"}>
            <Text textStyle={"text5Bold"} color={"grey.500"}>
              {(saved / target) * 100}%
            </Text>
            <Text textStyle={"text5"} color={"grey.500"}>
              Target of ${target}
            </Text>
          </Flex>
        </VStack>
        <Flex gap={200} w={"100%"}>
          <Button variant={"secondary"} w={"100%"}>
            +Add Money
          </Button>
          <Button variant={"secondary"} w="100%">
            Withdraw
          </Button>
        </Flex>
      </VStack>
    </VStack>
  );
};

export default PotCard;
