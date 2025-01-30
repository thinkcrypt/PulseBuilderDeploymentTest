import { Box, BoxProps, Grid, GridItem, GridProps } from '@chakra-ui/react';
import { FC } from 'react';
import {
	useColors,
	tabBoxShadow,
	NormalText,
} from '../../../../../_components/index';

type SpecificationCardProps = BoxProps & {
	basic: any;
	css: any;
	productData: any;
};

const SpecificationCard: FC<SpecificationCardProps> = ({
	basic,
	css,
	productData,
	...props
}) => {
	const colors = useColors();
	return (
		<Box
			px='1.4rem'
			py='1.4rem'
			bg={css?.cardBg || colors?.white}
			id='specification'
			boxShadow={css?.boxShadow || tabBoxShadow}
			{...props}
		>
			<NormalText
				fontSize={{ base: '1rem', lg: '1.2rem' }}
				fontWeight='600'
				color={css?.cardFg}
				basic={basic}
				css={css}
			>
				Specification
			</NormalText>
			<Box mt='8px'>
				<Box bg={css?.cardTableBg} px='.8rem' py='.8rem' borderRadius='4px'>
					<NormalText
						fontWeight={css?.headingFontWeight}
						fontSize={`${css?.headingFontSize}px`}
						color={css?.cardTableFg}
						basic={basic}
					>
						Basic Information
					</NormalText>
				</Box>
				{productData?.customAttributes?.map((item: any, i: number) => (
					<TableRow
						key={i}
						basic={basic}
						css={css}
						label={item?.label}
						value={item?.value}
					/>
				))}
			</Box>
		</Box>
	);
};
export default SpecificationCard;

const TableRow = ({
	basic,
	css,
	label,
	value,
	...props
}: GridProps & {
	basic: any;
	css: any;
	label: string;
	value: string;
}) => (
	<Grid
		gridTemplateColumns='repeat(3, 1fr)'
		px='.8rem'
		py='.8rem'
		borderBottom={`1px solid ${css?.borderColor}`}
		{...props}
	>
		<GridItem colSpan={1}>
			<NormalText basic={basic} color={css?.textSecondary}>
				{label}
			</NormalText>
		</GridItem>
		<GridItem colSpan={2}>
			<NormalText basic={basic} color={css?.textPrimary}>
				{value}
			</NormalText>
		</GridItem>
	</Grid>
);
