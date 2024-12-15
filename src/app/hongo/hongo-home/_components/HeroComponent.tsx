import React, { FC } from 'react';
import { Center } from '@chakra-ui/react';
import { HoverContentContainer, HomeContentProps } from '@/components/library';
import { BgImage } from '@/commerce-components';
import { PADDING_X } from '.';
import { HeroCTA, HeroSubTitle, HeroTitle, HongoHeroContainer, getAlignment } from '@/builder';

const HeroData: FC<HomeContentProps> = ({ content, dataModel, path, data }) => {
	const { basic } = data;

	return (
		<HoverContentContainer
			title='Hero Section'
			data={content}
			path={path}
			dataModel={dataModel}>
			<BgImage
				justify={getAlignment(content?.hero?.align)}
				src={content?.hero?.image}
				minH='70vh'>
				<HongoHeroContainer
					px={PADDING_X}
					content={content}>
					<HeroSubTitle
						content={content}
						basic={basic}
					/>
					<HeroTitle
						content={content}
						basic={basic}
					/>
					<HeroCTA content={content} />
				</HongoHeroContainer>
			</BgImage>
		</HoverContentContainer>
	);
};

export default HeroData;
