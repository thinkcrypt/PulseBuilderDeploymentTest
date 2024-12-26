import { BoxProps, Image } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

import Link from "next/link";
import FlexColumn from "@/components/common/FlexColumn";
import NormalText from "@/components/text/NormalText";

type CollectionCard = BoxProps & {
  item: any;
  css: any;
};

const CollectionCard: FC<CollectionCard> = ({ item, css, ...props }) => {
  return (
    <Link href={item?.link}>
      <FlexColumn
        alignItems="center"
        h="full"
        bg={css?.bgColor}
        justifyContent="center"
        borderRadius={css?.borderRadius}
        px="1rem"
        py="1rem"
        gap={4}
      >
        <Image
          w={css?.imageWidth}
          h={css?.imageHeight}
          src={item?.image}
          objectFit="cover"
        />
        <NormalText color={css?.fgColor} textAlign="center">
          {item?.text}
        </NormalText>
      </FlexColumn>
    </Link>
  );
};

export default CollectionCard;
