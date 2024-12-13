import React, { FC } from 'react';
import { Button, Center, Heading, Text } from '@chakra-ui/react';
import { HoverContentContainer, HomeContentProps } from '@/components/library';
import { BgImage } from '@/commerce-components';
import { PADDING_X } from '.';

const HeroData: FC<HomeContentProps> = ({ content, dataModel, path, data }) => {
	const { basic } = data;
	const getAlignment = (align: string) => {
		if (align == 'center') {
			return 'center';
		} else if (align == 'right') {
			return 'flex-end';
		} else {
			return 'flex-start';
		}
	};
	return (
		<HoverContentContainer
			title='Hero Section'
			data={content}
			path={path}
			dataModel={dataModel}>
			<BgImage
				src={content?.hero?.image}
				minH='50vh'
				p={32}
				px={PADDING_X}>
				<Center
					w='full'
					flexDir='column'
					alignItems={getAlignment(content?.hero?.align)}
					gap={2}
					textAlign={content?.hero?.align}>
					<Text
						fontFamily={basic?.secondaryFont}
						size='md'
						color={content?.hero?.subTitleColor}>
						{content?.hero?.subTitle}
					</Text>
					<Heading
						py={2}
						fontFamily={basic?.primaryFont}
						color={content?.hero?.titleColor}
						size='2xl'>
						{content?.hero?.title}
					</Heading>
					<Center
						pt={4}
						alignItems={getAlignment(content?.hero?.align)}>
						<Button
							h='44px'
							color={content?.hero?.btnTextColor}
							bg={content?.hero?.btnColor}
							borderRadius={0}>
							{content?.hero?.btnText}
						</Button>
					</Center>
				</Center>
			</BgImage>
		</HoverContentContainer>
	);
};

export default HeroData;
