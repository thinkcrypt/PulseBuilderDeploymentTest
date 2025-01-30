// import useColors from '@/components/library/hooks/useColors';
// import NormalText from '@/components/text/NormalText';
import { Grid, GridProps, TextProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import NormalText from '../../_core-components/components/text/NormalText';
import useColors from '../../_core-components/hooks/useColors';

const FONT_SIZE = { base: '.875rem', lg: '1.1rem' };

type CheckoutTableHeaderProps = GridProps & {
	basic: any;
	css: any;
};
const CheckoutTableHeader: FC<CheckoutTableHeaderProps> = ({
	basic,
	css,
	...props
}) => {
	return (
		<Container {...props}>
			<TableText basic={basic} css={css}>
				Item
			</TableText>
			<TableText basic={basic} css={css}>
				qty
			</TableText>
			<TableText basic={basic} css={css} textAlign='right'>
				Total
			</TableText>
		</Container>
	);
};

export default CheckoutTableHeader;

const TableText: React.FC<
	TextProps & { children: string; basic: any; css: any }
> = ({ children, basic, css, ...props }) => (
	<NormalText
		basic={basic}
		fontWeight={css?.cardTitleWeight || 600}
		fontSize={{
			base: `${css?.cartTitleSizeBase || 16}px`,
			lg: `${css?.cartTitleSizeBg || 18}px`,
		}}
		color={css?.cardFg}
		{...props}
	>
		{children}
	</NormalText>
);

const Container: React.FC<{ children: ReactNode }> = ({
	children,
	...props
}) => {
	const colors = useColors();
	const borderColor = `1px dashed ${colors?.border}`;
	return (
		<Grid
			gridTemplateColumns='2fr 1fr 1fr'
			borderBottom={borderColor}
			py={4}
			{...props}
		>
			{children}
		</Grid>
	);
};
