import { AlignCenter } from '@/commerce-components';
import { currency } from '@/components/library';
// import NormalText from '@/components/text/NormalText';
import { Flex, Grid, GridProps, Image } from '@chakra-ui/react';
import { FC } from 'react';
import NormalText from '../../_core-components/components/text/NormalText';

type CheckoutTableRowProps = GridProps & {
	name: string;
	unitPrice: number;
	qty: number;
	totalPrice: number;
	image: string;
	basic: any;
	css: any;
};
const CheckoutTableRow: FC<CheckoutTableRowProps> = ({
	name,
	unitPrice,
	qty,
	totalPrice,
	image,
	basic,
	css,
	...props
}) => {
	return (
		<Grid gridTemplateColumns='2fr 1fr 1fr' py='1rem' {...props}>
			<AlignCenter w='full'>
				<Flex
					w={{ base: '54px', lg: '64px' }}
					h={{ base: '54px', lg: '64px' }}
					minW={{ base: '54px', lg: '64px' }}
					minH={{ base: '54px', lg: '64px' }}
					mr={{ base: 2, lg: 4 }}
				>
					<Image
						alt='Product Image'
						src={image || '/product/placeholderImage.jpg'}
						w='full'
						h='full'
						objectFit='cover'
					/>
				</Flex>
				<NormalText
					basic={basic}
					css={css}
					fontWeight={css?.nameWeight || 600}
					fontSize={{
						base: `${css?.nameSizeBase || 12}px`,
						lg: `${css?.nameSizeBg || 16}px`,
					}}
					color={css?.nameColor}
					pr={2}
				>
					{name}
				</NormalText>
			</AlignCenter>
			<AlignCenter>
				<NormalText
					basic={basic}
					css={css}
					fontWeight={css?.qtyWeight || 400}
					fontSize={{
						base: `${css?.qtySizeBase || 12}px`,
						lg: `${css?.qtySizeBg || 14}px`,
					}}
					color={css?.qtyColor}
				>{`${
					currency?.symbol
				} ${unitPrice.toLocaleString()} x ${qty}`}</NormalText>
			</AlignCenter>
			<AlignCenter w='full' justify='flex-end'>
				<NormalText
					basic={basic}
					css={css}
					fontWeight={css?.totalWeight || 400}
					fontSize={{
						base: `${css?.totalSizeBase || 12}px`,
						lg: `${css?.totalSizeBg || 14}px`,
					}}
					color={css?.totalColor}
					textAlign='right'
				>{`${currency?.symbol} ${totalPrice.toLocaleString()}`}</NormalText>
			</AlignCenter>
		</Grid>
	);
};

export default CheckoutTableRow;
