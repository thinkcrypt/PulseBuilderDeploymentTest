'use cliennt';

import { Text } from '@chakra-ui/react';
import React from 'react';

const HeroTitle = ({ content, basic }: { basic: any; content: any }) => {
	return (
		<Text
			py={2}
			fontFamily={content?.hero?.titleFont || basic?.primaryFont}
			color={content?.hero?.titleColor}
			lineHeight={content?.hero?.titleLineHeight || 1}
			fontWeight={content?.hero?.titleFontWeight || '500'}
			letterSpacing={content?.hero?.subTitleLetterSpacing || 0}
			fontSize={{
				base: `${content?.hero?.titleFontSizeSm}px` || `40px`,
				lg: `${content?.hero?.titleFontSizeLg}px` || '84px',
			}}>
			{content?.hero?.title}
		</Text>
	);
};

export default HeroTitle;
