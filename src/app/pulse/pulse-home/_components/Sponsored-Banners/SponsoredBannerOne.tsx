import { HoverContentContainer } from "@/components/library";
import {
  maxWidth,
  placeholderLogo,
  sectionPadding,
} from "@/components/library/config/lib/constants/constants";
import { Box, BoxProps, Flex, Grid, Image } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

const TEMPLATE_COLUMN = {
  base: "repeat(2, 1fr)",
  md: "repeat(3, 1fr)",
  xl: "repeat(4, 1fr)",
};

type SponsoredBannerOneProps = BoxProps & {};
export const PADDING_X = { base: 6, md: 24 };
// dataModel, content, path, data
const SponsoredBannerOne: FC<any> = ({
  dataModel,
  content,
  path,
  data,
  basic,
}) => {
  const banner = content?.banner;
  const bannerData = content?.sponsoredBannerOne;

  let firstBannerImages;
  if (bannerData?.length > 0) {
    firstBannerImages = bannerData?.serviceContent;
  } else {
    firstBannerImages = [
      placeholderLogo,
      placeholderLogo,
      placeholderLogo,
      placeholderLogo,
    ];
  }

  return (
    <HoverContentContainer
      type="content"
      path={path}
      title="Banner Information"
      data={content}
      dataModel={dataModel}
      bg={basic?.bgColor}
      borderBottom={`1px solid ${banner?.borderColor}`}
      px={PADDING_X}
      position="sticky"
      top="0"
    >
      <SectionPadding bg={basic?.bgcolor} overflow="hidden" py="3rem">
        <Grid
          gridTemplateColumns={{
            base: `1fr 1fr`,
            lg: `repeat(${bannerData?.grid}, 1fr)`,
          }}
          gap={4}
          py="2rem"
        >
          {firstBannerImages?.map((item: any, i: number) => (
            <Flex key={i} w="full" h="auto">
              <Image w="full" h="auto" objectFit="contain" src={item} />
            </Flex>
          ))}
        </Grid>
      </SectionPadding>
    </HoverContentContainer>
  );
};

export default SponsoredBannerOne;

const SectionPadding = ({
  children,
  ...props
}: BoxProps & { children: ReactNode }) => (
  <Box
    px={{
      base: sectionPadding.PADDING_X_MOBILE,
      lg: sectionPadding.PADDING_X_LG,
      "2xl": sectionPadding.PADDING_X_2XL,
    }}
    maxW={maxWidth}
    h="full"
    mx="auto"
    {...props}
  >
    {children}
  </Box>
);
