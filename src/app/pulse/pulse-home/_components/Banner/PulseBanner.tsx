import React, { FC, ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { placeholderLogo } from "@/components/library/config/lib/constants/constants";
import { Autoplay } from "swiper/modules";
import {
  Box,
  BoxProps,
  Center,
  CenterProps,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import {
  HomeContentProps,
  HoverContentContainer,
  Icon,
  IconNameOptions,
} from "@/components/library";
// import { PADDING_X } from '.';
export const padding = {
  PADDING_X_2XL: "18rem",
  PADDING_X_LG: "12rem",
  PADDING_X_MOBILE: "1rem",
};

type BannerConfigProps = {};
export const PADDING_X = { base: 6, md: 24 };
// dataModel, content, path, data
const BannerConfig: FC<HomeContentProps> = ({
  dataModel,
  content,
  path,
  data,
  basic,
}) => {
  const banner = content?.banner;
  const doc: BannerConfigProps = content?.banner;
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
      <Box>
        <BannerSlider hero={content?.hero} />
      </Box>
    </HoverContentContainer>
  );
};

export default BannerConfig;

type BannerSliderProps = {
  hero: any;
};

const BannerSlider: FC<BannerSliderProps> = ({ hero }) => {
  let images;

  if (hero?.images?.length > 0) {
    images = hero?.images;
  } else {
    images = [placeholderLogo, placeholderLogo];
  }

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    speed: 1000,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {images?.map((item: any, i: number) => (
        <Flex w="full" h={`${hero?.height}px`} key={i}>
          <Image
            w="full"
            h="full"
            objectFit="cover"
            src={item}
            alt={item.name}
          />
        </Flex>
      ))}
    </Slider>
  );
};
