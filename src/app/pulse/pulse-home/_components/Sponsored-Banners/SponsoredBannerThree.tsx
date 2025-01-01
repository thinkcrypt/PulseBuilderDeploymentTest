import { HoverContentContainer } from '@/components/library';
import {
	maxWidth,
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
	data:any
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
  const banner = content?.banner;
	return (
		<HoverContentContainer
			type='content'
			path={path}
			title='Banner Information'
			data={content}
			dataModel={dataModel}
			bg={basic?.bgColor}
			borderBottom={`1px solid ${banner?.borderColor}`}
			py={'3rem'}
			position='sticky'
			top='0'
		>
			<Flex w='full' h={bannerData?.h} {...props}>
				<Image w='full' h='auto' objectFit='contain' src={bannerData?.image} />
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
