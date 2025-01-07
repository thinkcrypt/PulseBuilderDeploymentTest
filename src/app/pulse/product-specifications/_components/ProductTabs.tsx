import { tabBoxShadow } from "@/components/library/config/lib/constants/constants";
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
import Link from "next/link";
import { FC, useState } from "react";

type ProductTabsProps = FlexProps & {
  basic: any;
  css: any;
  productData: any;
};

const TABS = [
  { label: "Specification", href: "#specification", value: "specification" },
  { label: "Description", href: "#description", value: "description" },
  { label: "Questions", href: "#questions", value: "questions" },
];

const ProductTabs: FC<ProductTabsProps> = ({ basic, css, ...props }) => {
  const [active, setActive] = useState("specification");

  return (
    <Flex gap={4} flexWrap="wrap" {...props}>
      {TABS.map((tab) => (
        <Link href={tab.href} key={tab.value}>
          <TabBtn
            isActive={active === tab.value}
            onClick={() => setActive(tab.value)}
            css={css}
            basic={basic}
            bg={tab.value === active ? css?.tabHoverBg : css?.tabBg}
            color={tab.value === active ? css?.tabHoverFg : css?.tabFg}
          >
            {tab.label}
          </TabBtn>
        </Link>
      ))}
    </Flex>
  );
};

export default ProductTabs;

type TabBtnProps = BoxProps & {
  basic: any;
  css: any;
  isActive: boolean;
  children: string;
};

const TabBtn: FC<TabBtnProps> = ({
  basic,
  css,
  isActive,
  children,
  ...props
}) => {
  return (
    <Box
      bg={isActive ? css?.tabActiveBg : css?.tabBg}
      color={isActive ? css?.tabActiveFg : "inherit"}
      px="1rem"
      py=".6rem"
      borderRadius="8px"
      cursor="pointer"
      boxShadow={css?.boxShadow || tabBoxShadow}
      _hover={{ bg: css?.tabHoverBg, color: css?.tabHoverFg }}
      {...props}
    >
      <NormalText
        color="inherit"
        fontSize="14px"
        fontWeight="600"
        basic={basic}
        css={css}
      >
        {children}
      </NormalText>
    </Box>
  );
};