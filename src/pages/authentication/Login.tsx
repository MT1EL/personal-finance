import { Button, Flex, Text, VStack, useToast } from "@chakra-ui/react";
import Input from "@/components/ui/Input";
import UnauthenticatedLayout from "@/components/layouts/UnauthenticatedLayout";
import { useFormik } from "formik";
import * as yup from "yup";
import { LoginValues } from "@/types/unauthenticated";
import { loginUser } from "@/services/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("არასწორი ელ-ფოსტის ფორმატი")
        .required("ეს ველი სავალდებულოა"),
      password: yup.string().required("ეს ველი სავალდებულოა"),
    }),
    onSubmit: (values) => {
      loginUser(values)
        .then((res) => {
          toast({
            title: "Logged in Succesfully.",
            description: `Welcome, ${res.displayName}!`,
            status: "success",
            colorScheme: "teal", // Changing the color scheme for better visibility
            duration: 5000,
            isClosable: true,
            variant: "left-accent", // Optional, to add a small accent to the left
            position: "top-right", // You can also change position to "top", "bottom-left", etc. for better visibility
          });
        })
        .catch((error) => {
          formik.setFieldError("password", error.message);
        });
    },
  });

  const fields = Object.keys(formik.initialValues) as Array<keyof LoginValues>;

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
          formik.handleSubmit();
        }}
      >
        <Text textStyle={"text1"} color={"grey.900"}>
          Login
        </Text>

        <VStack spacing={200}>
          {fields.map((field) => (
            <Input
              key={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              name={field}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[field]}
              helperText={formik.touched[field] ? formik.errors[field] : ""}
              helperTextStyle="error"
            />
          ))}
        </VStack>
        <Button variant={"primary"} type="submit" w={"100%"}>
          Login
        </Button>
        <Text textStyle={"text4"} color={"grey.500"}>
          Need to create an account?
          <Text
            as={Link}
            color={"grey.900"}
            textStyle={"text4Bold"}
            to={"/register"}
            ml={100}
          >
            Register
          </Text>
        </Text>
      </Flex>
    </UnauthenticatedLayout>
  );
};

export default Login;
