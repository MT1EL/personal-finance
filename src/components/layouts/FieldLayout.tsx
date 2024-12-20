import { FormControl, FormHelperText, FormLabel } from "@chakra-ui/react";
import React from "react";

type Props = {
  title?: string;
  helperText?: string;
  children: React.ReactNode;
};

const FieldLayout = (props: Props) => {
  const { title, helperText, children } = props;
  return (
    <FormControl>
      {title && (
        <FormLabel textStyle="text5Bold" marginBottom={50}>
          {title}
        </FormLabel>
      )}
      {children}
      {helperText && (
        <FormHelperText
          justifySelf={"flex-end"}
          textStyle={"text5"}
          marginTop={50}
        >
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default FieldLayout;
