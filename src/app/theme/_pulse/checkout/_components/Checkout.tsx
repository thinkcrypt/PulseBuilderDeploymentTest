// import { useColors } from '@/library';
import { Box, BoxProps, Grid, GridItem } from "@chakra-ui/react";
import { FC, ReactNode, useState } from "react";
import { FormField, OrderSummary } from "./index";
// import useColors from "@/components/library/hooks/useColors";
// import NormalText from "@/components/text/NormalText";
import { addressFields } from "./addressFields";
import { HoverContentContainer } from "@/components/library";
import useColors from "../../_core-components/hooks/useColors";
import { PADDING_X } from "../../_core-components/config/lib/constants/constants";
import NormalText from "../../_core-components/components/text/NormalText";
// import { PADDING_X } from "@/components/library/config/lib/constants/constants";

type CheckoutProps = BoxProps & {
  basic: any;
  content: any;
  data?: any;
  dataModel?: any;
  path?: any;
};
export type AddressTypes = {
  name: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: number | null;
};

const Checkout: FC<CheckoutProps> = ({
  basic,
  content,
  data,
  dataModel,
  path,
}) => {
  const [address, setAddress] = useState<AddressTypes>({
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    country: "Bangladesh",
    postalCode: null,
  });

  const handleInputChange = (fieldKey: string, value: string | number) => {
    setAddress((prev: any) => ({
      ...prev,
      [fieldKey]: value,
    }));
  };

  const colors = useColors();
  const css = content?.checkoutCss;

  const isBtnDisabled =
    !address.name ||
    !address.email ||
    !address.phone ||
    !address.street ||
    !address.city ||
    !address.state ||
    !address.postalCode;

  return (
    <HoverContentContainer
      type="content"
      path={path}
      title="Login Information"
      data={content}
      edit={true}
      dataModel={dataModel}
      position="sticky"
      top="0"
    >
      <Box bg={css?.bgColor} py={12} px={PADDING_X}>
        <NormalText
          basic={basic}
          fontWeight={css?.headingWeight || 600}
          fontSize={{
            base: `${css?.headingSizeBase}px`,
            lg: `${css?.headingSizeBg || 24}px`,
          }}
          color={css?.fgColor}
          mb="1rem"
        >
          Checkout
        </NormalText>
        <form>
          <Grid gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={6}>
            <Box>
              <GridContainer basic={basic} css={css}>
                <NormalText
                  basic={basic}
                  fontWeight={css?.cardTitleWeight || 600}
                  fontSize={{
                    base: `${css?.cartTitleSizeBase}px`,
                    lg: `${css?.cartTitleSizeBg || 20}px`,
                  }}
                  color={css?.cardFg}
                >
                  Address
                </NormalText>
                {addressFields.map((field: any, i: number) => (
                  <GridItem
                    key={i}
                    colSpan={
                      field.fieldKey === "name" || field.fieldKey === "street"
                        ? { base: 1, lg: 2 }
                        : 1
                    }
                  >
                    <FormField
                      isRequired={field.isRequired}
                      type={field.type}
                      label={field.label}
                      value={
                        address[field.fieldKey as keyof AddressTypes] || ""
                      }
                      placeholder={field.placeholder}
                      onChange={(value) =>
                        handleInputChange(field.fieldKey, value)
                      }
                      basic={basic}
                      css={css}
                    />
                  </GridItem>
                ))}
              </GridContainer>
            </Box>
            <OrderSummary
              bg={css?.cardBg || colors?.white}
              color={css?.cardFg}
              px="1rem"
              py="1rem"
              borderRadius="4px"
              basic={basic}
              css={css}
              isBtnDisabled={isBtnDisabled}
              addressData={address}
            />
          </Grid>
        </form>
      </Box>
    </HoverContentContainer>
  );
};

export default Checkout;

const GridContainer = ({
  children,
  basic,
  css,
  ...props
}: BoxProps & { children: ReactNode; basic: any; css: any }) => {
  const colors = useColors();

  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      gap={4}
      bg={css?.cardBg || colors?.white}
      color={css?.cardFg}
      px="1rem"
      py="1rem"
      borderRadius="4px"
      {...props}
    >
      {children}
    </Grid>
  );
};
