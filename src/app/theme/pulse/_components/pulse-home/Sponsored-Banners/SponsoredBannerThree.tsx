import { HoverContentContainer } from '@/components/library';
import { Box, Flex, FlexProps, Image } from '@chakra-ui/react';
import React, { FC } from 'react';
import { PADDING_X } from '../../../_components/index';
import { useAppSelector } from '@/hooks';

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
	const { display } = useAppSelector(state => state.builder);
	const bannerData = content?.sponsoredBannerThree;

	return (
		<HoverContentContainer
			type='content'
			path={path}
			title='Banner Information'
			data={content}
			dataModel={dataModel}
			bg={basic?.bgColor}
			px={{
				base: PADDING_X.base,
				md: display === 'sm' ? PADDING_X.base : PADDING_X.md,
			}}
			position='sticky'
			top='0'
		>
			<Flex w='full' {...props}>
				<Box
					w='full'
					position='relative'
					overflow='hidden'
					// aspectRatio={16 / 9}
					h={{
						base: bannerData?.heightBase,
						lg:
							display === 'sm'
								? bannerData?.heightBase
								: `${bannerData?.height}px`,
					}}
					{...props}
				>
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
