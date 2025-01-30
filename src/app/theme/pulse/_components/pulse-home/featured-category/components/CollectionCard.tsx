import { BoxProps, Flex, FlexProps, Image } from '@chakra-ui/react';
import React, { FC } from 'react';

import Link from 'next/link';
import { useGetItemNameById } from '@/components/library';
import {
	FlexColumn,
	NormalText,
	cartBoxShadow,
} from '../../../../_components/index';
type CollectionCard = BoxProps & {
	item?: any;
	css?: any;
	basic?: any;
	path?: any;
	id?: any;
	data?: any;
};

const CollectionCard: FC<CollectionCard> = ({
	item,
	path,
	css,
	basic,
	id,
	data,
	...props
}) => {
	const { name, image } = useGetItemNameById({
		id,
		path,
	});
	// console.log("name image", name, image);
	return (
		<Link href={`/category/${id}`}>
			<CardWrapper css={css} basic={basic} {...props}>
				<Flex
					w={`${css?.imageWidth}px`}
					h={`${css?.imageHeight}px`}
					maxH='60px'
				>
					<Image
						w={'full'}
						h={'auto'}
						src={image}
						objectFit='contain'
						alt='featured categories'
					/>
				</Flex>
				<NormalText
					basic={basic}
					color={css?.fgColor}
					fontSize={css?.fontSize}
					fontWeight={css?.fontWeight}
					textAlign='center'
					_hover={{ color: 'inherit' }}
					mt='12px'
				>
					{name}
				</NormalText>
			</CardWrapper>
		</Link>
	);
};

export default CollectionCard;

const CardWrapper = ({
	children,
	basic,
	css,
	...props
}: FlexProps & { children: any; css: any; basic: any }) => (
	<FlexColumn
		alignItems='center'
		h='full'
		bg={css?.bgColor}
		justifyContent='center'
		borderRadius={`${css?.borderRadius}px`}
		boxShadow={css?.boxShadow}
		_hover={{ color: css?.fgColorHover }}
		py={css?.innerGap}
		px={css?.innerGap}
		{...props}
	>
		{children}
	</FlexColumn>
);
