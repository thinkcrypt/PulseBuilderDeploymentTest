// import NormalText from '@/components/text/NormalText';
import { Box, BoxProps, Center } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import NormalText from '../text/NormalText';

type SmallBannerProps = {
	bannerData: {
		bannerImgSrc: string;
		bannerText: string;
	};
	basic: any;
	css?: any;
};

const SmallBanner: FC<SmallBannerProps> = ({ bannerData, basic, css }) => {
	console.log(bannerData?.bannerImgSrc);
	return (
		<BannerWrapper
			backgroundImage={`url(${
				bannerData?.bannerImgSrc || './privacy/one.jpg'
			})`}
		>
			<Center w='full' h='full'>
				{/* <Overlay bg={colors?.overlay} /> */}
				<NormalText
					basic={basic}
					zIndex={'3'}
					fontSize='3rem'
					color='white'
					css={css}
				>
					{bannerData?.bannerText}
				</NormalText>
			</Center>
		</BannerWrapper>
	);
};

export default SmallBanner;

const BannerWrapper = ({
	children,
	...props
}: BoxProps & { children: ReactNode }) => {
	return (
		<Box
			w='full'
			h={{ base: '16rem', lg: '24rem' }}
			backgroundPosition={{ base: 'center center', lg: 'center center' }}
			backgroundSize='cover'
			backgroundRepeat='no-repeat'
			position='relative'
			{...props}
		>
			{children}
		</Box>
	);
};
