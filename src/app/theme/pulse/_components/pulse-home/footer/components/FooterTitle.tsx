import { NormalText } from "../../text";
import { TextProps } from "@chakra-ui/react";

const FooterTitle = ({
  children,
  basic,
  css,
  ...props
}: TextProps & { children: any; basic: any; css: any }) => (
  <NormalText
    basic={basic}
    mb="2.5rem"
    fontSize={{ base: css?.titleSizeBase, lg: css?.titleSizeBG }}
    color={css?.fgColor}
    fontWeight={css?.titleWeight || "600"}
    {...props}
  >
    {children}
  </NormalText>
);

export default FooterTitle;
