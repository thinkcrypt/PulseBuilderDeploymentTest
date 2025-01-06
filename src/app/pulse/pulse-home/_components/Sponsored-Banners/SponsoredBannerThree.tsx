import { HoverContentContainer } from '@/components/library';
import {
	maxWidth,
	PADDING_X,
	placeholderLogo,
	sectionPadding,
} from '@/components/library/config/lib/constants/constants';
import {
	Box,
	BoxProps,
	Flex,
	FlexProps,
	Grid,
	GridProps,
	Image,
} from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

const TEMPLATE_COLUMN = {
	base: 'repeat(2, 1fr)',
	md: 'repeat(3, 1fr)',
	xl: 'repeat(4, 1fr)',
};

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
			top='0'
		>
			<Flex w='full' h={`${bannerData?.h || '200px'}px`} {...props}>
				<Box
					w='full'
					position='relative'
					overflow='hidden'
					aspectRatio={16 / 9} // Adjust the aspect ratio as needed (16:9 is an example)
					{...props}
				>
					<Image
						src={bannerData?.image}
						w='full'
						h='full'
						objectFit='cover'
						alt='Banner Image'
					/>
				</Box>
			</Flex>
		</HoverContentContainer>
	);
};

export default SponsoredBannerThree;

const SectionPadding = ({
	children,
	...props
}: BoxProps & { children: ReactNode }) => (
	<Box
		px={{
			base: sectionPadding.PADDING_X_MOBILE,
			lg: sectionPadding.PADDING_X_LG,
			'2xl': sectionPadding.PADDING_X_2XL,
		}}
		maxW={maxWidth}
		h='full'
		mx='auto'
		{...props}
	>
		{children}
	</Box>
);
