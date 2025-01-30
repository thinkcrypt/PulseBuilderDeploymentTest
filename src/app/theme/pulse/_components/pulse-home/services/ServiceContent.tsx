import { FC, ReactNode } from 'react';
import {
	Box,
	BoxProps,
	Center,
	Flex,
	FlexProps,
	Grid,
	Image,
	TextProps,
} from '@chakra-ui/react';

const TEMPLATE_COLUMN = {
	base: 'repeat(2, 1fr)',
	md: 'repeat(3, 1fr)',
	lg: 'repeat(4, 1fr)',
	xl: 'repeat(5, 1fr)',
	'2xl': 'repeat(6, 1fr)',
};

import { HoverContentContainer, PLACEHOLDER_IMAGE } from '@/components/library';
import { jsonData, PADDING_X, Heading } from '../../../_components/index';
import { useAppSelector } from '@/hooks';
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
const ServiceContent: FC<HomeContentProps> = ({
	dataModel,
	content,
	path,
	data,
	basic,
}) => {
	const banner = content?.banner;
	const serviceCSS = content?.serviceCSS;
	const header = content?.header;
	const { display } = useAppSelector(state => state.builder);
	const doc: ServiceContentProps = content?.serviceContent;
	let serviceContent = content?.serviceContent;
	if (content?.serviceContent?.length > 0) {
		serviceContent =
			display === 'sm'
				? content?.serviceContent.slice(0, 3)
				: content?.serviceContent;
	} else {
		serviceContent = [
			PLACEHOLDER_IMAGE,
			PLACEHOLDER_IMAGE,
			PLACEHOLDER_IMAGE,
			PLACEHOLDER_IMAGE,
		];
	}
	console.log('service content:::', serviceContent);
	const css = content?.serviceCSS;

	return (
		<HoverContentContainer
			type='content'
			path={path}
			title='Banner Information'
			data={content}
			dataModel={dataModel}
			bg={serviceCSS?.bgColor}
			px={{
				base: PADDING_X.base,
				md: display === 'sm' ? PADDING_X.base : PADDING_X.md,
			}}
			position='sticky'
			top='0'
			mt='32px'
		>
			<Flex
				w='full'
				py='2rem'
				bg={css?.bgColor}
				display={{ base: 'none', lg: 'flex' }}
			>
				{serviceContent?.map((item: any, i: number) => (
					<ServiceCard
						key={i}
						image={item?.image || item}
						css={css}
						basic={basic}
						text={item?.title}
						flex='1'
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
const SectionPadding = ({
	children,
	...props
}: BoxProps & { children: ReactNode }) => (
	<Box
		px={{
			base: padding.PADDING_X_MOBILE,
			lg: padding.PADDING_X_LG,
			'2xl': padding.PADDING_X_2XL,
		}}
		w='full'
		{...props}
	>
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
		{...props}
	>
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
	<Flex w={`${css?.imageWidth}px`} h={`${css?.imageHeight}px`} {...props}>
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
	<Flex alignItems='center' {...props}>
		<Center w='40px' h='40px' mr='12px' ml='4px'>
			<ServiceImage src={image} css={css} />
		</Center>
		<Title basic={basic} css={css}>
			{text}
		</Title>
	</Flex>
);
