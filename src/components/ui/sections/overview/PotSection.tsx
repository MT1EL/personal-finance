import { Flex, Grid, Image, Text } from "@chakra-ui/react";
import caretRight from "@/assets/images/icon-caret-right.svg";
import jar from "@/assets/images/icon-pot.svg";
import PotTag from "../../tags/PotTag";

const PotSection = () => {
  const pots = [
    {
      color: "green",
      name: "Holiday",
      amount: "$200",
    },
    {
      color: "yellow",
      name: "Car",
      amount: "$300",
    },
    {
      color: "cyan",
      name: "House",
      amount: "$350",
    },
    {
      color: "navy",
      name: "Wedding",
      amount: "$400",
    },
  ];
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

      <Flex gap={250} flexDirection={["column", "row"]}>
        <Flex
          p={200}
          gap={200}
          borderRadius={"12px"}
          bg="beige.100"
          maxW={["100%", "247px"]}
          width={"100%"}
          height={"110px"}
          alignItems={"center"}
        >
          <Image src={jar} height={"40px"} width={"40px"} />
          <Flex flexDirection={"column"} gap={150}>
            <Text textStyle={"text4"} color={"grey.500"}>
              Total Saved
            </Text>
            <Text textStyle={"text1"} color={"grey.900"}>
              $850
            </Text>
          </Flex>
        </Flex>
        <Grid gridTemplateColumns={"repeat(2, 1fr)"} gap={200}>
          {pots.map((pot) => (
            <PotTag
              key={pot.name}
              color={pot.color}
              name={pot.name}
              amount={pot.amount}
            />
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default PotSection;
