'use client';

import React, { FC } from 'react';
import { GridItem, useColorModeValue } from '@chakra-ui/react';

type FormItemProps = {
	item: {
		startOfSection?: boolean;
		sectionTitle?: string;
		span?: number;
	};
	children: React.ReactNode;
	isHidden?: boolean;
};

const FormItem: FC<FormItemProps> = ({
	item: { startOfSection, sectionTitle, span },
	children,
	isHidden = false,
}) => {

	const clr = useColorModeValue('gray.200', 'gray.700');
	if (isHidden) return null;
	return (
		<>
			{startOfSection && (
				<GridItem
					colSpan={2}
					borderTop='1px solid'
					borderColor={clr}
					my={2}
				/>
			)}
			{sectionTitle && (
				<GridItem
					colSpan={2}
					fontSize='18px'
					fontWeight='700'
					mb={-2}>
					{sectionTitle}
				</GridItem>
			)}
			<GridItem colSpan={span || 2}>{children}</GridItem>
		</>
	);
};

export default FormItem;
