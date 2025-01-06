import React, { FC, ReactNode } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import {
	PADDING_X,
	placeholderLogo,
} from '@/components/library/config/lib/constants/constants';
import { Box, BoxProps, Flex, Image } from '@chakra-ui/react';
import { HomeContentProps, HoverContentContainer } from '@/components/library';
export const padding = {
	PADDING_X_2XL: '18rem',
	PADDING_X_LG: '12rem',
	PADDING_X_MOBILE: '1rem',
};

type HeroConfigProps = {
	images: string[];
	height: number;
	hide: boolean;
};
// dataModel, content, path, data
const HeroConfig: FC<HomeContentProps> = ({
	dataModel,
	content,
	path,
	data,
	basic,
}) => {
	return (
		<HoverContentContainer
			type='content'
			path={path}
			title='Banner Information'
			data={data}
			dataModel={dataModel}
			bg={basic?.bgColor}
			position='sticky'
			top='0'
		>
			<BannerSlider hero={content?.hero} />
		</HoverContentContainer>
	);
};

export default HeroConfig;

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

type BannerSliderProps = {
	hero: any;
};

const BannerSlider: FC<BannerSliderProps> = ({ hero }) => {
	let images;

	if (hero?.images?.length > 0) {
		images = hero?.images;
	} else {
		images = [placeholderLogo, placeholderLogo];
	}

	var settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		speed: 1000,
		arrows: false,
	};
	return (
		<Slider {...settings}>
			{images?.map((item: any, i: number) => (
				<Flex w='full' h={`${hero?.height}px`} key={i}>
					<Image
						w='full'
						h='full'
						objectFit='cover'
						src={item}
						alt={item.name}
					/>
				</Flex>
			))}
		</Slider>
	);
};
