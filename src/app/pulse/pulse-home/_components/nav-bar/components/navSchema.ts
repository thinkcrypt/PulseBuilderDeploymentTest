import { fontOptions } from '@/components/library';

const navSchema = [
   
    {
        name: 'bgColor',
        label: 'Background Color',
        type: 'color',
        span: 1,
    },

    {
        name: 'borderColor',
        label: 'Border Color',
        type: 'color',
        span: 1,
    },

    {
        name: 'brandColor',
        label: 'Brand Color',
        type: 'color',
        span: 1,
    },
    {
        name: 'brandTextColor',
        label: 'Brand Text Color',
        type: 'color',
        span: 1,
    },
    {
        name: 'btnColor',
        label: 'Button Color',
        type: 'color',
        span: 1,
    },
    {
        name: 'btnTextColor',
        label: 'Button Text Color',
        type: 'color',
        span: 1,
    },

    {
        // startOfSection: true,
        // sectionTitle: 'Logo Colors',
        // title: 'Logo',
        name: 'cardBg',
        label: 'Card Background',
        type: 'color',
        span: 1,
    },
    {
        name: 'cardRadius',
        label: 'Card Radius',
        type: 'number',
        span: 1,
    },
    {
        name: 'email',
        label: 'Email',
        type: 'text',
        span: 1,
    },
    {
        name: 'phone',
        label: 'Phone',
        type: 'text',
        span: 1,
    },

    {
        name: 'name',
        label: 'Theme Name',
        type: 'text',
        span: 1,
    },
    {
        name: 'primaryFont',
        label: 'Primary Font',
        options: fontOptions,
        type: 'select',
        span: 1,
    },
    {
        name: 'primaryTextColor',
        label: 'Primary Text Color',
        type: 'color',
        span: 1,
    },

    {
        name: 'secondaryFont',
        label: 'Secondary Font',
        options: fontOptions,
        type: 'select',
        span: 1,
    },
    {
        name: 'secondaryTextColor',
        label: 'Seciondary Text Color',
        type: 'color',
        span: 1,
    },
];

export default navSchema;
