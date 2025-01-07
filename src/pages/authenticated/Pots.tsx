import { Button, Flex, Grid, Text } from "@chakra-ui/react";
import PotCard from "@/components/ui/cards/PotCard";
const Pots = () => {
  const pots = [
    {
      color: "green",
      name: "Holiday",
      saved: 200,
      target: 500,
    },
    {
      color: "blue",
      name: "Car",
      saved: 200,
      target: 500,
    },
    {
      color: "purple",
      name: "House",
      saved: 200,
      target: 500,
    },
    {
      color: "yellow",
      name: "Emergency",
      saved: 200,
      target: 500,
    },
    {
      color: "red",
      name: "Health",
      saved: 200,
      target: 500,
    },
  ];
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text textStyle={"text1"}>Pots</Text>
        <Button variant={"primary"}>+Add New Pot</Button>
      </Flex>

      <Grid
        gridTemplateColumns={["1fr", "1fr", "1fr", "repeat(2, 1fr)"]}
        gap={300}
      >
        {pots.map((pot) => (
          <PotCard
            key={pot.name}
            name={pot.name}
            color={pot.color}
            saved={pot.saved}
            target={pot.target}
          />
        ))}
      </Grid>
    </>
  );
};

export default Pots;
