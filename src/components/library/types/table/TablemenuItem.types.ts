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
	| 'custom-modal'
	| 'duplicate';

type BaseMenuItem = {
	title: string;
	type: Item;
	dataModel?: any;
};

type CustomModalMenuItem = BaseMenuItem & {
	type: 'custom-modal';
	modal: any;
};

type RedirectMenuItem = BaseMenuItem & {
	type: 'redirect';
	href: string;
};

type OtherMenuItem = BaseMenuItem & {
	type: Exclude<Item, 'redirect' | 'custom-modal'>;
	href?: string;
	modal?: never;
};

export type MenuItem = CustomModalMenuItem | RedirectMenuItem | OtherMenuItem;
