import { Icon } from "../../icon";
// import { Icon } from "@/app/pulse/_core-components/icon";
import { Center, CenterProps } from "@chakra-ui/react";
import { FC } from "react";

type SocialIconsProps = CenterProps & {
  css: any;
  basic: any;
};

const SocialIcons: FC<SocialIconsProps> = ({ css, basic, ...props }) => {
  return (
    <Center gap={4} {...props}>
      <IconBox css={css}>
        <Icon size={css?.iconSize} color={css?.iconFg} name="facebook" />
      </IconBox>
      <IconBox css={css}>
        <Icon size={css?.iconSize} color={css?.iconFg} name="whatsapp" />
      </IconBox>
      <IconBox css={css}>
        <Icon size={css?.iconSize} color={css?.iconFg} name="youtube" />
      </IconBox>
      <IconBox css={css}>
        <Icon size={css?.iconSize} color={css?.iconFg} name="instagram" />
      </IconBox>
    </Center>
  );
};

export default SocialIcons;

const IconBox = ({
  children,
  css,
  ...props
}: CenterProps & { children: any; css: any }) => (
  <Center
    w="40px"
    h="40px"
    bg={css?.iconBg}
    borderRadius={css?.iconRadius}
    _hover={{ bg: css?.iconHoverBg }}
    cursor="pointer"
    {...props}
  >
    {children}
  </Center>
);
