import { Box, Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { AddressModal } from '.';

import { EditButton } from '../../../../../../_core-components/components/button';
import NormalText from '../../../../../../_core-components/components/text/NormalText';

type AddressCardProps = FlexProps & {
	basic: any;
	css: any;
};

const AddressCard: FC<AddressCardProps> = ({ basic, css }) => {
	return (
		<Flex
			justifyContent='space-between'
			border='1px solid #19D77C'
			bg='#F4F8F9'
			px='1rem'
			py='1rem'
			borderRadius={'12px'}
		>
			<Box>
				<CardContent
					title='FullName'
					value={'Akib Mahmud'}
					basic={basic}
					css={css}
					pt='0px'
				/>
				<CardContent
					title='Phone'
					value={'0182987877'}
					basic={basic}
					css={css}
				/>
				<CardContent
					title='Email'
					value={'akib.thinkcrypt@gmail.com'}
					basic={basic}
					css={css}
				/>
				<CardContent title='FirstName' value={'Akib'} basic={basic} css={css} />
			</Box>
			<Flex gap={3}>
				<AddressModal css={css} basic={basic}>
					<EditButton basic={basic}>Edit</EditButton>
				</AddressModal>
			</Flex>
		</Flex>
	);
};
export default AddressCard;

const CardContent = ({
	basic,
	title,
	value,
	css,
	...props
}: FlexProps & {
	basic: any;
	title: any;
	value: any;
	css: any;
}) => (
	<Flex gap={2} py='6px' {...props}>
		<NormalText fontSize='14px' color={css?.cardFg || '#191A34'} basic={basic}>
			{`${title}:`}
		</NormalText>
		<NormalText
			fontSize='14px'
			fontWeight={600}
			color={css?.cardFg || '#191A34'}
			basic={basic}
		>
			{value}
		</NormalText>
	</Flex>
);
