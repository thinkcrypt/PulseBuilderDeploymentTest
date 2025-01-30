import { Box, BoxProps, Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { SocialShareIcon } from './index';
import {
	useColors,
	socialShareBoxShadow,
	NormalText,
} from '../../../_components/index';

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
	const css = content?.socialShareCss;

	return (
		<Box bg={css?.bgColor || colors?.white} {...props} pt='1rem'>
			<Flex
				alignItems='center'
				borderRadius={`${css?.borderRadius || 40}px`}
				px='1.5rem'
				py={'.6rem'}
				boxShadow={css?.boxShadow || socialShareBoxShadow}
				bg={css?.shareBg || '#fff'}
			>
				<NormalText
					fontSize={`${css?.titleSize || 16}px`}
					color={css?.fgColor}
					basic={basic}
				>
					Share:
				</NormalText>
				<SocialShareIcon
					productId={productId}
					productData={productData}
					css={css}
				/>
			</Flex>
		</Box>
	);
};

export default SocialShare;
