import { Input, InputProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type FilterInputProps = InputProps & {
	date?: boolean;
};

const FilterInput: FC<FilterInputProps> = ({ date, ...props }) => {
	const style = {
		size: 'xs',
		borderRadius: 'md',
		h: '28px',
		borderColor: 'gray.200',
		px: 2,
		fontSize: '12px',
		_dark: {
			borderColor: 'selectBorder.dark',
		},
		...(date && { w: '100px' }),
	};

	if (date) return <Input sx={style} type='date' {...props} />;
	return <Input sx={style} {...props} />;
};

export default FilterInput;
