import React, { FC, ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Flex, Image } from "@chakra-ui/react";
import { HoverContentContainer } from "@/components/library";
import { PADDING_X, placeholderLogo } from "../../../_components/index";
import { useAppSelector } from "@/hooks";

type HomeContentProps = {
  content: any;
  dataModel: any;
  path: any;
  data?: any;
  basic?: any;
};

// dataModel, content, path, data
const HeroConfig: FC<HomeContentProps> = ({
  dataModel,
  content,
  path,
  data,
  basic,
}) => {
  const { display } = useAppSelector((state) => state.builder);
  return (
    <HoverContentContainer
      type="content"
      path={path}
      title="Banner Information"
      data={content}
      dataModel={dataModel}
      bg={basic?.bgColor}
      position="sticky"
      px={{
        base: 0,
        md: display === "sm" ? 0 : PADDING_X.md,
      }}
      top="0"
    >
      <BannerSlider hero={content?.hero} />
    </HoverContentContainer>
  );
};

export default HeroConfig;

type BannerSliderProps = {
  hero: any;
};

const BannerSlider: FC<BannerSliderProps> = ({ hero }) => {
  const { display } = useAppSelector((state) => state.builder);

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
        <Flex
          w="full"
          h={{
            base: `${hero?.heightBase}px`,
            lg: display == "sm" ? `${hero?.heightBase}px` : `${hero?.height}px`,
          }}
          key={i}
        >
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
