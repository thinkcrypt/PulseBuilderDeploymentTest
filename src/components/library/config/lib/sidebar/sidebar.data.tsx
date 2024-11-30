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
		icon: 'barcode',
		path: 'pos',
	},
	{
		startOfSection: true,
		sectionTitle: 'Order Management',
		title: 'Order',
		href: '/orders',
		icon: 'order',
		path: 'orders',
	},
	{
		title: 'Purchase',
		href: '/purchases',
		icon: 'purchase',
		path: 'purchases',
	},
	{
		title: 'Delivery',
		href: '/deliveries',
		icon: 'delivery-fill',
		path: 'deliveries',
	},

	{
		startOfSection: true,
		sectionTitle: 'Product Management',
		title: 'Products',
		href: '/products',
		icon: 'product',
		path: 'products',
	},
	{
		title: 'Categories',
		href: '/categories',
		icon: 'category',
		path: 'categories',
	},
	{
		title: 'Coupons',
		href: '/coupons',
		icon: 'category',
		path: 'coupons',
	},
	{
		title: 'Brands',
		href: '/brands',
		icon: 'brand-alt',
		path: 'brands',
	},
	{
		title: 'Collections',
		href: '/collections',
		icon: 'collections',
		path: 'collections',
	},
	{
		startOfSection: true,
		sectionTitle: 'Inventory Management',
		title: 'Damages',
		href: '/damages',
		icon: 'product',
		path: 'adjustments/damages',
	},
	{
		title: 'Returns',
		href: '/return',
		icon: 'product',
		path: 'returns',
	},
	{
		startOfSection: true,
		sectionTitle: 'Customer Management',
		title: 'Customers',
		href: '/customers',
		icon: 'customer',
		path: 'customers',
	},
	{
		title: 'Customer Groups',
		href: '/groups',
		icon: 'collections',
		path: 'groups',
	},
	{
		title: 'Suppliers',
		href: '/suppliers',
		icon: 'customer',
		path: 'suppliers',
	},
	{
		startOfSection: true,
		sectionTitle: 'Expenses',
		title: 'Expenses',
		href: '/expenses',
		icon: 'expense',
		path: 'expenses',
	},
	{
		title: 'Expense Cateogry',
		href: '/expense-categories',
		icon: 'category',
		path: 'expense-categories',
	},
	{
		title: 'Payments',
		href: '/payments',
		icon: 'expense',
		path: 'payments',
	},
	{
		title: 'Payment Accounts',
		href: '/payment-account',
		icon: 'expense',
		path: 'payment-accounts',
	},
	{
		title: 'Pending Refunds',
		href: '/pending-refunds',
		icon: 'expense',
		path: 'pending-refunds',
	},
	{
		startOfSection: true,
		sectionTitle: 'Assets',
		title: 'Assets',
		href: '/assets',
		icon: 'dashboard',
		path: 'assets',
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

	// {
	// 	startOfSection: true,
	// 	sectionTitle: 'Content',
	// 	title: 'Store',
	// 	href: '/store-content',
	// 	icon: 'shop',
	// 	path: 'store-content',
	// },

	// {
	// 	title: 'Home',
	// 	href: '/home-content',
	// 	icon: 'content',
	// 	path: 'home-content',
	// },

	{
		startOfSection: true,
		sectionTitle: 'Reports',
		title: 'Profit/Loss Report',
		href: '/reports/profit-loss',
		icon: 'report',
		path: '/reports/profit-loss',
	},

	{
		title: 'Top Products',
		href: '/reports/top-products',
		icon: 'report',
		path: 'top-products',
	},
	{
		title: 'Low Stock',
		href: '/reports/low-stock',
		icon: 'report',
		path: 'reports/low-stock',
	},
	{
		title: 'Top Customers',
		href: '/reports/top-customers',
		icon: 'report',
		path: 'reports/top-customers',
	},
	{
		title: 'Customer Ledger',
		href: '/customer-ledger',
		icon: 'report',
		path: 'ledgers',
	},
	{
		title: 'Supplier Ledger',
		href: '/supplier-ledger',
		icon: 'report',
		path: 'supplier-ledger',
	},
	{
		title: 'SMS Log',
		href: '/reports/sms-log',
		icon: 'report',
		path: 'reports/sms-log',
	},

	{
		title: 'Settings',
		href: '/settings',
		icon: 'settings-fill',
		path: 'settings',
	},
];

export default sidebar;
