import React, { FC, useState, ReactNode } from 'react';
import { Tr, TextProps } from '@chakra-ui/react';

type RowContainerMdProps = TextProps & {
	children: ReactNode;
};

const RowContainerMd: FC<RowContainerMdProps> = ({ children, ...props }) => {
	const [bg, setBg] = useState('transparent');
	const handleMouseEnter = () => {
		setBg('#ddd');
	};
	const handleMouseLeave = () => {
		setBg('transparent');
	};
	return (
		<Tr
			h='2.5rem'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			{...props}>
			{children}
		</Tr>
	);
};

export default RowContainerMd;
