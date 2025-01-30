
import { Button, ButtonProps } from "@chakra-ui/react";
import { FC } from "react";
import useColors from "../../hooks/useColors";

type SimpleButtonProps = ButtonProps & {
  basic: any;
  css?: any;
  children: any;
};

const SimpleButton: FC<SimpleButtonProps> = ({
  children,
  basic,
  css,
  ...props
}) => {
  const colors = useColors();
  return (
    <Button
      bg={basic?.btnColor}
      color={basic?.btnTextColor}
      fontWeight="400"
      fontSize="1rem"
      fontFamily={css?.fontFamily || basic?.secondaryFont}
      {...props}
      _hover={{
        bg: basic?.btnColor,
        color: basic?.btnTextColor,
      }}
    >
      {children}
    </Button>
  );
};

export default SimpleButton;
