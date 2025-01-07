import { Box, BoxProps, Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { SocialShareIcons } from './components/index';
// import { NormalText, SectionPadding } from '@/components';

// import { useColors } from '@/library';
import useColors from '@/components/library/hooks/useColors';
import NormalText from '@/components/text/NormalText';
import { socialShareBoxShadow } from '@/components/library/config/lib/constants/constants';

type SocialShareProps = BoxProps & {
	basic: any;
	content: any;
	productData: any;
	productId: string;
};

const SocialShare: FC<SocialShareProps> = ({
	productData,
	productId,
	basic,
	content,
	...props
}) => {
	const colors = useColors();
	const css = content?.productPage;
	return (
		<Box {...props} py='2.5rem'>
			<Flex
				alignItems='center'
				borderRadius={`${css?.borderRadius || 40}px`}
				px='1.5rem'
				py={'.6rem'}
				bg={css?.tabBg || colors?.white}
				boxShadow={css?.boxShadow || socialShareBoxShadow}
			>
				<NormalText
					fontSize={`${css?.fontSize}px`}
					color={css?.fgColor}
					basic={basic}
				>
					Share:
				</NormalText>
				<SocialShareIcons
					productId={productId}
					productData={productData}
					css={css}
				/>
			</Flex>
		</Box>
	);
};

export default SocialShare;
