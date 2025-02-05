import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

const CopyrightText = ({
  children,
  css,
  basic,
  ...props
}: TextProps & { children: ReactNode; css: any; basic: any }) => {
  return (
    <Text
      color={css?.fgColor}
      fontWeight="400"
      fontSize={`${css?.copyrightTextSize || 14}px`}
      fontFamily={basic?.secondaryFont}
      textAlign="center"
      {...props}
    >
      {children}
    </Text>
  );
};

export default CopyrightText;
