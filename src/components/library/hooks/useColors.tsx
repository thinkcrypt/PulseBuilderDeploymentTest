'use client';
// import { useGetStoreQuery } from '@/store/services/storeApi';
import React from 'react';
import { useGetContentQuery } from '../store/services/contentApi';

export type ColorProps = {
	border: string;
	brand: string;
	brandText: string;
	primaryText: string;
	overlay: string;

	fBg: string;
	fFg: string;
	fBorder: string;
	fTitle: string;
	fHov: string;
	iconBg: string;
	iconHoverBg: string;
	iconFg: string;

	white: string;
	black: string;
	hoverColor: string;
	dark: string;
	cardText: string;
};

const useColors = (): ColorProps => {
	const { data, isLoading } = useGetContentQuery({
		path: 'pulse',
	});

	const [border, setBorder] = React.useState<string>('eborder.600');
	const [brand, setBrand] = React.useState<string>('#202020');
	const [brandText, setBrandText] = React.useState<string>('#fff');
	const [primaryText, setPrimaryText] = React.useState<string>('#202020');
	const [overlay, setOverlay] = React.useState<string>('#202020');

	const [fBg, setFBg] = React.useState<string>('#081621');
	const [fFg, setFFg] = React.useState<string>('#838383');
	const [fBorder, setFBorder] = React.useState<string>('#212e38');
	const [fTitle, setFTitle] = React.useState<string>('#fff');
	const [fHov, setFHov] = React.useState<string>('#ef4a23');
	const [iconHoverBg, setIconHoverBg] = React.useState<string>('#3749bb');
	const [iconBg, setIconBg] = React.useState<string>('#202020');
	const [iconFg, setIconFg] = React.useState<string>('#202020');

	const [white, setWhite] = React.useState<string>('#fff');
	const [black, setBlack] = React.useState<string>('#000000');
	const [dark, setDark] = React.useState<string>('#081621');
	const [hoverColor, setHoverColor] = React.useState<string>('#ef4a23');
	const [cardText, setCardText] = React.useState<string>('#666666');

	React.useEffect(() => {
		if (data) {
			setBrand(data?.basic?.brandColor);
			setBrandText(data?.basic?.brandTextColor);
			setPrimaryText(data?.basic?.primaryTextColor);
			setPrimaryText(data?.basic?.primaryTextColor);

			setBorder(data?.basic?.borderColor || 'eborder.600');
		}
	}, [isLoading, data]);

	return {
		border,
		brand,
		brandText,
		primaryText,
		overlay,
		fBg,
		fFg,
		fBorder,
		fTitle,
		fHov,
		iconHoverBg,
		iconBg,
		iconFg,
		white,
		black,
		dark,
		hoverColor,
		cardText,
	};
};

export default useColors;
