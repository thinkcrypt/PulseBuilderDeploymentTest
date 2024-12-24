import { FC } from "react";
import {
  BoxProps,
  Flex,
  FlexProps,
  Grid,
  Image,
  TextProps,
} from "@chakra-ui/react";

const TEMPLATE_COLUMN = {
  base: "repeat(2, 1fr)",
  md: "repeat(3, 1fr)",
  lg: "repeat(4, 1fr)",
  xl: "repeat(5, 1fr)",
  "2xl": "repeat(6, 1fr)",
};

type FeaturedCategoryProps = BoxProps & {
  content: any;
  basic: any;
};
import { HomeContentProps, HoverContentContainer } from "@/components/library";

import Headng from "@/components/text/Heading";
import NormalText from "@/components/text/NormalText";
import { jsonData } from "@/components/library/config/lib/data";
export const padding = {
  PADDING_X_2XL: "18rem",
  PADDING_X_LG: "12rem",
  PADDING_X_MOBILE: "1rem",
};

type ServiceContentProps = {};
export const PADDING_X = { base: 6, md: 24 };
// dataModel, content, path, data
const ServiceContent: FC<HomeContentProps> = ({
  dataModel,
  content,
  path,
  data,
  basic,
}) => {
  const banner = content?.banner;
  const doc: ServiceContentProps = content?.serviceContent;
  let serviceContent = content?.serviceContent;
  if (content?.serviceContent?.length > 0) {
    serviceContent = content?.serviceContent;
  } else {
    serviceContent = jsonData?.serviceContent;
  }

  const css = content?.serviceCSS;

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
      <>
        <Grid gridTemplateColumns={TEMPLATE_COLUMN} gap={4} bg={css?.bgColor}>
          {serviceContent?.map((item: any, i: number) => (
            <ServiceCard
              key={i}
              image={item?.image}
              css={css}
              text={item?.title}
              borderRight={
                i === serviceContent.length - 1
                  ? "none"
                  : css?.showDivider && {
                      base: "none",
                      lg: `1px solid ${css?.dividerColor}`,
                    }
              }
            />
          ))}
        </Grid>
      </>
    </HoverContentContainer>
  );
};

export default ServiceContent;

const Title = ({
  css,
  children,
  ...props
}: TextProps & {
  css: any;

  children: any;
}) => (
  <Headng
    fontSize={{ base: `${css?.titleSizeBASE}px`, lg: `${css?.titleSizeBG}px` }}
    color={css?.titleColor}
    css={css}
    {...props}
  >
    {children}
  </Headng>
);

const ServiceImage = ({
  css,

  children,
  src,
  ...props
}: FlexProps & {
  css: any;
  src: string;
}) => (
  <Flex
    w={`${css?.imageWidth}px`}
    h={`${css?.imageHeight}px`}
    mr="16px"
    {...props}
  >
    <Image
      w="full"
      h="auto"
      src={src}
      alt="Service Image"
      objectFit="contain"
    />
  </Flex>
);

const ServiceCard = ({
  css,

  image,
  text,
  ...props
}: FlexProps & {
  css: any;

  image: string;
  text: string;
}) => (
  <Flex alignItems="center" {...props}>
    <ServiceImage src={image} css={css} />
    <Title css={css}>{text}</Title>
  </Flex>
);
