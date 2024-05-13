import { SidebarItemType } from '../types';

const sidebar: SidebarItemType[] = [
	{
		title: 'Dashboard',
		href: '/',
		icon: 'home',
		path: 'dashboard',
	},
	{
		startOfSection: true,
		sectionTitle: 'Menu',
		title: 'Items',
		href: '/items',
		icon: 'items',
		path: 'items',
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
		title: 'Settings',
		href: '/settings',
		icon: 'settings-fill',
		path: 'settings',
	},
];

export default sidebar;
