import { FC, ReactNode } from 'react';
import { Box, BoxProps, Flex, FlexProps, Grid, Image, TextProps } from '@chakra-ui/react';

const TEMPLATE_COLUMN = {
	base: 'repeat(2, 1fr)',
	md: 'repeat(3, 1fr)',
	lg: 'repeat(4, 1fr)',
	xl: 'repeat(5, 1fr)',
	'2xl': 'repeat(6, 1fr)',
};
type TopBannerProps = BoxProps & {
	content: any;
	basic: any;
	dataModel: any;
	path: any;
	data: any;
};

import { HoverContentContainer } from '@/components/library';
import { PADDING_X } from '../Sponsored-Banners/SponsoredBannerTwo';
import { maxWidth, sectionPadding } from '../../_core-components/config/lib/constants/constants';
import NormalText from '../../_core-components/components/text/NormalText';

type BannerProps = {};

// dataModel, content, path, data
const Banner: FC<TopBannerProps> = ({ dataModel, content, path, data, basic }) => {
	const banner = content?.banner;
	const header = content?.header;

	return (
		<HoverContentContainer
			type='content'
			path={path}
			title='Banner Information'
			data={content}
			dataModel={dataModel}
			bg={banner?.bgColor}
			px={PADDING_X}
			position='sticky'
			top='0'>
			<Flex
				h={banner?.height}
				w='full'
				py={`${banner?.paddingY}px`}
				px={`${banner?.paddingX}px`}
				bg={banner?.bgColor}>
				<SectionPadding
					w='full'
					display='flex'
					alignItems='center'>
					<ChildText
						banner={banner}
						basic={basic}>
						{banner?.children}
					</ChildText>
				</SectionPadding>
			</Flex>
		</HoverContentContainer>
	);
};

export default Banner;

const SectionPadding = ({ children, ...props }: BoxProps & { children: ReactNode }) => (
	<Box
		px={{
			base: sectionPadding.PADDING_X_MOBILE,
			lg: sectionPadding.PADDING_X_LG,
			'2xl': sectionPadding.PADDING_X_2XL,
		}}
		maxW={maxWidth}
		h='full'
		mx='auto'
		{...props}>
		{children}
	</Box>
);

const ChildText = ({
	children,
	banner,
	basic,
	...props
}: BoxProps & { children: ReactNode; banner: any; basic: any }) => (
	<NormalText
		w='full'
		textAlign={banner?.textAlign}
		color={banner?.fgColor}
		basic={basic}
		css={banner}
		fontFamily={banner?.fontFamily}
		fontWeight={banner?.fontWeight}
		fontSize={banner?.fontSize}
		letterSpacing={banner?.letterSpacing}>
		{banner?.children}
	</NormalText>
);
