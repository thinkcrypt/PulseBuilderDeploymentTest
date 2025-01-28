import { FC, ReactNode } from 'react';
import { Box, BoxProps, Center, Flex, FlexProps, Grid, Image, TextProps } from '@chakra-ui/react';

const TEMPLATE_COLUMN = {
	base: 'repeat(2, 1fr)',
	md: 'repeat(3, 1fr)',
	lg: 'repeat(4, 1fr)',
	xl: 'repeat(5, 1fr)',
	'2xl': 'repeat(6, 1fr)',
};

import { HoverContentContainer } from '@/components/library';
import { jsonData } from '../../_core-components/config/lib/data';
import { PADDING_X } from '../../_core-components/config/lib/constants/constants';
import Heading from '../../_core-components/components/text/Heading';
// import { PADDING_X } from '@/app/pulse/_core-components/config/lib/constants/constants';
// import { jsonData } from '@/app/pulse/_core-components/config/lib/data';
// import Heading from '@/app/pulse/_core-components/components/text/Heading';

// import Headng from '@/components/text/Heading';
// import NormalText from '@/components/text/NormalText';
// import { jsonData } from '@/components/library/config/lib/data';
export const padding = {
	PADDING_X_2XL: '18rem',
	PADDING_X_LG: '12rem',
	PADDING_X_MOBILE: '1rem',
};
type HomeContentProps = {
	content: any;
	dataModel: any;
	path: any;
	data?: any;
	basic?: any;
};
type ServiceContentProps = {
	content: any;
	basic: any;
};

// dataModel, content, path, data
const ServiceContent: FC<HomeContentProps> = ({ dataModel, content, path, data, basic }) => {
	const banner = content?.banner;
	const serviceCSS = content?.serviceCSS;
	const header = content?.header;
	const doc: ServiceContentProps = content?.serviceContent;
	let serviceContent = content?.serviceContent;
	if (content?.serviceContent?.length > 0) {
		serviceContent = content?.serviceContent;
	} else {
		serviceContent = jsonData?.serviceContent;
	}
	const css = content?.serviceCSS;

	return (
		<HoverContentContainer
			type='content'
			path={path}
			title='Banner Information'
			data={content}
			dataModel={dataModel}
			bg={serviceCSS?.bgColor}
			px={PADDING_X}
			position='sticky'
			top='0'>
			<Flex
				w='full'
				py='2.5rem'
				bg={css?.bgColor}
				display={{ base: 'none', lg: 'flex' }}>
				{serviceContent?.map((item: any, i: number) => (
					<ServiceCard
						key={i}
						image={item?.image}
						css={css}
						basic={basic}
						text={item?.title}
						flex='1'
						px='1rem'
						borderRight={
							i === serviceContent.length - 1
								? 'none'
								: css?.showDivider && {
										base: 'none',
										lg: `1px solid ${css?.dividerColor}`,
								  }
						}
					/>
				))}
			</Flex>
		</HoverContentContainer>
	);
};

export default ServiceContent;
//
const SectionPadding = ({ children, ...props }: BoxProps & { children: ReactNode }) => (
	<Box
		px={{
			base: padding.PADDING_X_MOBILE,
			lg: padding.PADDING_X_LG,
			'2xl': padding.PADDING_X_2XL,
		}}
		w='full'
		{...props}>
		{children}
	</Box>
);

const Title = ({
	basic,
	css,
	children,
	...props
}: TextProps & {
	css: any;
	basic: any;
	children: any;
}) => (
	<Heading
		fontSize={{ base: `${css?.titleSizeBASE}px`, lg: `${css?.titleSizeBG}px` }}
		color={css?.titleColor}
		css={css}
		{...props}>
		{children}
	</Heading>
);

const ServiceImage = ({
	css,
	children,
	src,
	...props
}: FlexProps & {
	css: any;
	src: string;
}) => (
	<Flex
		w={`${css?.imageWidth}px`}
		h={`${css?.imageHeight}px`}
		{...props}>
		<Image
			w='full'
			h='auto'
			src={src}
			alt='Service Image'
			objectFit='contain'
		/>
	</Flex>
);

const ServiceCard = ({
	css,
	basic,
	image,
	text,
	...props
}: FlexProps & {
	css: any;
	basic: any;
	image: string;
	text: string;
}) => (
	<Flex
		alignItems='center'
		{...props}>
		<Center
			w='40px'
			h='40px'
			mr='16px'>
			<ServiceImage
				src={image}
				css={css}
			/>
		</Center>
		<Title
			basic={basic}
			css={css}>
			{text}
		</Title>
	</Flex>
);
