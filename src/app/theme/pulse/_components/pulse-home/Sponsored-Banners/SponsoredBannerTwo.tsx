import { HoverContentContainer } from '@/components/library';
import { useAppSelector } from '@/hooks';
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
	const { display } = useAppSelector(state => state.builder);
	const bannerData = content?.sponsoredBannerTwo;

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
			<GridContainer {...props}>
				<BannerImage bannerData={bannerData} src={bannerData?.imageOne} />
				<BannerImage bannerData={bannerData} src={bannerData?.imageTwo} />
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
}) => {
	const { display } = useAppSelector(state => state.builder);
	return (
		<Grid
			// gridTemplateColumns={{
			// 	base: `1fr`,
			// 	lg: `1fr 1fr`,
			// }}
			gridTemplateColumns={{
				base: '1fr',
				lg: display == 'sm' ? '1fr' : '1fr 1fr',
			}}
			gap={4}
			py='2rem'
			{...props}
		>
			{children}
		</Grid>
	);
};

const BannerImage = ({
	src,
	bannerData,
	...props
}: FlexProps & {
	src: string;
	bannerData?: any;
}) => (
	<Box
		w='full'
		position='relative'
		overflow='hidden'
		aspectRatio={16 / 9} // Adjust the aspect ratio as needed (16:9 is an example)
		{...props}
	>
		<Image
			src={src}
			w='full'
			h='full'
			objectFit='cover'
			// fallbackSrc={placeholderImage}
			alt='Banner Image'
		/>
	</Box>
);
