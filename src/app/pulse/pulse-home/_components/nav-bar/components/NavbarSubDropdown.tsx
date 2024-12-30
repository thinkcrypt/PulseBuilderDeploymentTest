import { productCardBoxShadow, zIndex } from "@/components/library/config/lib/constants/constants";
import { Box, BoxProps } from "@chakra-ui/react";
import { FC, ReactNode, useState } from "react";
import { SubDropdownItem } from "./index";
import useColors from "@/components/library/hooks/useColors";

type NavbarSubdropdown = BoxProps & {
  css: any;
  item: any;
  basic: any;
};

const NavbarSubdropdown: FC<NavbarSubdropdown> = ({ css, basic, item }) => {
  const [subDropdownHover, setSubDropdownHover] = useState<number | null>(null);

  const handleSubDropdownHoverToggle = (index: number | null) => {
    setSubDropdownHover(index);
  };

  return (
    <Wrapper css={css}>
      {item?.dropDown?.map((dropdown: any, idx: number) => (
        <SubDropdownItem
          key={idx}
          dropdown={dropdown}
          css={css}
          basic={basic}
        />
      ))}
    </Wrapper>
  );
};

export default NavbarSubdropdown;

const Wrapper = ({
  children,
  css,
  ...props
}: BoxProps & { children: ReactNode; css: any }) => {
  const colors = useColors();
  return (
    <Box
      position="absolute"
      bg={colors?.white}
      left="100%"
      top="0"
      zIndex={zIndex?.navbarSubDropdown}
      w="200px"
      boxShadow={productCardBoxShadow}
      {...props}
    >
      {children}
    </Box>
  );
};
