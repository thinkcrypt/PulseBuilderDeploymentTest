import { BoxProps, Flex, Image } from '@chakra-ui/react';
import React, { FC } from 'react';

import Link from 'next/link';
import { FlexColumn } from '@/components/common';
import { NormalText } from '../../text';
import { cartBoxShadow } from '@/components/library/config/lib/constants/constants';
import { useGetItemNameById } from '@/components/library';

type CollectionCard = BoxProps & {
	// item?: any;
	css?: any;
	basic?: any;
	path?: any;
	id?: any;
	data?: any;
};

const CollectionCard: FC<CollectionCard> = ({
	// item,
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
	// console.log('name image', name, image);
	return (
		<Link href={data?.link || '/'}>
			<FlexColumn
				alignItems='center'
				h='full'
				// bg={css?.bgColor}
				justifyContent='center'
				borderRadius={'12px'}
				px='1rem'
				py='.5rem'
				boxShadow={css?.boxShadow || cartBoxShadow}
				_hover={{ color: css?.fgColorHover }}
			>
				<Flex w='full' maxH='100px'>
					<Image
						w={'full'}
						h={'auto'}
						src={image}
						objectFit='contain'
						alt={'image'}
					/>
				</Flex>

				<NormalText
					basic={basic}
					color={css?.fgColor}
					textAlign='center'
					mt='12px'
				>
					{name}
				</NormalText>
			</FlexColumn>
		</Link>
	);
};

export default CollectionCard;
