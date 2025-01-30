const filterModalCssSchema = [
	// bg color
	{
		sectionTitle: 'Background',
		name: 'filterModalCss.bgColor',
		label: 'Background Color',
		type: 'color',
		span: 1,
	},
	{
		name: 'filterModalCss.fgColor',
		label: 'Foreground Color',
		type: 'color',
		span: 1,
		endOfSection: true,
	},
	// btn colors
	{
		sectionTitle: 'Button',
		name: 'filterModalCss.filterBtnBg',
		label: 'Background Color',
		type: 'color',
		span: 1,
	},
	{
		name: 'filterModalCss.filterBtnFg',
		label: 'Foreground Color',
		type: 'color',
		span: 1,
	},
	{
		name: 'filterModalCss.filterBtnHoverBg',
		label: 'Hover Background Color',
		type: 'color',
		span: 1,
	},
	{
		name: 'filterModalCss.filterBtnHoverFg',
		label: 'Hover Foreground Color',
		type: 'color',
		span: 1,
		endOfSection: true,
	},
	// border
	{
		sectionTitle: 'Border',
		name: 'filterModalCss.borderColor',
		label: 'Border Color',
		type: 'color',
		span: 1,
	},
	{
		name: 'filterModalCss.borderRadius',
		label: 'Border Radius',
		type: 'number',
		span: 1,
		endOfSection: true,
	},
	// heading
	{
		sectionTitle: 'Heading',
		name: 'filterModalCss.headingSize',
		label: 'Font Size',
		type: 'number',
		span: 1,
	},
	{
		name: 'filterModalCss.headingWeight',
		label: 'Font Weight',
		type: 'number',
		span: 1,
		endOfSection: true,
	},
	// reset button
	{
		sectionTitle: 'Apply Button',
		name: 'filterModalCss.applyBtnBg',
		label: 'Background Color',
		type: 'color',
		span: 1,
	},
	{
		name: 'filterModalCss.applyBtnFg',
		label: 'Foreground Color',
		type: 'color',
		span: 1,
	},
	{
		name: 'filterModalCss.applyBtnHoverBg',
		label: 'Hover Background Color',
		type: 'color',
		span: 1,
	},
	{
		name: 'filterModalCss.applyBtnHoverFg',
		label: 'Hover Foreground Color',
		type: 'color',
		span: 1,
		endOfSection: true,
	},
	// active state
	{
		sectionTitle: 'Active State',
		name: 'filterModalCss.activeBorder',
		label: 'Active Border Color',
		type: 'color',
		span: 1,
	},
	{
		name: 'filterModalCss.activeFontWeight',
		label: 'Active Font Weight',
		type: 'number',
		span: 1,
		endOfSection: true,
	},
	{
		sectionTitle: 'Range Fill',
		name: 'filterModalCss.rangeFillColor',
		label: 'Range Fill Color',
		type: 'color',
		span: 1,
	},
];

export default filterModalCssSchema;
