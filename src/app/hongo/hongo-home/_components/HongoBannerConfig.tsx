import React, { FC } from 'react';
import { Center, Text } from '@chakra-ui/react';
import { HomeContentProps, HoverContentContainer } from '@/components/library';
import { PADDING_X } from '.';

const BannerConfig: FC<HomeContentProps> = ({ dataModel, content, path, data }) => {
	const { bgColor, fgColor } = content?.banner;

	const TextNormal = ({ children }: any) => {
		return (
			<Text
				letterSpacing={data?.content?.banner?.letterSpacing || 0}
				fontFamily={data?.content?.banner?.fontFamily || data?.basic?.primaryFont}
				fontSize={data?.content?.banner?.fontSize || '1rem'}
				fontWeight={data?.content?.banner?.fontWeight || '400'}
				color={fgColor}
				_dark={{
					color: fgColor,
				}}>
				{children}
			</Text>
		);
	};

	return (
		<HoverContentContainer
			path={path}
			title='Banner Information'
			data={content}
			dataModel={dataModel}
			bg={bgColor}
			px={PADDING_X}>
			<Center
				display={{ base: 'none', lg: 'flex' }}
				py={`${content?.banner?.paddingY}px` || '8px'}
				w='full'
				h={content?.banner?.height || 'auto'}
				gap='30px'>
				{content?.banner?.leftText && <TextNormal>{content?.banner?.leftText}</TextNormal>}
				{content?.banner?.leftText && content?.banner?.rightText && <TextNormal>|</TextNormal>}
				{content?.banner?.rightText && <TextNormal>{content?.banner?.rightText}</TextNormal>}
			</Center>
		</HoverContentContainer>
	);
};

export default BannerConfig;
