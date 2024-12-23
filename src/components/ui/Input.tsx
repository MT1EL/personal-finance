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
  name?: string;
  helperText?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value?: string;
  helperTextStyle?: string;
};

const Input = (props: Props) => {
  const {
    leftIcon,
    rightIcon,
    placeholder,
    name,
    helperText,
    onChange,
    onBlur,
    value,
    helperTextStyle,
  } = props;
  const defaultType = name?.toLowerCase().includes("password")
    ? "password"
    : name;
  const [type, setType] = useState(defaultType);

  return (
    <FieldLayout
      title={name ? name.charAt(0).toUpperCase() + name.slice(1) : ""}
      helperText={helperText}
      helperTextStyle={helperTextStyle}
    >
      <InputGroup>
        {leftIcon && (
          <InputLeftElement h={"100%"}>
            <Text textStyle="text4" fontFamily={"Public Sans"}>
              $
            </Text>
          </InputLeftElement>
        )}
        <ChakraInput
          placeholder={placeholder}
          variant={"filled"}
          type={type}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
        {rightIcon ||
          (defaultType == "password" && (
            <InputRightElement
              h={"100%"}
              onClick={() =>
                setType((prev) => (prev === "password" ? "text" : "password"))
              }
              cursor={"pointer"}
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
          ))}
      </InputGroup>
    </FieldLayout>
  );
};

export default Input;
