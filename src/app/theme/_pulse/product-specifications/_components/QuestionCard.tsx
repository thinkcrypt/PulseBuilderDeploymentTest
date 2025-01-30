import { AccordionItemProps, Box, BoxProps } from '@chakra-ui/react';
import { FC } from 'react';

import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from '@chakra-ui/react';
import useColors from '../../_core-components/hooks/useColors';
import { tabBoxShadow } from '../../_core-components/config/lib/constants/constants';
import Heading from '../../_core-components/components/text/Heading';
import NormalText from '../../_core-components/components/text/NormalText';
// import Heading from '@/components/text/Heading';
// import useColors from '@/components/library/hooks/useColors';
// import NormalText from '@/components/text/NormalText';
// import { tabBoxShadow } from '@/components/library/config/lib/constants/constants';

const SHORT_DESCRIPTION =
	'Have question about this product? Get specific details about this product from expert.';

type CustomSectionProps = BoxProps & {
	basic: any;
	css: any;
	productData: any;
};

const CustomSection: FC<CustomSectionProps> = ({
	basic,
	css,
	productData,
	...props
}) => {
	const colors = useColors();

	const numberOfQ = productData?.faq?.length;
	return (
		<Box
			px='1.4rem'
			py='1.4rem'
			id='questions'
			boxShadow={css?.boxShadow || tabBoxShadow}
			bg={colors?.white}
			{...props}
		>
			<Box mb='16px'>
				<Heading
					fontWeight='600'
					color={colors?.dark}
					fontSize={{ base: '1rem', lg: '1.2rem' }}
					basic={basic}
					mb='8px'
				>
					{`Questions (${numberOfQ})`}
				</Heading>
				<NormalText color={css?.textPrimary} basic={basic}>
					{SHORT_DESCRIPTION}
				</NormalText>
			</Box>
			<Box>
				<Accordion defaultIndex={[0]} allowMultiple>
					{productData?.faq?.map((item: any, i: number) => (
						<QuestionItem
							basic={basic}
							css={css}
							key={i}
							title={item?.title}
							description={item?.description}
						/>
					))}
				</Accordion>
			</Box>
		</Box>
	);
};
export default CustomSection;

const QuestionItem = ({
	basic,
	css,
	title,
	description,
	...props
}: AccordionItemProps & {
	basic: any;
	css: any;
	title: string;
	description: string;
}) => {
	const colors = useColors();
	return (
		<AccordionItem {...props}>
			<h2>
				<AccordionButton px='0px'>
					<Box as='span' flex='1' textAlign='left'>
						<Heading color={colors?.black} basic={basic}>
							{title}
						</Heading>
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</h2>
			<AccordionPanel pb={4}>
				<NormalText color={css?.textPrimary} basic={basic}>
					{description}
				</NormalText>
			</AccordionPanel>
		</AccordionItem>
	);
};
