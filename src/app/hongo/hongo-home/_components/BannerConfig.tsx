import React, { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { HomeContentProps, HoverContentContainer } from '@/components/library';
import { PADDING_X } from '.';

const BannerConfig: FC<HomeContentProps> = ({ dataModel, content, path, data }) => {
	const { bgColor, fgColor } = content?.banner;

	const TextNormal = ({ children }: any) => {
		return (
			<Text
				fontFamily={data?.basic?.primaryFont}
				fontSize='1rem'
				fontWeight='400'
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
			<Box
				display={{ base: 'none', lg: 'block' }}
				py='8px'
				w='full'
				h='auto'>
				<Flex
					gap='30px'
					justifyContent='center'>
					<TextNormal>{content?.banner?.leftText}</TextNormal>
					<TextNormal>|</TextNormal>
					<TextNormal>{content?.banner?.rightText}</TextNormal>
				</Flex>
			</Box>
		</HoverContentContainer>
	);
};

export default BannerConfig;
