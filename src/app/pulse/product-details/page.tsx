'use client';

import { useEffect } from 'react';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
import {
	EditorLayoutSuspense,
	useAppDispatch,
	resetBuilder,
	push,
} from '@/components/library';
import basicDataSchema from '../pulse-home/_components/Basic/basicData';
import PulseFooter from '../pulse-home/_components/footer/Footer';
import pulseFooterSchema from '../pulse-home/_components/footer/components/pulseFooterSchema';
import ProductDetailsPage from './ProductDetailsPage';
import { productDetailsData } from './index';
import { ProductSpecifications } from '../product-specifications';
import Banner from '../pulse-home/_components/Banner/Banner';
import { pulseBannerData } from '../pulse-home/_components/Banner';
import { PulseHeader, pulseHeaderData } from '../pulse-home/_components/Header';
import PulseNavbar from '../pulse-home/_components/nav-bar/Navbar';
import navSchema from '../pulse-home/_components/nav-bar/components/navSchema';
import { productSpecificiationsData } from '../product-specifications/index';
import productCartStyleSchema from '../pulse-home/_components/PulseProductList/productCartStyleSchema';
import cartSchema from '../pulse-home/_components/Header/cartDrawerSchema';

const sidebarData = [
	{
		startOfSection: true,
		sectionTitle: 'Pages (PULSE)',
		title: 'Home Page',
		href: '/pulse/pulse-home',
		icon: 'content',
		path: 'pulse/pulse-home',
		type: 'page',
	},
	{
		title: 'Product Details',
		href: '/pulse/product-details',
		icon: 'content',
		path: 'product-details',
		type: 'page',
	},
	{
		startOfSection: true,
		sectionTitle: 'Basic',
		title: 'Basic',
		icon: 'content',
		dataPath: 'basic',
		type: 'component',
		path: 'pulse',
		// dataModel: storeData,
		dataModel: basicDataSchema,
	},
	{
		sectionTitle: 'Product Cart',
		title: 'Product Cart',
		icon: 'content',
		dataPath: 'content',
		type: 'component',
		path: 'pulse',
		dataModel: productCartStyleSchema,
	},
	{
		sectionTitle: 'Add to Cart',
		title: 'Add to Cart',
		icon: 'content',
		dataPath: 'content',
		type: 'component',
		path: 'pulse',
		dataModel: cartSchema,
	},
	{
		sectionTitle: 'Social Share',
		title: 'Social Share',
		icon: 'content',
		dataPath: 'content',
		type: 'component',
		path: 'pulse',
		dataModel: [
			{
				name: 'productPage.tabBg',
				label: 'Background Color',
				type: 'color',
				span: 1,
			},
			{
				name: 'productPage.tabFg',
				label: 'Icon Color',
				type: 'color',
				span: 1,
			},
		],
	},
];
// 
const ProductDetails = () => {
	const { data, isLoading, isSuccess, isFetching } = useGetContentQuery({
		path: 'pulse',
	});

	console.log('product details data:::', data);

	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(resetBuilder());
	}, []);

	useEffect(() => {
		if (data && !isFetching && isSuccess) {
			dispatch(
				push({
					basic: data?.basic,
					content: data?.content,
				})
			);
		}
	}, [isFetching]);

	return (
		<EditorLayoutSuspense
			data={data}
			sidebarData={sidebarData}
			isLoading={isLoading || !data}
			path='/home-content'
			title='Home Content'
			position='relative'
			gap={0}
		>
			<Banner
				data={data}
				path='pulse'
				content={data?.content}
				basic={data?.basic}
				dataModel={pulseBannerData}
			/>
			<PulseHeader
				data={data}
				basic={data?.basic}
				path='pulse'
				content={data?.content}
				dataModel={pulseHeaderData}
			/>
			<PulseNavbar
				data={data}
				basic={data?.basic}
				path='pulse'
				content={data?.content}
				dataModel={navSchema}
			/>
			{/* <Banner
				data={data}
				path='pulse'
				content={data?.content}
				basic={data?.basic}
				dataModel={pulseBannerData}
			/> */}
			<ProductDetailsPage
				data={data}
				path='pulse'
				basic={data?.basic}
				content={data?.content}
				dataModel={productDetailsData}
			/>
			<ProductSpecifications
				data={data}
				path='pulse'
				basic={data?.basic}
				content={data?.content}
				dataModel={productSpecificiationsData}
			/>

			<PulseFooter
				data={data}
				path='pulse'
				basic={data?.basic}
				content={data?.content}
				dataModel={pulseFooterSchema}
			/>
			{/* <FooterConfig
				data={data}
				path='hongo'
				content={data?.content}
				dataModel={footerData}
			/> */}
		</EditorLayoutSuspense>
	);
};

export default ProductDetails;
