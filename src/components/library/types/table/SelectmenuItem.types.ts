type Item =
	| 'edit'
	| 'delete'
	| 'custom'
	| 'edit-select'
	| 'edit-data-select'
	| 'export'
	| 'marketing-sms';

type Prompt = {
	title?: string;
	body?: string;
};

type BaseItem = {
	title: string;
	key?: string;
	type: Item;
	prompt?: Prompt;
	keyType?: 'string' | 'array' | 'object';
};

type SelectMenuItem = BaseItem & {
	type: 'edit-select';
	options: { label: string; value: any }[];
};

type DataSelectMenu = BaseItem & {
	type: 'edit-data-select';
	dataPath: string;
	dataModel?: any;
};

type OtherMenuItem = BaseItem & {
	type: Exclude<Item, 'edit-select' | 'edit-data-select'>;
	options?: never;
	dataPath?: never;
	dataModel?: never;
	value?: any;
};

export type SelectmenuItem = SelectMenuItem | DataSelectMenu | OtherMenuItem;
