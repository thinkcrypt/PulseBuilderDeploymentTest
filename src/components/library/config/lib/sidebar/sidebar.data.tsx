import { SidebarItemType } from './types';

const sidebar: SidebarItemType[] = [
	{
		title: 'Dashboard',
		href: '/',
		icon: 'home',
		path: 'dashboard',
	},
	{
		title: 'POS',
		href: '/pos',
		icon: 'pos',
		path: 'pos',
	},
	{
		title: 'Order',
		href: '/orders',
		icon: 'order',
		path: 'orders',
	},

	{
		startOfSection: true,
		sectionTitle: 'Product Management',
		title: 'Products',
		href: '/products',
		icon: 'items',
		path: 'products',
	},
	{
		title: 'Categories',
		href: '/categories',
		icon: 'category',
		path: 'categories',
	},
	{
		title: 'Collections',
		href: '/collections',
		icon: 'collections',
		path: 'collections',
	},
	{
		startOfSection: true,
		sectionTitle: 'Customer Management',
		title: 'Customers',
		href: '/customers',
		icon: 'customers',
		path: 'customers',
	},
	{
		sectionTitle: 'Customer',
		title: 'Feedback',
		href: '/feedbacks',
		icon: 'feedbacks',
		path: 'feedbacks',
	},

	{
		title: 'Settings',
		href: '/settings',
		icon: 'settings-fill',
		path: 'settings',
	},
];

export default sidebar;
