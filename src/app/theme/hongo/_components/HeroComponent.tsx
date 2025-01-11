import React, { FC } from 'react';
import { Center } from '@chakra-ui/react';
import { HoverContentContainer, HomeContentProps } from '@/components/library';
import { BgImage } from '@/commerce-components';
import { CTAButton, PADDING_X, titleDetails } from '.';
import { HeroCTA, HeroSubTitle, HeroTitle, HongoHeroContainer, getAlignment } from '@/builder';
import { subTitleDetails } from './heroData';

const HeroData: FC<HomeContentProps> = ({ content, dataModel, path, data }) => {
	const { basic } = data;

	return (
		<HoverContentContainer
			section
			title='Edit Style'
			data={content}
			path={path}
			zIndex={888}
			dataModel={dataModel}>
			<BgImage
				w='full'
				justify={getAlignment(content?.hero?.align)}
				src={content?.hero?.image}
				minH='70vh'>
				<HongoHeroContainer
					px={PADDING_X}
					content={content}>
					<HoverContentContainer
						component
						title='Heading'
						data={content}
						path={path}
						dataModel={subTitleDetails}
						zIndex={900}
						mb='1rem'>
						<HeroSubTitle
							content={content}
							basic={basic}
						/>
					</HoverContentContainer>

					<HoverContentContainer
						component
						title='Heading'
						data={content}
						path={path}
						dataModel={titleDetails}
						mb='3rem'>
						<HeroTitle
							content={content}
							basic={basic}
						/>
					</HoverContentContainer>
					<HoverContentContainer
						component
						title='CTA'
						data={content}
						path={path}
						dataModel={CTAButton}>
						<HeroCTA content={content} />
					</HoverContentContainer>
				</HongoHeroContainer>
			</BgImage>
		</HoverContentContainer>
	);
};

export default HeroData;
