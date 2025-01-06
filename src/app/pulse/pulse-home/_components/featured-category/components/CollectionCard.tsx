import { BoxProps, Flex, FlexProps, Image } from "@chakra-ui/react";
import React, { FC } from "react";

import Link from "next/link";
import { FlexColumn } from "@/components/common";
import { NormalText } from "../../text";
import { cartBoxShadow } from "@/components/library/config/lib/constants/constants";
import { useGetItemNameById } from "@/components/library";

type CollectionCard = BoxProps & {
  item?: any;
  css?: any;
  basic?: any;
  path?: any;
  id?: any;
  data?: any;
};

const CollectionCard: FC<CollectionCard> = ({
  item,
  path,
  css,
  basic,
  id,
  data,
  ...props
}) => {
  const { name, image } = useGetItemNameById({
    id,
    path,
  });
  console.log("name image", name, image);
  return (
    <Link href={`/collections/${id}` || "/"}>
      <CardWrapper css={css} basic={basic} {...props}>
        <Flex w="full" maxH="60px">
          <Image
            w={"full"}
            h={"auto"}
            src={image}
            objectFit="contain"
            alt="featured categories"
          />
        </Flex>
        <NormalText
          basic={basic}
          color={css?.fgColor}
          textAlign="center"
          mt="12px"
        >
          {name}
        </NormalText>
      </CardWrapper>
    </Link>
  );
};

export default CollectionCard;
const CardWrapper = ({
  children,
  basic,
  css,
  ...props
}: FlexProps & { children: any; css: any; basic: any }) => (
  <FlexColumn
    alignItems="center"
    h="full"
    bg={css?.bgColor}
    justifyContent="center"
    borderRadius={"12px"}
    px="1rem"
    py=".5rem"
    boxShadow={css?.boxShadow || cartBoxShadow}
    _hover={{ color: css?.fgColorHover }}
    {...props}
  >
    {children}
  </FlexColumn>
);
