"use client";

import {
  Button,
  HStack,
  Input,
  InputProps,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Spacer,
  useDisclosure,
  useRadioGroup,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";

import {
  applyFilters,
  clearFilters,
  currency,
  HoverContentContainer,
  SpaceBetween,
  useAppDispatch,
  useAppSelector,
} from "@/components/library";
// import { SimpleButton } from "@/components/library/components/button";
// import Heading from "@/components/text/Heading";
// import { FlexColumn } from "@/components/common";
import { RadioCard } from "./index";
import filterModalCssSchema from "./filterModalSchema";
import { SimpleButton } from "../../_core-components/components/button";
import Heading from "../../_core-components/components/text/Heading";
import { FlexColumn } from "../../_core-components/components/common";

const stockOptions = [
  { label: "Show In Stock Products", value: "1" },
  { label: "Show All Products", value: "2" },
];

const FilterModal = ({
  onApply,
  onClear,
  basic,
  content,
  data,
  dataModel,
  css,
  path,
}: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inStock, setInStock] = useState<any>("2");
  const dispatch = useAppDispatch();

  const { filters } = useAppSelector((state: any) => state.table);

  const [price, setPrice] = useState({
    min: 10,
    max: filters?.price_btwn?.split("_")[1] || 1000,
  });
  const [range, setRange] = useState([10, 1000]);

  const [isLoading, setIsLoading] = useState(false);

  const onPriceChange = (e: any) => {
    const { name, value } = e.target;
    setPrice((prev) => ({ ...prev, [name]: value }));
    if (name === "min") setRange([Number(value), range[1]]);
    else setRange([range[0], Number(value)]);
  };

  const onApplyFilters = () => {
    if (inStock === "1") {
      dispatch(applyFilters({ key: "stock_gt", value: 0 }));
    } else {
      dispatch(applyFilters({ key: "stock_gt", value: "" }));
    }
    if (range[0] !== 10 || range[1] !== 1000) {
      dispatch(
        applyFilters({ key: "price_btwn", value: `${range[0]}_${range[1]}` })
      );
    }

    onApply();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 500);
  };

  const onClearFilters = () => {
    dispatch(clearFilters());
    setInStock("2");
    setRange([10, 1000]);
    onClear();
    onClose();
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "inStock",
    defaultValue: "2",
    onChange: setInStock,
  });

  const group = getRootProps();

  return (
    <>
      <SimpleButton
        bg={css?.filterBtnBg || "#F26E21"}
        color={css?.filterBtnFg || "#fff"}
        _hover={{ bg: css?.filterBtnHoverBg, color: css?.filterBtnHoverFg }}
        basic={basic}
        onClick={onOpen}
      >
        Filters
      </SimpleButton>

      <Modal isOpen={isOpen} size="xl" onClose={onClose}>
        <ModalOverlay />

        <ModalContent
          bg={css?.bgColor || "#fff"}
          borderRadius={`${css?.borderRadius || 20}px`}
        >
          <HoverContentContainer
            type="content"
            path={path}
            title="Footer Information"
            data={content}
            dataModel={filterModalCssSchema}
            // bg={basic?.bgColor}
            position="sticky"
            top="0"
          >
            <ModalHeader
              textAlign="center"
              fontWeight="600"
              borderBottom={`1px solid ${css?.borderColor || "#d1d1d1"}`}
            >
              <Heading
                fontSize={`${css?.headingSize || 16}px`}
                color={css?.fgColor}
                basic={basic}
                fontWeight={css?.headingWeight || 600}
              >
                Filters
              </Heading>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody py={4}>
              <FlexColumn gap={6}>
                <FilterSection css={css} basic={basic} title="Stock Options">
                  <HStack {...group}>
                    {stockOptions.map((item, i: number) => {
                      const radio = getRadioProps({ item });
                      return (
                        <RadioCard
                          key={i}
                          value={item?.value}
                          isSelected={inStock === item?.value}
                          {...radio}
                          css={css}
                        >
                          {item?.label}
                        </RadioCard>
                      );
                    })}
                  </HStack>
                </FilterSection>
                <FilterSection
                  css={css}
                  basic={basic}
                  title={`Price Range (${currency.symbol}
									${range[0].toLocaleString()} - ${currency.symbol}
									${range[1].toLocaleString()})`}
                >
                  <RangeSlider
                    min={price.min}
                    max={price.max}
                    onChange={(e: any) => setRange(e)}
                    defaultValue={[10, 1000]}
                  >
                    <RangeSliderTrack>
                      <RangeSliderFilledTrack
                        bg={css?.rangeFillColor || "#F26E21"}
                      />
                    </RangeSliderTrack>
                    <RangeSliderThumb
                      index={0}
                      boxSize={6}
                      borderColor="black"
                    />
                    <RangeSliderThumb
                      index={1}
                      boxSize={6}
                      borderColor="black"
                    />
                  </RangeSlider>
                  <SpaceBetween>
                    <RangeInput
                      css={css}
                      basic={basic}
                      isReadOnly
                      title="Min"
                      value={price.min}
                    />
                    <Spacer />
                    <RangeInput
                      css={css}
                      basic={basic}
                      title="Max"
                      name="max"
                      value={price.max}
                      onChange={onPriceChange}
                    />
                  </SpaceBetween>
                </FilterSection>
              </FlexColumn>
            </ModalBody>

            <ModalFooter
              borderTop={`1px solid ${css?.borderColor || "#d1d1d1"}`}
            >
              <SpaceBetween>
                <Button
                  color={css?.fgColor || "#000"}
                  fontWeight="600"
                  variant="link"
                  onClick={onClearFilters}
                >
                  Clear All
                </Button>
                <SimpleButton
                  basic={basic}
                  isLoading={isLoading}
                  borderRadius="full"
                  onClick={onApplyFilters}
                  bg={css?.applyBtnBg || "#F26E21"}
                  color={css?.applyBtnFg || "#fff"}
                  _hover={{
                    bg: css?.applyBtnHoverBg,
                    color: css?.applyBtnHoverFg,
                  }}
                >
                  Apply Filters
                </SimpleButton>
              </SpaceBetween>
            </ModalFooter>
          </HoverContentContainer>
        </ModalContent>
      </Modal>
    </>
  );
};

const FilterSection = ({
  children,
  title,
  basic,
  css,
}: {
  children: ReactNode;
  title: string;
  basic: any;
  css: any;
}) => {
  return (
    <FlexColumn gap={4}>
      <Heading color={css?.fgColor} basic={basic} size="sm">
        {title}
      </Heading>
      {children}
    </FlexColumn>
  );
};

const RangeInput = ({
  title,
  basic,
  css,
  ...props
}: InputProps & { title: string; basic: any; css: any }) => (
  <FlexColumn flex={0}>
    <Heading basic={basic} size="sm">
      {title}
    </Heading>
    <Input
      border={`1px solid ${css?.borderColor || "#d1d1d1"}`}
      borderRadius="full"
      w="100px"
      type="number"
      {...props}
    />
  </FlexColumn>
);

export default FilterModal;
