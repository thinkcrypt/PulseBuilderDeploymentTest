import { currency } from '@/components/library';
// import NormalText from '@/components/text/NormalText';
import { Flex, FlexProps, Grid, GridProps, Image } from '@chakra-ui/react';
import React, { FC } from 'react';
import NormalText from '../../_core-components/components/text/NormalText';

type SummaryItemRowProps = GridProps & {
	basic: any;
	css?: any;
	item: any;
};

const SummaryItemRow: FC<SummaryItemRowProps> = ({
	basic,
	css,
	item,
	...props
}) => {
	return (
		<Grid
			gridTemplateColumns='2fr 1fr'
			borderBottom={`1px solid #e3e3e3`}
			py='1rem'
			{...props}
		>
			<Flex gap={4}>
				<Flex w='44px' h='44px' minW='54px' minH='54px'>
					<Image
						src={item?.image}
						w='full'
						h='full'
						objectFit='cover'
						alt='Product Image'
						borderRadius='4px'
					/>
				</Flex>
				<NormalText
					fontWeight='600'
					color={css?.bodyFg}
					fontSize='14px'
					basic={basic}
				>
					{item?.name}
				</NormalText>
			</Flex>
			<NormalText
				fontWeight='600'
				color={css?.bodyFg}
				fontSize='14px'
				textAlign='right'
				basic={basic}
			>
				{`${currency?.symbol} ${item?.price?.toLocaleString()}`}
			</NormalText>
		</Grid>
	);
};
export default SummaryItemRow;
