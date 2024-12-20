import { Button, Flex, VStack } from "@chakra-ui/react";
import Input from "@/components/ui/Input";
const Overview = () => {
  return (
    <Flex gap={200} p={200}>
      <VStack gap={200}>
        <Button variant={"primary"}>Placeholder</Button>
        <Button variant={"secondary"}>Placeholder</Button>
        <Button variant={"tertiary"}>Placeholder</Button>
        <Button variant={"destroy"}>Placeholder</Button>
      </VStack>
      <VStack gap={200}>
        <Input
          leftIcon
          rightIcon
          placeholder={"Placeholder"}
          defaultType="password"
        />
      </VStack>
    </Flex>
  );
};

export default Overview;
