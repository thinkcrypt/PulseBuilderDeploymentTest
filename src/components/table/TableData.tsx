import { Td, FlexProps } from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';

type TableDataProps = FlexProps & {
	children: any;
	date?: boolean;
	price?: boolean;
};

const PADDING_Y = 1;
const PADDING_X = 4;

const TableData: React.FC<TableDataProps> = ({ children, date, price }) => {
	const fontWeight = price ? '600' : '500';
	const text = price
		? `$ ${children.toLocaleString()}`
		: date
		? moment(children).calendar()
		: children;

	return (
		<Td
			fontSize={date ? '.7rem' : '.82rem'}
			py={PADDING_Y}
			px={PADDING_X}
			fontWeight={fontWeight}>
			{text}
		</Td>
	);
};

export default TableData;
