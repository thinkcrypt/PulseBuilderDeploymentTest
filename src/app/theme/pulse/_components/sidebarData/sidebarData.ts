import { breadcrumbSchema } from '../../_core-components/components/breadcrumb/breadcrumbSchema';
import aboutPageSchema from '../../about/_components/aboutDataSchema';
import cartSchema from '../../cart/_components/cartSchema';
import socialShareCssSchema from '../../product-details/_components/socialShareSchema';
import basicDataSchema from '../Basic/basicData';
import productCartStyleSchema from '../PulseProductList/productCartStyleSchema';

export const homeSidebarData = [
	{
		startOfSection: true,
		sectionTitle: 'Pages (PULSE)',
		title: 'Auth Page',
		href: 'auth',
		icon: 'content',
		path: 'auth',
		type: 'page',
	},
	{
		title: 'Dashboard Page',
		href: '/theme/pulse/dashboard/account',
		icon: 'content',
		path: 'dashboard/account',
		type: 'page',
	},
	{
		title: 'Home Page',
		href: '/theme/pulse',
		icon: 'content',
		path: 'pulse-home',
		type: 'page',
	},
	{
		title: 'Product Details',
		href: '/theme/pulse/product-details',
		icon: 'content',
		path: 'product-details',
		type: 'page',
	},
	{
		sectionTitle: 'All Products',
		title: 'All Products',
		href: '/theme/pulse/all-product',
		icon: 'content',
		path: 'all-product',
		type: 'page',
		dataPath: 'content',
		dataModel: productCartStyleSchema, // shoulb be changed later
	},
	{
		sectionTitle: 'Cart Page',
		title: 'Cart Page',
		icon: 'content',
		href: '/theme/pulse/cart',
		dataPath: 'content',
		type: 'page',
		path: 'cart',
		dataModel: cartSchema,
	},
	{
		sectionTitle: 'About Page',
		title: 'About Page',
		icon: 'content',
		href: 'about',
		dataPath: 'content',
		type: 'page',
		path: 'about',
		dataModel: aboutPageSchema,
	},
	{
		title: 'Checkout Page',
		href: '/theme/pulse/checkout',
		icon: 'content',
		path: 'checkout',
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
		href: 'search-page',
		icon: 'content',
		path: 'search-page',
		type: 'page',
		dataPath: 'content',
		dataModel: productCartStyleSchema, // shoulb be changed later
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
];
