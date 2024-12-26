import { Heading, NormalText } from '../../text';

import { Box, BoxProps, TextProps } from '@chakra-ui/react';
import { FC } from 'react';
import { footerData } from './footerData';

type FooterAddressProps = BoxProps & {
	css: any;
	basic: any;
	item: any;
};

const FooterAddress: FC<FooterAddressProps> = ({
	css,
	basic,
	item,
	...props
}) => {
	const footer = footerData?.footer;
	return (
		<Box {...props}>
			<BrandText css={css} basic={basic}>
				{footer?.connected?.address?.brand}
			</BrandText>
			<CommonStyle css={css} basic={basic} whiteSpace='pre-line' mb='1rem'>
				{footer?.connected?.address?.office}
			</CommonStyle>
			<CommonStyle css={css} basic={basic}>
				{`Phone: ${footer?.connected?.address?.phone}`}
			</CommonStyle>
			<CommonStyle css={css} basic={basic}>
				{`Email: ${footer?.connected?.address?.email}`}
			</CommonStyle>
		</Box>
	);
};

export default FooterAddress;

const BrandText = ({
	children,
	css,
	basic,
	...props
}: TextProps & { children: any; css: any; basic: any }) => (
	<Heading
		css={css}
		basic={basic}
		color={css?.fgColor || 'white'}
		textTransform='uppercase'
		fontSize={`${css?.fontSize}px`}
		mb={2}
		{...props}
	>
		{children}
	</Heading>
);

const CommonStyle = ({
	children,
	css,
	basic,

	...props
}: TextProps & { children: any; css: any; basic: any }) => (
	<NormalText
		color={css?.fgColor}
		fontSize={`${css?.fontSize}px`}
		css={css}
		basic={basic}
		{...props}
	>
		{children}
	</NormalText>
);
