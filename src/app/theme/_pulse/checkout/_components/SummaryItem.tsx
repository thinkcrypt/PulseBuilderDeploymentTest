import { currency } from '@/components/library';
// import NormalText from "@/components/text/NormalText";
import { Flex, FlexProps } from '@chakra-ui/react';
import { FC } from 'react';
import NormalText from '../../_core-components/components/text/NormalText';

type SummaryItemProps = FlexProps & {
	text: string;
	value: number;
	basic: any;
	css: any;
};
const SummaryItem: FC<SummaryItemProps> = ({
	text,
	value,
	basic,
	css,
	...props
}) => {
	return (
		<Flex justifyContent='space-between' mb={1} {...props}>
			<NormalText
				basic={basic}
				css={css}
				fontWeight={css?.summaryWeight || 600}
				fontSize={{
					base: `${css?.summarySizeBase}px`,
					lg: `${css?.summarySizeBg || 16}px`,
				}}
				color={css?.summaryColor}
			>
				{text}
			</NormalText>
			<NormalText
				basic={basic}
				css={css}
				fontWeight={css?.summaryWeight || 600}
				fontSize={{
					base: `${css?.summarySizeBase}px`,
					lg: `${css?.summarySizeBg || 18}px`,
				}}
				color={css?.summaryColor}
				textAlign='right'
			>{`${currency?.symbol} ${value?.toLocaleString()}`}</NormalText>
		</Flex>
	);
};

export default SummaryItem;
