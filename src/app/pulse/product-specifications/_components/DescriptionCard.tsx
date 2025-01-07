import { tabBoxShadow } from '@/components/library/config/lib/constants/constants';
import useColors from '@/components/library/hooks/useColors';
import NormalText from '@/components/text/NormalText';
import { Box, BoxProps } from '@chakra-ui/react';
import { FC } from 'react';

type DescriptionCardProps = BoxProps & {
	basic: any;
	css: any;
	productData: any;
};

const DescriptionCard: FC<DescriptionCardProps> = ({
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
			bg={colors?.white}
			id='description'
			boxShadow={css?.boxShadow || tabBoxShadow}
			{...props}
		>
			<NormalText
				fontSize={{ base: '1rem', lg: '1.2rem' }}
				fontWeight='600'
				color={colors?.black}
				basic={basic}
				css={css}
			>
				Description
			</NormalText>
			<Box mt='8px'>
				<NormalText
					color={css?.textPrimary}
					basic={basic}
					whiteSpace='pre-line'
				>
					{productData?.description}
				</NormalText>
			</Box>
		</Box>
	);
};
export default DescriptionCard;
