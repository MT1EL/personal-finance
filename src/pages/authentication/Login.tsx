import { Button, Flex, Text, VStack, Link } from "@chakra-ui/react";
import Input from "@/components/ui/Input";
import UnauthenticatedLayout from "@/components/layouts/UnauthenticatedLayout";
const Login = () => {
  return (
    <UnauthenticatedLayout>
      <Flex
        flexDirection={"column"}
        gap={400}
        p={400}
        bg="white"
        maxW={"560px"}
        w={"100%"}
        textAlign={"center"}
        borderRadius={"12px"}
        as="form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Login");
        }}
      >
        <Text textStyle={"text1"} color={"grey.900"}>
          Login
        </Text>

        <VStack spacing={200}>
          <Input placeholder={"Email"} title="Email" />
          <Input
            placeholder={"Password"}
            defaultType="password"
            title="Password"
          />
        </VStack>
        <Button variant={"primary"} type="submit" w={"100%"}>
          Login
        </Button>
        <Text textStyle={"text4"} color={"grey.500"}>
          Need to create an account?
          <Link
            color={"grey.900"}
            textStyle={"text4Bold"}
            href={"/register"}
            ml={100}
          >
            Register
          </Link>
        </Text>
      </Flex>
    </UnauthenticatedLayout>
  );
};

export default Login;
