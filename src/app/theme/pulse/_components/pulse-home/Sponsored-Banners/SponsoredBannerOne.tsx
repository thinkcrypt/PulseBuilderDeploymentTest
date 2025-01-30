import { HoverContentContainer, PLACEHOLDER_IMAGE } from '@/components/library';
import { BoxProps, Flex, Grid, Image } from '@chakra-ui/react';
import React, { FC } from 'react';
import { PADDING_X } from '../../../_components/index';
import { useAppSelector } from '@/hooks';

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
	const { display } = useAppSelector(state => state.builder);
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
			px={{
				base: PADDING_X.base,
				md: display === 'sm' ? PADDING_X.base : PADDING_X.md,
			}}
			position='sticky'
			top='0'
		>
			<Grid
				gridTemplateColumns={{
					base: `1fr 1fr`,
					lg: display == 'sm' ? `1fr 1fr` : `repeat(${bannerData?.grid}, 1fr)`,
				}}
				gap={4}
				py='1rem'
				{...props}
			>
				{firstBannerImages?.map((item: any, i: number) => (
					<Flex
						key={i}
						w='full'
						// h='full'
						h={{
							base: bannerData?.heightBase,
							lg: display == 'sm' ? bannerData?.heightBase : bannerData?.height,
						}}
					>
						<Image
							w='full'
							h='auto'
							objectFit='cover'
							src={item}
							borderRadius={bannerData?.borderRadius}
							alt='sponser image'
						/>
					</Flex>
				))}
			</Grid>
		</HoverContentContainer>
	);
};

export default SponsoredBannerOne;
