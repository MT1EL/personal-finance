import UnauthenticatedLayout from "@/components/layouts/UnauthenticatedLayout";
import Input from "@/components/ui/Input";
import { registerUser } from "@/services/auth";
import { RegisterValues } from "@/types/unauthenticated";
import { Button, Flex, Link, Text, useToast, VStack } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";

const Register = () => {
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("ეს ველი სავალდებულოა"),
      email: yup
        .string()
        .email("არასწორი ელ-ფოსტის ფორმატი")
        .required("ეს ველი სავალდებულოა"),
      password: yup
        .string()
        .min(8, "პაროლი უნდა იყოს 8 სიმბოლოზე მეტი")
        .required("ეს ველი სავალდებულოა"),
      repeatPassword: yup
        .string()
        .oneOf([yup.ref("password")], "პაროლები არ ემთხვევა")
        .required("ეს ველი სავალდებულოა"),
    }),
    onSubmit: (values) => {
      registerUser(values)
        .then((res) => {
          toast({
            title: "Account created.",
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
          console.error("Error registering user:", error.message);
        });
    },
  });

  const fields = Object.keys(formik.initialValues) as Array<
    keyof RegisterValues
  >;

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
          Register
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
