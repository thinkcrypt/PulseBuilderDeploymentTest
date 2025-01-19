import React, { FC, useEffect } from 'react';
import { useState } from 'react';

import { CustomTd as Td, RowContainerBase, Icon } from '../../';
import { Box, Tr, Td as TD, InputProps } from '@chakra-ui/react';
import InputElement from '../../utils/inputs/input-components/InputElement';
import { currency } from '@/lib/constants';

type PurchaseProductProps = {
	item: any;
	i: number;
	setItem: any;
	deleteItem: any;
	viewOnly?: boolean;
	isMobile?: boolean;
};

const TransferProduct: FC<PurchaseProductProps> = ({ item, i, setItem, isMobile, deleteItem }) => {
	const [qty, setQty] = useState(1);

	useEffect(() => {
		setQty(item?.qty);
	}, []);

	const handleReturnQty = (e: any) => {
		if (e.target.value < 0) {
			return;
		}
		setQty(e.target.value);
		setItem({ item, qty: e.target.value });
	};

	const icon = (
		<Box
			cursor='pointer'
			onClick={() => deleteItem(item?._id)}>
			<Icon
				name='delete'
				color='crimson'
			/>
		</Box>
	);

	if (isMobile)
		return (
			<RowContainerBase>
				<Td heading='#'>{i + 1}</Td>
				<Td heading='Product Name'>{item?.name}</Td>

				<Td heading='Qty'>
					<InputElement
						{...inputStyle}
						value={qty}
						onChange={handleReturnQty}
					/>
				</Td>

				<Td heading='Unit Price'>
					{currency.code} {item?.price?.toLocaleString()}
				</Td>
				<Td
					isNumeric
					heading='SubTotal'>
					{item?.price * qty}
				</Td>

				<Td>{icon}</Td>
			</RowContainerBase>
		);
	return (
		<Tr h='2.5rem'>
			<TD>{i + 1}</TD>
			<TD>{item?.name}</TD>

			<TD>
				<InputElement
					{...inputStyle}
					value={qty}
					onChange={handleReturnQty}
				/>
			</TD>

			<TD>
				{currency.symbol} {item?.price?.toLocaleString()}
			</TD>
			<TD isNumeric>
				{currency.symbol} {(item?.price * qty).toLocaleString()}
			</TD>

			<TD>{icon}</TD>
		</Tr>
	);
};

const inputStyle: InputProps = {
	size: 'xs',
	type: 'number',
	w: '100px',
};

export default TransferProduct;
