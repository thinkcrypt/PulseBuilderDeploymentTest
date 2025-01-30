import { Box, Center, Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { NormalText } from '../../../_components/index';

export type SearchProductCardProps = {
	item: any;
	basic: any;
	css?: any;
};

const SearchProductCard = ({ item, basic, css }: SearchProductCardProps) => {
	return (
		<Link href={`/products/${item?.id}`}>
			<Flex w='full' my='.8rem' gap={4} alignItems='flex-start'>
				<Flex w='50px' h='50px' minW='50px'>
					<Image
						w='full'
						h='full'
						objectFit='cover'
						src={item?.image}
						borderRadius='4px'
						alt='product card'
					/>
				</Flex>
				<Flex flexDir='column'>
					<NormalText
						noOfLines={1}
						color={css?.fgColor}
						fontSize={`${css?.titleSize}px`}
						basic={basic}
					>
						{item?.name}
					</NormalText>
					<Flex gap={4}>
						<NormalText
							fontSize={`${css?.priceSize}px`}
							color={css?.priceColor}
							basic={basic}
						>
							{`Tk. ${item?.price.toLocaleString()}`}
						</NormalText>
						<Center
							px='8px'
							py='0px'
							bg={item?.inStock ? css?.inStockBg : css?.outStockBg}
							color={item?.inStock ? css?.inStockFg : css?.outStockFg}
							fontSize={`${css?.stockSize}px`}
							borderRadius='4px'
						>
							{item?.inStock ? 'In Stock' : 'Out of Stock'}
						</Center>
					</Flex>
				</Flex>
			</Flex>
		</Link>
	);
};

export default SearchProductCard;
