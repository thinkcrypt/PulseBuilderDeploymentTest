'use client';

import React, { FC } from 'react';
import { GridItem, useColorModeValue } from '@chakra-ui/react';

type FormItemProps = {
	item: {
		startOfSection?: boolean;
		sectionTitle?: string;
		span?: number;
		description?: string;
	};
	children: React.ReactNode;
	isHidden?: boolean;
};

const FormItem: FC<FormItemProps> = ({
	item: { startOfSection, sectionTitle, span, description },
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
				<>
					<GridItem
						colSpan={2}
						fontSize='18px'
						fontWeight='700'
						mb={description ? -4 : -2}>
						{sectionTitle}
					</GridItem>

					{description && (
						<GridItem
							colSpan={2}
							fontSize='14px'
							my={-2}>
							{description}
						</GridItem>
					)}
				</>
			)}

			<GridItem colSpan={span || 2}>{children}</GridItem>
		</>
	);
};

export default FormItem;
