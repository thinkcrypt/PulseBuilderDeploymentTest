import { Box, Center, Flex, FlexProps, Grid } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { CountCard, OrderList } from "./index";
import { useAppSelector, useGetAllQuery } from "@/components/library";
// import Heading from '@/components/text/Heading';
import Heading from '../../../../../../_core-components/components/text/Heading';
type OrderComponentProps = FlexProps & {
  basic: any;
  css: any;
};

const OrderComponent: FC<OrderComponentProps> = ({ basic, css, ...props }) => {
  const BORDER = `1px solid ${css?.borderColor || "#e7e7e7"}`;

  const { data: ordersData, isFetching } = useGetAllQuery({
    path: `orders`,
  });

  const { cartItems } = useAppSelector((state) => state.cart);

  const cartTotal = cartItems.reduce(
    (acc: any, item: any) => acc + item.qty,
    0
  );

  return (
    <Box>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        pb="1rem"
        gap={8}
        {...props}
      >
        <CountCard
          basic={basic}
          css={css}
          count={ordersData?.totalDocs}
          title="Total Order"
          isLoading={isFetching}
        />
        <CountCard
          basic={basic}
          css={css}
          count={ordersData?.totalDocs}
          title="New Order"
          isLoading={isFetching}
        />
        <CountCard
          basic={basic}
          css={css}
          count={cartTotal}
          title="Total Cart"
          isLoading={isFetching}
        />
      </Flex>
      <Heading
        fontSize="1.2rem"
        fontWeight="500"
        color={css?.cardFg || "#000"}
        basic={basic}
        mb="1rem"
      >
        Order List
      </Heading>
      <Box>
        <OrderList
          orderData={ordersData}
          isFetching={isFetching}
          basic={basic}
          css={css}
        />
      </Box>
    </Box>
  );
};

export default OrderComponent;
