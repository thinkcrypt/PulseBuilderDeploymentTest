// import {
// 	maxWidth,
// 	sectionPadding,
// } from '@/components/library/config/lib/constants/constants';
import { Box, BoxProps, Center, Flex, Grid } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import {
	CopyrightText,
	FooterAddress,
	FooterLinks,
	LogoImage,
	SocialIcons,
	SupportCard,
} from './components/index';
import Link from 'next/link';
import FooterTitle from './components/FooterTitle';
import { footerData } from './components/footerData';
import { HoverContentContainer } from '@/components/library';
import {
	maxWidth,
	PADDING_X,
	sectionPadding,
} from '../../../_components/index';
import { useAppSelector } from '@/hooks';

const TEMPLATE_COLUMN = {
	base: 'repeat(1, 1fr)',
	md: 'repeat(2, 1fr)',
	lg: 'repeat(3, 1fr)',
};

type FooterProps = {
	content: any;
	basic: any;
	path: string;
	data: any;
	dataModel: any;
};

const PulseFooter: FC<FooterProps> = ({
	data,
	path,
	content,
	basic,
	dataModel,
}) => {
	const { display } = useAppSelector(state => state.builder);
	const css = content?.footer;
	const footer = footerData.footer;
	const border = `1px solid ${css?.borderColor}`;

	const footerTheme = content?.footer;
	return (
		<HoverContentContainer
			type='content'
			path={path}
			title='Footer Information'
			data={content}
			dataModel={dataModel}
			bg={css?.bgColor}
			px={{
				base: 0,
				md: display === 'sm' ? PADDING_X.base : PADDING_X.md,
			}}
			// borderBottom={`1px solid ${footerTheme?.borderColor}`}
			position='sticky'
			top='0'
		>
			{/* bg={css?.bgColor} */}
			<Box bg={css?.bgColor} color={css?.fgColor}>
				<SectionPadding w='full' display='flex' alignItems='center' py={'3rem'}>
					<Grid
						gridTemplateColumns={{
							base: '1fr',
							md: '1fr 1fr',
							lg: display == 'sm' ? '1fr' : '1fr 1fr 1fr',
						}}
						w='full'
					>
						<Flex alignItems='center'>
							<LogoImage
								w={`${css?.logoWidth || 200}px`}
								h={`${css?.logoHeight || 200}px`}
								src={basic?.logo}
							/>
						</Flex>
						<Box>
							<FooterTitle css={css} basic={basic}>
								{footer?.about?.title}
							</FooterTitle>
							{footer?.about?.links?.map((item: any, i: number) => (
								<FooterLinks css={css} basic={basic} item={item} key={i} />
							))}
						</Box>
						<Box>
							<FooterTitle css={css} basic={basic}>
								{footer?.connected?.title}
							</FooterTitle>
							<FooterAddress css={css} basic={basic} item={footer?.connected} />
						</Box>
					</Grid>
				</SectionPadding>
				<SectionPadding>
					<Box borderTop={border} borderBottom={border} py='1rem'>
						<SocialIcons css={css} basic={basic} />
					</Box>
				</SectionPadding>

				<SectionPadding>
					<Center py='1rem'>
						<CopyrightText css={css} basic={basic} fontSize={'.875rem'}>
							{footer?.copyright?.leftText}
							<Link href={footer?.copyright?.link} target='_blank'>
								{footer?.copyright?.thinkText}
							</Link>
							{footer?.copyright?.rightText}
						</CopyrightText>
					</Center>
				</SectionPadding>
			</Box>
		</HoverContentContainer>
	);
};
export default PulseFooter;

const SectionPadding = ({
	children,
	...props
}: BoxProps & { children: ReactNode }) => (
	<Box
		// px={{
		// 	base: sectionPadding.PADDING_X_MOBILE,
		// 	lg: sectionPadding.PADDING_X_LG,
		// 	'2xl': sectionPadding.PADDING_X_2XL,
		// }}
		// maxW={maxWidth}
		mx='auto'
		{...props}
	>
		{children}
	</Box>
);
