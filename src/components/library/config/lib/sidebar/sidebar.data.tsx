import { SidebarItemType } from './types';

const sidebar: SidebarItemType[] = [
	{
		title: 'Dashboard',
		href: '/',
		icon: 'home',
		path: 'dashboard',
	},

	{
		title: 'Deployment',
		href: '/deployment',
		icon: 'product',
		path: 'deployment',
	},

	// {
	// 	sectionTitle: 'Customer',
	// 	title: 'Feedback',
	// 	href: '/feedbacks',
	// 	icon: 'feedbacks',
	// 	path: 'feedbacks',
	// },
	{
		startOfSection: true,
		sectionTitle: 'Admin Management',
		title: 'Roles',
		href: '/roles',
		icon: 'role',
		path: 'roles',
	},
	{
		sectionTitle: 'Users',
		title: 'Users',
		href: '/users',
		icon: 'user',
		path: 'users',
	},

	{
		startOfSection: true,
		sectionTitle: 'Content (NEXA)',
		title: 'Store',
		href: '/store-content',
		icon: 'shop',
		path: 'store-content',
	},

	{
		title: 'Home',
		href: '/home-content',
		icon: 'content',
		path: 'home-content',
	},
	{
		startOfSection: true,
		sectionTitle: 'Content (HONGO)',
		title: 'Store',
		href: '/hongo/hongo-store',
		icon: 'shop',
		path: 'hongo/hongo-store',
	},

	{
		title: 'Home',
		href: '/hongo/hongo-home',
		icon: 'content',
		path: 'hongo/hongo-home',
	},
	{
		startOfSection: true,
		sectionTitle: 'Pages (PULSE)',
		title: 'Home Page',
		href: '/pulse/pulse-home',
		icon: 'content',
		path: 'pulse',
		// type: 'page',
	},

	{
		startOfSection: true,
		sectionTitle: 'Reports',
		title: 'Profit/Loss Report',
		href: '/reports/profit-loss',
		icon: 'report',
		path: '/reports/profit-loss',
	},

	{
		title: 'Settings',
		href: '/settings',
		icon: 'settings-fill',
		path: 'settings',
	},
];

export default sidebar;
