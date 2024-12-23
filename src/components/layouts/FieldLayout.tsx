import { FormControl, FormHelperText, FormLabel } from "@chakra-ui/react";
import React from "react";

type Props = {
  title?: string;
  helperText?: string;
  helperTextStyle?: string;
  children: React.ReactNode;
};

const FieldLayout = (props: Props) => {
  const { title, helperText, helperTextStyle, children } = props;
  return (
    <FormControl>
      {title && (
        <FormLabel textStyle="text5Bold" color={"gray.500"} marginBottom={50}>
          {title}
        </FormLabel>
      )}
      {children}
      {helperText && (
        <FormHelperText
          justifySelf={"flex-end"}
          textStyle={"text5"}
          marginTop={50}
          color={helperTextStyle === "error" ? "red" : "grey.500"}
        >
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default FieldLayout;
