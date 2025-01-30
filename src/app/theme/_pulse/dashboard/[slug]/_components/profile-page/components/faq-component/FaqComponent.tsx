import { AccordionItemProps, Box, FlexProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from '@chakra-ui/react';
import Heading from '../../../../../../_core-components/components/text/Heading';
import NormalText from '../../../../../../_core-components/components/text/NormalText';

type FaqComponentProps = FlexProps & {
	basic: any;
	css: any;
	faqData: any;
};

const FaqComponent: FC<FaqComponentProps> = ({
	basic,
	css,
	faqData,
	...props
}) => {
	return (
		<Accordion allowToggle>
			{faqData?.map((item: any, i: number) => (
				<FaqItem
					key={i}
					basic={basic}
					css={css}
					title={item?.title}
					value={item?.value}
				/>
			))}
		</Accordion>
	);
};
export default FaqComponent;

const FaqItem = ({
	basic,
	css,
	title,
	value,
	...props
}: AccordionItemProps & { title: any; value: any; basic: any; css: any }) => (
	<AccordionItem {...props}>
		<h2>
			<AccordionButton>
				<Box py='8px' as='span' flex='1' textAlign='left'>
					<Heading
						color={css?.headingColor || '#292D32'}
						fontSize={`${css?.headingSize || 18}px`}
						fontWeight={css?.headingWeight || 600}
						basic={basic}
						css={css}
					>
						{title}
					</Heading>
				</Box>
				<AccordionIcon />
			</AccordionButton>
		</h2>
		<AccordionPanel pb={4}>
			<NormalText
				color={css?.faqSubTitleColor || '#535353'}
				fontSize={{
					base: `${css?.faqSubTitleSizeBase || 114}px`,
					lg: `${css?.faqSubTitleSizeBg || 16}px`,
				}}
				fontWeight={css?.faqSubTitleWeight || 400}
				basic={basic}
			>
				{value}
			</NormalText>
		</AccordionPanel>
	</AccordionItem>
);
