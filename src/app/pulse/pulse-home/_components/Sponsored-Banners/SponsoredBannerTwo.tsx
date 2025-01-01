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
type SponsoredBannerTwoProps = BoxProps & {
	content: any;
	basic: any;
	path: any;
	dataModel: any;
	data: any;
};

export const PADDING_X = { base: 6, md: 24 };
// dataModel, content, path, data
const SponsoredBannerTwo: FC<SponsoredBannerTwoProps> = ({
	content,
	basic,
	path,
	data,
	dataModel,
	...props
}) => {
	const bannerData = content?.sponsoredBannerTwo;
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
			px={PADDING_X}
			position='sticky'
			top='0'
		>
			<GridContainer {...props}>
				<BannerImage src={bannerData?.imageOne} />
				<BannerImage src={bannerData?.imageTwo} />
			</GridContainer>
		</HoverContentContainer>
	);
};

export default SponsoredBannerTwo;

const GridContainer = ({
	children,
	...props
}: GridProps & {
	children: ReactNode;
}) => (
	<Grid
		gridTemplateColumns={{
			base: `1fr`,
			lg: `1fr 1fr`,
		}}
		gap={4}
		py='2rem'
		{...props}
	>
		{children}
	</Grid>
);

const BannerImage = ({
	src,
	...props
}: FlexProps & {
	src: string;
}) => (
	<Flex w='full' h='300px' {...props}>
		<Image w='full' h='auto' objectFit='cover' src={src} />
	</Flex>
);

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
