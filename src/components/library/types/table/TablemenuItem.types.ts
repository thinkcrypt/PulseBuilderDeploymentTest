import React from 'react';

type Item =
	| 'edit'
	| 'delete'
	| 'view'
	| 'view-modal'
	| 'edit-modal'
	| 'redirect'
	| 'custom'
	| 'marketing-sms'
	| 'link'
	| 'custom-modal'
	| 'custom-redirect'
	| 'duplicate';

type BaseMenuItem = {
	title: string;
	type: Item;
	dataModel?: any;
	id?: any;
	path?: string;
};

type CustomModalMenuItem = BaseMenuItem & {
	type: 'custom-modal';
	modal: any;
};

type RedirectMenuItem = BaseMenuItem & {
	type: 'redirect';
	href: string;
};

type CustomRedirectItem = BaseMenuItem & {
	type: 'custom-redirect';
	href: (data: any) => string;
};

type OtherMenuItem = BaseMenuItem & {
	type: Exclude<Item, 'redirect' | 'custom-modal' | 'custom-redirect'>;
	href?: string;
	modal?: never;
};

export type MenuItem = CustomModalMenuItem | RedirectMenuItem | OtherMenuItem | CustomRedirectItem;
