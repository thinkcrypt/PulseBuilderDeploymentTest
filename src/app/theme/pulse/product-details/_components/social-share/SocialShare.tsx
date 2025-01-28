import { Box, BoxProps, Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { SocialShareIcons } from './components/index';
// import useColors from '@/app/pulse/_core-components/hooks/useColors';
// import { socialShareBoxShadow } from '@/app/pulse/_core-components/config/lib/constants/constants';
// import NormalText from '@/app/pulse/_core-components/components/text/NormalText';
// import { NormalText, SectionPadding } from '@/components';

// import { useColors } from '@/library';
// import useColors from "@/components/library/hooks/useColors";
// import NormalText from "@/components/text/NormalText";
// import { socialShareBoxShadow } from "@/components/library/config/lib/constants/constants";

import useColors from '../../../_core-components/hooks/useColors';
import { socialShareBoxShadow } from '../../../_core-components/config/lib/constants/constants';
import { NormalText } from '../../../_components/text';

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
		<Box
			bg={css?.bgColor || colors?.white}
			{...props}
			py='1rem'>
			<Flex
				alignItems='center'
				borderRadius={`${css?.borderRadius || 40}px`}
				px='1.5rem'
				py={'.6rem'}
				boxShadow={css?.boxShadow || socialShareBoxShadow}
				bg={css?.shareBg || '#fff'}>
				<NormalText
					fontSize={`${css?.titleSize || 16}px`}
					color={css?.fgColor}
					basic={basic}>
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
