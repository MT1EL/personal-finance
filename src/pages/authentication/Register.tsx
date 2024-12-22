import UnauthenticatedLayout from "@/components/layouts/UnauthenticatedLayout";
import Input from "@/components/ui/Input";
import { Button, Flex, Link, Text, VStack } from "@chakra-ui/react";

const Register = () => {
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
          <Input placeholder={"Name"} title="Name" />
          <Input placeholder={"Email"} title="Email" />
          <Input
            placeholder={"Create Password"}
            title="Create Password"
            helperText={"Passwords must be at least 8 characters"}
            defaultType="password"
          />
          <Input
            placeholder={"Repeat Password"}
            title="Repeat Password"
            helperText={"Password must match"}
            defaultType="password"
          />
        </VStack>
        <Button variant={"primary"} type="submit" w={"100%"}>
          Register
        </Button>
        <Text textStyle={"text4"} color={"grey.500"}>
          Already have an account?
          <Link
            color={"grey.900"}
            textStyle={"text4Bold"}
            href={"/login"}
            ml={100}
          >
            Login
          </Link>
        </Text>
      </Flex>
    </UnauthenticatedLayout>
  );
};

export default Register;
