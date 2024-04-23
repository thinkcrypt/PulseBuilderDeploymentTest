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
		sectionTitle: 'Employees',
		title: 'Employees',
		href: '/employees',
		icon: 'user',
		path: 'employees',
	},
	{
		title: 'Attendance',
		href: '/attendance',
		icon: 'category',
		path: 'attendance',
	},

	{
		title: 'Settings',
		href: '/settings',
		icon: 'settings-fill',
		path: 'settings',
	},
];

export default sidebar;
