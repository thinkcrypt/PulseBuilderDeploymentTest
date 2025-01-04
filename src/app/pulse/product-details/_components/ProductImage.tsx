import { BoxProps, Flex, Image } from "@chakra-ui/react";
import { FC } from "react";

type ProductImageProps = BoxProps & {
  src: string;
};

const ProductImage: FC<ProductImageProps> = ({ src, ...props }) => {
  return (
    <Flex w="full" maxH="450px">
      <Image
        src={src}
        w="full"
        h="auto"
        alt="productImage"
        objectFit="contain"
      />
    </Flex>
  );
};

export default ProductImage;
