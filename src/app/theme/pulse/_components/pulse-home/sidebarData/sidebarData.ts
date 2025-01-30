import { aboutPageSchema } from '../../about';
import { breadcrumbSchema } from '../../components';
import { socialShareCssSchema } from '../../product-details';
import basicDataSchema from '../Basic/basicData';
import { productCartStyleSchema } from '../PulseProductList';
// import {
//   // productCartStyleSchema,
//   aboutPageSchema,
//   breadcrumbSchema,
//   socialShareCssSchema,
//   basicDataSchema,
// } from "../../../_components/index";
export const homeSidebarData = [
	{
		startOfSection: true,
		sectionTitle: 'Pages (PULSE)',
		title: 'Home Page',
		href: '/theme/pulse',
		icon: 'content',
		path: '/theme/pulse',
		type: 'page',
	},
	{
		title: 'Auth Page',
		href: '/theme/pulse/auth',
		icon: 'content',
		path: '/theme/pulse/auth',
		type: 'page',
	},
	{
		title: 'Dashboard Page',
		href: '/theme/pulse/dashboard/account',
		icon: 'content',
		path: '/theme/pulse/dashboard/account',
		type: 'page',
	},

	{
		title: 'Product Details',
		href: '/theme/pulse/product-details',
		icon: 'content',
		path: '/theme/pulse/product-details',
		type: 'page',
	},
	// {
	//   sectionTitle: "All Products",
	//   title: "All Products",
	//   href: "/theme/pulse/all-product",
	//   path: "/theme/pulse/all-product",
	//   icon: "content",
	//   type: "page",
	//   dataPath: "content",
	//   dataModel: productCartStyleSchema, // shoulb be changed later
	// },
	{
		sectionTitle: 'Cart Page',
		title: 'Cart Page',
		icon: 'content',
		href: '/theme/pulse/cart',
		dataPath: 'content',
		type: 'page',
		path: '/theme/pulse/cart',
		// dataModel: cartSchema,
	},
	{
		sectionTitle: 'About Page',
		title: 'About Page',
		icon: 'content',
		href: '/theme/pulse/about',
		dataPath: 'content',
		type: 'page',
		path: '/theme/pulse/about',
		dataModel: aboutPageSchema,
	},
	{
		title: 'Checkout Page',
		href: '/theme/pulse/checkout',
		icon: 'content',
		path: '/theme/pulse/checkout',
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
		sectionTitle: 'Search Box',
		title: 'Search Box',
		href: '/theme/pulse/search-page',
		icon: 'content',
		path: '/theme/pulse/search-page',
		type: 'page',
		dataPath: 'content',
		dataModel: productCartStyleSchema,
	},

	{
		sectionTitle: 'Product Card',
		title: 'Product Cart',
		icon: 'content',
		dataPath: 'content',
		type: 'component',
		path: 'pulse',
		dataModel: productCartStyleSchema,
	},
	{
		sectionTitle: 'Social Share',
		title: 'Social Share',
		icon: 'content',
		dataPath: 'content',
		type: 'component',
		path: 'pulse',
		dataModel: socialShareCssSchema,
	},
	{
		sectionTitle: 'Breadcrumb Css',
		title: 'Breadcrumb Css',
		icon: 'content',
		dataPath: 'basic',
		type: 'component',
		path: 'pulse',
		dataModel: breadcrumbSchema,
	},
	//
	{
		startOfSection: true,
		sectionTitle: 'Pages (All Products)',
		title: 'Filter Modal',
		// href: '/theme/pulse',
		// path: '/theme/pulse',
		href: '/theme/pulse/all-product',
		path: '/theme/pulse/all-product',
		icon: 'content',
		type: 'page',
	},
];
