import { Tag, TagLabel, TagProps } from '@chakra-ui/react';
import React from 'react';

import { Icon } from '../../';

type FilterProps = TagProps & {
	children: React.ReactNode;
	isActive?: boolean;
};

const Filter: React.FC<FilterProps> = ({ children, isActive, ...props }) => {
	return (
		<Tag
			userSelect='none'
			cursor='pointer'
			bg='transparent'
			borderRadius='full'
			border='1px dashed'
			borderColor='gray.400'
			color='gray.600'
			fontWeight='600'
			_dark={{
				borderColor: 'gray.400',
				color: 'gray.200',
			}}
			size='sm'
			pl={1}
			py={1}
			{...props}>
			<Icon
				name='add-tag'
				size={16}
			/>
			<TagLabel ml={1}>{children}</TagLabel>
			{/* <Icon
				name='close'
				size={16}
			/> */}
		</Tag>
	);
};

export default Filter;
