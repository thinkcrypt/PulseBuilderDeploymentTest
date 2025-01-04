import React, { FC } from "react";
import { Flex, FlexProps, Grid } from "@chakra-ui/react";

type FormDivisionProps = FlexProps & {
  children: React.ReactNode;
  isModal?: boolean;
};

const FormDivision: FC<FormDivisionProps> = ({
  children,
  isModal = false,
  ...props
}) => {
  return (
    <Flex
      bg={isModal ? "menu.light" : "white"}
      boxShadow={isModal ? "none" : "md"}
      borderWidth={1}
      _dark={{ bg: isModal ? "menu.dark" : "background.dark" }}
      p={4}
      borderRadius="12px"
      {...props}
    >
      <Grid templateColumns="repeat(2, 1fr)" gap={8} w="full" columnGap={4}>
        {children}
      </Grid>
    </Flex>
  );
};

export default FormDivision;
