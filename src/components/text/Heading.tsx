import { Text, TextProps } from "@chakra-ui/react";
import React, { FC } from "react";

type HeadngProps = TextProps & {
  children: string | number;

  css?: any;
};

const Headng: FC<HeadngProps> = ({ children, css, ...props }) => {
  return (
    <Text
      fontWeight="400"
      fontSize="1rem"
      fontFamily={css?.primaryFont}
      color={css?.color}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Headng;
