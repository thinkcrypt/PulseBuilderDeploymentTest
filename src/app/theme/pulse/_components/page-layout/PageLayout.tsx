// import { Footer, Header, TopBanner } from '@/components';
// import {
// 	sectionPadding,
// 	maxWidth,
// } from '@/components/library/config/lib/constants/constants';
// import { maxWidth, sectionPadding } from '@/lib/config/constants';
import { Box, BoxProps, Center, Spinner } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import Banner from '../Banner/Banner';
import { pulseBannerData } from '../Banner';
import { PulseHeader, pulseHeaderData } from '../Header';
import PulseFooter from '../footer/Footer';
import pulseFooterSchema from '../footer/components/pulseFooterSchema';
import { maxWidth, sectionPadding } from '../../_core-components/config/lib/constants/constants';

type LayoutProps = {
	children?: ReactNode;
	isLoading?: boolean;
	data?: {
		content: any;
		basic: any;
	};
};

const PageLayout: FC<LayoutProps> = ({ children, isLoading, data }) => {
	if (isLoading)
		return (
			<Center
				w='100vw'
				flex={1}
				h='100vh'>
				<Spinner size='xl' />
			</Center>
		);

	return (
		<>
			{!data?.content?.banner?.hide && (
				// <TopBanner content={data?.content} basic={data?.basic} />
				<Banner
					data={data}
					path='pulse'
					content={data?.content}
					basic={data?.basic}
					dataModel={pulseBannerData}
				/>
			)}
			{/* <Header content={data?.content} basic={data?.basic} /> */}
			<PulseHeader
				data={data}
				basic={data?.basic}
				path='pulse'
				content={data?.content}
				dataModel={pulseHeaderData}
			/>
			<Box bg={data?.basic?.bgColor}>
				<SectionPadding
					minH='80vh'
					maxW={maxWidth}
					mx='auto'>
					{children}
				</SectionPadding>
			</Box>
			{/* <SectionPadding minH='80vh' maxW={maxWidth} mx='auto'>
				{children}
			</SectionPadding> */}

			{/* <Footer content={data?.content} basic={data?.basic} /> */}
			<PulseFooter
				data={data}
				path='pulse'
				basic={data?.basic}
				content={data?.content}
				dataModel={pulseFooterSchema}
			/>
		</>
	);
};
export default PageLayout;

const SectionPadding = ({ children, ...props }: BoxProps & { children: ReactNode }) => (
	<Box
		px={{
			base: sectionPadding.PADDING_X_MOBILE,
			lg: sectionPadding.PADDING_X_LG,
			'2xl': sectionPadding.PADDING_X_2XL,
		}}
		w='full'
		{...props}>
		{children}
	</Box>
);
