import {
  generateImageModel,
  HoverContentContainer,
} from "@/components/library";
import { Box, Flex, FlexProps, Image } from "@chakra-ui/react";
import React, { FC } from "react";
import {
  modelTypeOptions,
  modelHrefOptions,
  PADDING_X,
} from "../../../_components/index";
import { useAppSelector } from "@/hooks";
type SponsoredBannerThreeProps = FlexProps & {
  content: any;
  basic: any;
  path: any;
  dataModel: any;
  data: any;
};

const model = [
  {
    name: `sponsoredBannerThree.type`,
    label: "Link Type",
    type: "nested-select",
    isRequired: true,
    options: modelTypeOptions,
  },
  {
    name: `sponsoredBannerThree.href`,
    label: "Select Page",
    type: "nested-select",
    options: modelHrefOptions,
    isRequired: true,
    renderCondition: (data: any) => {
      return data?.sponsoredBannerThree.type === "page";
    },
  },
  {
    name: `sponsoredBannerThree.href`,
    label: "Select Product",
    type: "nested-data-menu",
    model: "products",
    isRequired: true,
    renderCondition: (data: any) => {
      return data?.sponsoredBannerThree.type === "product";
    },
  },
  {
    name: `sponsoredBannerThree.href`,
    label: "Enter External Link [eg. https://google.com]",
    type: "nested-string",
    isRequired: true,
    renderCondition: (data: any) => {
      return data?.sponsoredBannerThree.type === "external";
    },
  },
  {
    name: `sponsoredBannerThree.href`,
    label: "Select Collection",
    type: "nested-data-menu",
    model: "collections",
    isRequired: true,

    renderCondition: (data: any) => {
      return data?.sponsoredBannerThree.type === "collection";
    },
  },
  {
    name: `sponsoredBannerThree.href`,
    label: "Select Cateogry",
    type: "nested-data-menu",
    model: "categories",
    isRequired: true,
    renderCondition: (data: any) =>
      data?.sponsoredBannerThree.type == "category",
  },

  {
    sectionTitle: "Href",
    name: `sponsoredBannerThree.href`,
    label: "Href",
    type: "text",
  },
  ...generateImageModel("sponsoredBannerThree.css", "Banner Style"),
];

const SponsoredBannerThree: FC<SponsoredBannerThreeProps> = ({
  content,
  basic,
  path,
  data,
  dataModel,
  ...props
}) => {
  const { display } = useAppSelector((state) => state.builder);
  const bannerData = content?.sponsoredBannerThree;

  return (
    <HoverContentContainer
      type="content"
      path={path}
      title="Banner Information"
      data={content}
      dataModel={model}
      bg={basic?.bgColor}
      px={{
        base: PADDING_X.base,
        md: display === "sm" ? PADDING_X.base : PADDING_X.md,
      }}
    >
      <Flex w="full" {...props}>
        <Box
          width={{
            base: bannerData?.css?.width.base,
            md:
              display === "sm"
                ? bannerData?.css?.width?.base
                : bannerData?.css?.width?.md,
          }}
          h={{
            base: bannerData?.css?.height.base,
            md:
              display === "sm"
                ? bannerData?.css?.height?.base
                : bannerData?.css?.height?.md,
          }}
          {...props}
        >
          <Image
            {...bannerData?.css}
            h={{
              base: bannerData?.css?.height.base,
              md:
                display === "sm"
                  ? bannerData?.css?.height?.base
                  : bannerData?.css?.height?.md,
            }}
            width={{
              base: bannerData?.css?.width.base,
              md:
                display === "sm"
                  ? bannerData?.css?.width?.base
                  : bannerData?.css?.width?.md,
            }}
            src={bannerData?.css?.src?.md}
            alt="Ad image"
            // src={{
            // 	base: bannerData?.css?.src?.base || bannerData?.src?.md,
            // 	md:
            // 		display === 'sm'
            // 			? bannerData?.css?.src?.base || bannerData?.src?.md
            // 			: bannerData?.css?.src?.md,
            // }}
            // borderRadius={`${bannerData?.borderRadius}px`}
            // w='full'
            // h='full'
            // aspectRatio={16 / 9}
            // objectFit='cover'
            // src={bannerData?.image}
            // alt='Banner Image'
          />
        </Box>
      </Flex>
    </HoverContentContainer>
  );
};

export default SponsoredBannerThree;
