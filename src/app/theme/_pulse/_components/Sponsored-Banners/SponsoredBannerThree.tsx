import { HoverContentContainer } from '@/components/library';
// import { PADDING_X } from '@/components/library/config/lib/constants/constants';
import { Box, Flex, FlexProps, Image } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import { PADDING_X } from '../../_core-components/config/lib/constants/constants';

type SponsoredBannerThreeProps = FlexProps & {
	content: any;
	basic: any;
	path: any;
	dataModel: any;
	data: any;
};

const SponsoredBannerThree: FC<SponsoredBannerThreeProps> = ({
	content,
	basic,
	path,
	data,
	dataModel,
	...props
}) => {
	const bannerData = content?.sponsoredBannerThree;

	return (
		<HoverContentContainer
			type='content'
			path={path}
			title='Banner Information'
			data={content}
			dataModel={dataModel}
			bg={basic?.bgColor}
			px={PADDING_X}
			position='sticky'
			top='0'>
			<Flex
				w='full'
				h={{ base: 'auto', md: `${bannerData?.h}px` }}
				{...props}>
				<Box
					w='full'
					position='relative'
					overflow='hidden'
					aspectRatio={16 / 9}
					{...props}>
					<Image
						borderRadius={`${bannerData?.borderRadius}px`}
						w='full'
						h='full'
						aspectRatio={16 / 9}
						objectFit='cover'
						src={bannerData?.image}
						alt='Banner Image'
					/>
				</Box>
			</Flex>
		</HoverContentContainer>
	);
};

export default SponsoredBannerThree;
