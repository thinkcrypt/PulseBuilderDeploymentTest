// /* eslint-disable @typescript-eslint/no-explicit-any */
// 'use client';
// import React, { FC, ReactNode, useRef } from 'react';
// import { Box, BoxProps, Center } from '@chakra-ui/react';

// import SwiperCore from 'swiper';
// import { ProductCard } from '@/components/featured-product/components/index';

// // Import Swiper components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Pagination, Autoplay } from 'swiper/modules';
// import {
// 	Action,
// 	SliderArrowWrapper,
// 	SwipperArrowButton,
// } from './components/index';

// import { swiperBreakpoints } from './breakpoints';

// type TopSellingProductProps = {
// 	products: any;
// 	content: any;
// 	basic: any;
// };
// // 
// const TopSellingProduct: FC<TopSellingProductProps> = ({
// 	products,
// 	content,
// 	basic,
// }) => {
// 	const css = content?.homeProductCss;
// 	const swiperRef = useRef<SwiperCore>();

// 	return (
// 		<BoxWrapper css={css}>
// 			<Action css={css} basic={basic} title='Top Selling' btnText='View All' />
// 			<Swiper
// 				spaceBetween={20}
// 				pagination={{ clickable: true }}
// 				modules={[Pagination, Autoplay]}
// 				breakpoints={swiperBreakpoints}
// 				onSwiper={swiper => (swiperRef.current = swiper)}
// 				autoplay={{
// 					delay: 3000, // Time in milliseconds (3 seconds)
// 				}}
// 			>
// 				{products?.doc?.map((item: any, i: number) => (
// 					<SwiperSlide key={i}>
// 						<Center bg={css?.secondary} w='full' h='auto'>
// 							<ProductCard basic={basic} css={css} item={item} />
// 						</Center>
// 					</SwiperSlide>
// 				))}
// 			</Swiper>
// 			<SliderArrowWrapper>
// 				<SwipperArrowButton
// 					next={() => swiperRef.current?.slideNext()}
// 					prev={() => swiperRef.current?.slidePrev()}
// 					css={css}
// 				/>
// 			</SliderArrowWrapper>
// 		</BoxWrapper>
// 	);
// };
// export default TopSellingProduct;

// const BoxWrapper = ({
// 	children,
// 	css,
// 	...props
// }: BoxProps & { children: ReactNode; css: any }) => {
// 	return (
// 		<Box
// 			py='1.5rem'
// 			bg={css?.secondary}
// 			borderBottom={`1px solid ${css?.primary}`}
// 			position='relative'
// 			{...props}
// 		>
// 			{children}
// 		</Box>
// 	);
// };
