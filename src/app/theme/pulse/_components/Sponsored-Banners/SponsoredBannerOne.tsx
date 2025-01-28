import { HoverContentContainer, PLACEHOLDER_IMAGE } from '@/components/library';
import { Box, BoxProps, Flex, Grid, Image } from '@chakra-ui/react';
import React, { FC } from 'react';
import { PADDING_X } from '../../_core-components/config/lib/constants/constants';

// dataModel, content, path, data
type SponsoredBannerOne = BoxProps & {
	content: any;
	basic: any;
	path?: any;
	dataModel?: any;
	data?: any;
};

const SponsoredBannerOne: FC<SponsoredBannerOne> = ({
	content,
	basic,
	data,
	path,
	dataModel,
	...props
}) => {
	const bannerData = content?.sponsoredBannerOne;

	let firstBannerImages;
	if (bannerData?.images?.length > 0) {
		firstBannerImages = bannerData?.images;
	} else {
		firstBannerImages = [
			PLACEHOLDER_IMAGE,
			PLACEHOLDER_IMAGE,
			PLACEHOLDER_IMAGE,
			PLACEHOLDER_IMAGE,
		];
	}

	return (
		<HoverContentContainer
			type='content'
			path={path}
			title='Banner Information'
			data={content}
			dataModel={dataModel}
			px={PADDING_X}
			position='sticky'
			top='0'>
			<Grid
				gridTemplateColumns={{
					base: `1fr 1fr`,
					lg: `repeat(${bannerData?.grid}, 1fr)`,
				}}
				gap={4}
				py='1rem'
				{...props}>
				{firstBannerImages?.map((item: any, i: number) => (
					<Flex
						key={i}
						w='full'
						h='auto'
						maxH='300px'>
						<Image
							w='full'
							h='auto'
							objectFit='cover'
							src={item}
							alt='sponser image'
						/>
					</Flex>
				))}
			</Grid>
		</HoverContentContainer>
	);
};

export default SponsoredBannerOne;
