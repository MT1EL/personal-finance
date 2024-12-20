import {
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import search from "../../assets/images/icon-search.svg";
import hidepassword from "../../assets/images/icon-hide-password.svg";
import showpassword from "../../assets/images/icon-show-password.svg";
import FieldLayout from "../layouts/FieldLayout";
import { useState } from "react";

type Props = {
  leftIcon?: boolean;
  rightIcon?: boolean;
  placeholder: string;
  title?: string;
  helperText?: string;
  defaultType?: "password" | "text";
};

const Input = (props: Props) => {
  const [type, setType] = useState("false");
  const { leftIcon, rightIcon, placeholder, title, helperText, defaultType } =
    props;
  return (
    <FieldLayout title={title} helperText={helperText}>
      <InputGroup>
        {leftIcon && (
          <InputLeftElement h={"100%"}>
            <Text textStyle="text4" fontFamily={"Public Sans"}>
              $
            </Text>
          </InputLeftElement>
        )}
        <ChakraInput placeholder={placeholder} variant={"filled"} type={type} />
        {rightIcon && (
          <InputRightElement
            h={"100%"}
            onClick={() =>
              setType((prev) => (prev === "password" ? "text" : "password"))
            }
          >
            {defaultType === "password" ? (
              type === "password" ? (
                <img
                  src={showpassword}
                  alt="search"
                  width={"16px"}
                  height={"16px"}
                />
              ) : (
                <img
                  src={hidepassword}
                  alt="search"
                  width={"16px"}
                  height={"16px"}
                />
              )
            ) : (
              <img src={search} alt="search" width={"16px"} height={"16px"} />
            )}
          </InputRightElement>
        )}
      </InputGroup>
    </FieldLayout>
  );
};

export default Input;
