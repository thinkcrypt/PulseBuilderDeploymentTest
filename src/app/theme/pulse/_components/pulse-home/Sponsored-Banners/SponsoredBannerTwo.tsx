import React, { FC, ReactNode } from "react";
import {
  Box,
  BoxProps,
  Center,
  Flex,
  FlexProps,
  Grid,
  GridItem,
  GridProps,
  Image,
  Spacer,
} from "@chakra-ui/react";
import {
  HoverContentContainer,
  Column,
  PLACEHOLDER_IMAGE,
} from "@/components/library";
// import { HomeContentProps } from '.';
type SponsoredBannerTwoProps = BoxProps & {
  content: any;
  basic: any;
  path: any;
  dataModel: any;
  data: any;
};

import { BgImage } from "@/builder";
import { IconButton } from "@/commerce-components";
import { useAppSelector } from "@/hooks";
import { SubHeading, Title } from "@/app/theme/zhoei/_components/hero";
import sponsoredBannerTwoData from "./sponsoredBannerTwoData";

type ItemProps = {
  image: string;
  href: string;
  id: any;
  type: string;
  priority: number;
};

const schema = (i: number) => {
  return [
    {
      startofSection: true,
      sectionTitle: "Banner 1",
      name: `sponsoredBannerTwo[${i}].image`,
      label: "Image",
      isRequired: false,
      type: "nested-image",
    },

    {
      name: `sponsoredBannerTwo[${i}].type`,
      label: "Link Type",
      type: "nested-select",
      isRequired: true,
      options: [
        {
          label: "Page",
          value: "page",
        },
        {
          label: "Product",
          value: "product",
        },
        {
          label: "Category",
          value: "category",
        },
        {
          label: "Collection",
          value: "collection",
        },
        {
          label: "External Link",
          value: "external",
        },
      ],
    },
    {
      name: `sponsoredBannerTwo[${i}].href`,
      label: "Select Page",
      type: "nested-select",
      options: [
        {
          label: "Home",
          value: "/",
        },
        {
          label: "All Categories",
          value: "/category",
        },
        {
          label: "FAQ",
          value: "/faq",
        },
        {
          label: "Shop",
          value: "/explore",
        },
        {
          label: "Contact",
          value: "/contact-us",
        },
      ],

      isRequired: true,
      renderCondition: (data: any) => {
        return data?.sponsoredBannerTwo[i].type === "page";
      },
    },
    {
      name: `sponsoredBannerTwo[${i}].href`,
      label: "Select Product",
      type: "nested-data-menu",
      model: "products",
      isRequired: true,
      renderCondition: (data: any) => {
        return data?.sponsoredBannerTwo[i].type === "product";
      },
    },
    {
      name: `sponsoredBannerTwo[${i}].href`,
      label: "Enter External Link [eg. https://google.com]",
      type: "nested-string",
      isRequired: true,
      renderCondition: (data: any) => {
        return data?.sponsoredBannerTwo[i].type === "external";
      },
    },
    {
      name: `sponsoredBannerTwo[${i}].href`,
      label: "Select Collection",
      type: "nested-data-menu",
      model: "collections",
      isRequired: true,

      renderCondition: (data: any) => {
        return data?.sponsoredBannerTwo[i].type === "collection";
      },
    },
    {
      name: `sponsoredBannerTwo[${i}].href`,
      label: "Select Cateogry",
      type: "nested-data-menu",
      model: "categories",
      isRequired: true,
      renderCondition: (data: any) =>
        data?.sponsoredBannerTwo[i].type == "category",
    },
  ];
};

const SponsoredBannerTwo: FC<SponsoredBannerTwoProps> = ({
  dataModel,
  content,
  data: asData,
}) => {
  const data = content?.sponsoredBannerTwo;
  const css = content?.sponserBannerTwoCss;
  const { display } = useAppSelector((state) => state.builder);
  // console.log('pulse sponser two:', data);
  return (
    <HoverContentContainer
      section={true}
      path="pulse"
      title="Sponsered Banner Two"
      data={content}
      bg={asData?.basic?.bgColor}
      p={display == "sm" ? 4 : 8}
      dataModel={sponsoredBannerTwoData}
    >
      {!data || (data?.length == 0 && <Center>No Content Added Yet</Center>)}
      <Grid
        bg={asData?.basic?.bgColor}
        gridTemplateColumns={display == "sm" ? "1fr" : "1fr 1fr"}
        gap={4}
      >
        {data?.map((item: ItemProps, i: number) => (
          <HoverContentContainer
            path="pulse"
            title="Featured Collection"
            data={content}
            key={i}
            h={{
              base: "200px",
              md: display == "sm" ? `${css?.heightBase}px` : `${css?.height}px`,
            }}
            component={true}
            dataModel={schema(i)}
          >
            <GridItem key={i} w="full" h="full">
              <BannerImage
                src={item?.image || PLACEHOLDER_IMAGE}
                borderRadius={css?.borderRadius}
              />
            </GridItem>
          </HoverContentContainer>
        ))}
      </Grid>
    </HoverContentContainer>
  );
};

export default SponsoredBannerTwo;

const BannerImage = ({
  src,
  borderRadius,
  ...props
}: FlexProps & {
  src: string;
  borderRadius: any;
}) => {
  // const { display } = useAppSelector((state) => state.builder);
  return (
    <Box
      w="full"
      h="full"
      position="relative"
      overflow="hidden"
      aspectRatio={16 / 9} // Adjust the aspect ratio as needed (16:9 is an example)
      {...props}
    >
      <Image
        src={src}
        w="full"
        h="full"
        objectFit="cover"
        borderRadius={`${borderRadius}px`}
        // fallbackSrc={placeholderImage}
        alt="Banner Image"
      />
    </Box>
  );
};
