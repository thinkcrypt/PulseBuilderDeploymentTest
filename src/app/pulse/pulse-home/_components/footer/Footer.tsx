import {
	maxWidth,
	sectionPadding,
} from '@/components/library/config/lib/constants/constants';
import { Box, BoxProps, Center, Grid } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import {
	CopyrightText,
	FooterAddress,
	FooterLinks,
	SocialIcons,
	SupportCard,
} from './components/index';
import Link from 'next/link';
import FooterTitle from './components/FooterTitle';
import { footerData } from './components/footerData';
import { HoverContentContainer } from '@/components/library';

const TEMPLATE_COLUMN = {
	base: 'repeat(2, 1fr)',
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
	const css = content?.footer;
	// console.log('basic::', basic);
	// console.log('css', css);
	const footer = footerData.footer;
	const border = `1px solid ${css?.borderColor}`;
	// const border = `1px solid red`;

	const footerTheme = content?.footer;
	console.log('footerTheme', footerTheme);
	// const doc: HeroConfigProps = content?.hero;
	return (
		<HoverContentContainer
			type='content'
			path={path}
			title='Banner Information'
			data={content}
			dataModel={dataModel}
			bg={basic?.bgColor}
			// bg={banner?.bgColor}
			borderBottom={`1px solid ${footerTheme?.borderColor}`}
			// px={PADDING_X}
			position='sticky'
			top='0'
		
		>
			<Box bg={css?.bgColor} color={css?.fgColor} pos={'relative'}>
				<SectionPadding
					w='full'
					display='flex'
					alignItems='center'
					py={'3rem'}
				>
					<Grid gridTemplateColumns={TEMPLATE_COLUMN} w='full'>
						<Box>
							<FooterTitle basic={basic} css={css}>
								{footer?.support?.title}
							</FooterTitle>
							{footer?.support?.card?.map((item: any, i: number) => (
								<SupportCard basic={basic} css={css} item={item} key={i} />
							))}
						</Box>
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
				{/* section padding */}
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
		px={{
			base: sectionPadding.PADDING_X_MOBILE,
			lg: sectionPadding.PADDING_X_LG,
			'2xl': sectionPadding.PADDING_X_2XL,
		}}
		maxW={maxWidth}
		mx='auto'
		{...props}
	>
		{children}
	</Box>
);
