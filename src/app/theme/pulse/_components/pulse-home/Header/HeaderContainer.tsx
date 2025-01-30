import { Box, BoxProps } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import { zIndex } from "../../../_components/index";

type HeaderContainerProps = BoxProps & {
  header: any;
  children: ReactNode;
};

const HeaderContainer: FC<HeaderContainerProps> = ({
  header,
  children,
  ...props
}) => {
  return (
    <Box
      bg={header?.bgColor}
      // zIndex={zIndex?.header}
      // position='sticky'
      // top='0px'
      height={`${header?.height}px`}
      py={`${header?.headerPaddingY}px`}
      {...props}
    >
      {children}
    </Box>
  );
};

export default HeaderContainer;
