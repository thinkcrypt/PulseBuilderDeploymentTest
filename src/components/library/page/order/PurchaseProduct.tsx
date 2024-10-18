import React from 'react';
import { useState } from 'react';

import { useIsMobile, CustomTd as Td, Icon, RowContainerMd, RowContainerBase } from '../../';
import { Box, useToast } from '@chakra-ui/react';
import InputElement from '../../utils/inputs/input-components/InputElement';

const PurchaseProduct = ({ item, i, setItem }: { item: any; i: number; setItem: any }) => {
	const isMobile = useIsMobile();

	const [qty, setQty] = useState(item.qty);
	const [price, setPrice] = useState(item?.price);
	const toast = useToast();

	const handlePrice = (e: any) => {
		setPrice(e.target.value);
		setItem({ price: e.target.value, item, qty });
	};

	const handleReturnQty = (e: any) => {
		if (e.target.value < 0) {
			return;
		}

		setQty(e.target.value);
		setItem({ price: price, item, qty: e.target.value });
	};

	const Container = ({ children, isMobile }: { children?: any; isMobile: boolean }) =>
		isMobile ? (
			<RowContainerBase>{children}</RowContainerBase>
		) : (
			<RowContainerMd>{children}</RowContainerMd>
		);

	return (
		<RowContainerMd>
			<Td heading='#'>{i + 1}</Td>
			<Td heading='Product Name'>{item?.name}</Td>
			<Td
				heading='Qty'
				isNumeric={!isMobile && true}>
				<InputElement
					size='xs'
					type='number'
					value={qty}
					onChange={handleReturnQty}
					w='100px'
				/>
			</Td>

			<Td
				isNumeric={!isMobile && true}
				heading='Cost Price'>
				<InputElement
					size='xs'
					type='number'
					value={price}
					onChange={handlePrice}
					w='100px'
				/>
			</Td>
			<Td
				isNumeric
				heading='SubTotal'>
				{item?.subTotal}
			</Td>
			<Td isNumeric>
				<Box cursor='pointer'>
					<Icon name='delete' />
				</Box>
			</Td>
		</RowContainerMd>
	);
};

export default PurchaseProduct;
