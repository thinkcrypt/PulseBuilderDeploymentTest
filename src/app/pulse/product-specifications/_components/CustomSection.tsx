import { tabBoxShadow } from '@/components/library/config/lib/constants/constants';
import useColors from '@/components/library/hooks/useColors';
import Heading from '@/components/text/Heading';
import NormalText from '@/components/text/NormalText';
import { Box, BoxProps } from '@chakra-ui/react';
import { FC } from 'react';

type CustomSectionProps = BoxProps & {
	basic: any;
	css: any;
	title: string;
	description: string;
};

const CustomSection: FC<CustomSectionProps> = ({
	basic,
	css,
	title,
	description,
	...props
}) => {
	const colors = useColors();
	return (
		<Box
			px='1.4rem'
			py='1.4rem'
			bg={colors?.white}
			boxShadow={css?.boxShadow || tabBoxShadow}
			{...props}
		>
			<Heading
				fontWeight='600'
				color={colors?.dark}
				fontSize={{ base: '1rem', lg: '1.2rem' }}
				basic={basic}
				mb='8px'
			>
				{title}
			</Heading>
			<NormalText color={css?.textPrimary} basic={basic}>
				{description}
			</NormalText>
		</Box>
	);
};
export default CustomSection;
