import NormalText from "@/components/text/NormalText";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
  FlexProps,
  BoxProps,
} from "@chakra-ui/react";
import { FC } from "react";

type ProductTabsProps = FlexProps & {
  basic: any;
  css: any;
  productData: any;
};

const ProductTabs: FC<ProductTabsProps> = ({
  basic,
  css,
  productData,
  ...props
}) => {
  return (
    <Flex gap={4} flexWrap="wrap" {...props}>
      <TabBtn css={css} basic={basic}>
        Specification
      </TabBtn>
      <TabBtn css={css} basic={basic}>
        Description
      </TabBtn>
      <TabBtn css={css} basic={basic}>
        Questions
      </TabBtn>
    </Flex>
  );
};
export default ProductTabs;

const TabBtn = ({
  basic,
  css,
  children,
  ...props
}: BoxProps & {
  basic: any;
  css: any;
  children: any;
}) => (
  <Box
    bg={css?.tabBg}
    px="1rem"
    py=".6rem"
    borderRadius={"8px"}
    cursor="pointer"
    _hover={{ bg: css?.tabHoverBg, color: css?.tabHoverFg }}
    {...props}
  >
    <NormalText
      color={"inherit"}
      fontSize="14px"
      fontWeight="600"
      basic={basic}
      css={css}
    >
      {children}
    </NormalText>
  </Box>
);
