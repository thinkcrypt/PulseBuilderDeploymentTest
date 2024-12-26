import { HoverContentContainer } from "@/components/library";
import { placeholderLogo } from "@/components/library/config/lib/constants/constants";
import {
  BoxProps,
  Flex,
  FlexProps,
  Grid,
  GridProps,
  Image,
} from "@chakra-ui/react";
import React, { FC } from "react";

const TEMPLATE_COLUMN = {
  base: "repeat(2, 1fr)",
  md: "repeat(3, 1fr)",
  xl: "repeat(4, 1fr)",
};

type SponsoredBannerThreeProps = BoxProps & {};
export const PADDING_X = { base: 6, md: 24 };
// dataModel, content, path, data
const SponsoredBannerThree: FC<any> = ({
  dataModel,
  content,
  path,
  data,
  basic,
  children,
}) => {
  const banner = content?.banner;
  const bannerData = content?.sponsoredBannerThree;

  return (
    <HoverContentContainer
      type="content"
      path={path}
      title="Banner Information"
      data={content}
      dataModel={dataModel}
      bg={banner?.bgColor}
      borderBottom={`1px solid ${banner?.borderColor}`}
      px={PADDING_X}
      position="sticky"
      top="0"
    >
      <Flex w="full" h={bannerData?.h}>
        <Image w="full" h="auto" objectFit="cover" src={bannerData?.image} />
      </Flex>
    </HoverContentContainer>
  );
};

export default SponsoredBannerThree;
