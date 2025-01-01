import useColors from "@/components/library/hooks/useColors";
import NormalText from "@/components/text/NormalText";
import { Box, BoxProps, Center, Flex, TextProps } from "@chakra-ui/react";
import { FC } from "react";

type ProductPriceProps = TextProps & {
  css?: any;
  basic: any;
  productData: any;
};

const ProductPrice: FC<ProductPriceProps> = ({
  basic,
  css,
  title,
  productData,
  ...props
}) => {
  const colors = useColors();

  const discountValue =
    productData?.discountType === "percentage"
      ? (productData?.price * productData?.discount) / 100
      : productData?.discountType === "flat"
      ? productData?.discount
      : 0;

  const finalPrice = productData?.isDiscount
    ? productData?.price - discountValue
    : productData?.price;

  return (
    <Flex alignItems="center" mb="1rem">
      <NormalText
        basic={basic}
        css={css}
        fontSize={{
          base: `${css?.priceFontSizeBase}px`,
          lg: `${css?.priceFontSizeBg}px`,
        }}
        fontWeight={css?.priceFontWeight}
        color={css?.priceColor}
        mr="12px"
      >
        {`Tk. ${finalPrice?.toLocaleString()}`}
      </NormalText>

      {productData?.isDiscount && (
        <NormalText
          css={css}
          basic={basic}
          textDecoration="line-through"
          fontSize={`14px`}
          fontWeight="600"
          color={colors?.cardText}
          {...props}
        >
          {`Tk. ${productData?.price?.toLocaleString()}`}
        </NormalText>
      )}
    </Flex>
  );
};

export default ProductPrice;
