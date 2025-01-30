'use client';
import { useGetContentQuery } from '@/components/library/store/services/contentApi';
// import { useGetContentQuery } from '../store/services/contentApi';
import React, { useState } from 'react';

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
	darkLight: string;
	arrowBox: string;
	tagBg: string;
	scrollBar: string;
	headingBg: string;
	headingFg: string;
	bodyBg: string;
	bodyFg: string;
	removeFg: string;
	borderColor: string;
	qtyBg: string;
	qtyFg: string;
	footerBg: string;
	footerFg: string;
	checkoutBg: string;
	checkoutFg: string;
	checkoutHoverBg: string;
	checkoutHoverFg: string;
	warning: string;
};

const useColors = (): ColorProps => {
	const { data, isLoading } = useGetContentQuery({ path: 'pulse' });

	const [warning, setWarning] = React.useState<string>('#ef4a23');
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
	const [darkLight, setDarkLight] = React.useState<string>('#27323b');
	const [arrowBox, setArrowBox] = React.useState<string>('#666666');
	const [tagBg, setTagBg] = React.useState<string>('#F5F6FC');
	const [scrollBar, setScrollBar] = React.useState<string>('#a2a2a2');

	const [headingBg, setHeadingBg] = React.useState<string>('#dad7cd');
	const [headingFg, setHeadingFg] = React.useState<string>('#333333');
	const [bodyBg, setBodyBg] = React.useState<string>('#fff');
	const [bodyFg, setBodyFg] = React.useState<string>('#000000');
	const [removeFg, setRemoveFg] = React.useState<string>('#eb4034');
	const [borderColor, setBorderColor] = React.useState<string>('#cfcfcf');
	const [qtyBg, setQtyBg] = React.useState<string>('#efefef');
	const [qtyFg, setQtyFg] = React.useState<string>('#000');
	const [footerBg, setFooterBg] = React.useState<string>('#dad7cd');
	const [footerFg, setFooterFg] = React.useState<string>('#333333');
	const [checkoutBg, setCheckoutBg] = React.useState<string>('#344e41');
	const [checkoutFg, setCheckoutFg] = React.useState<string>('#fff');
	const [checkoutHoverBg, setCheckoutHoverBg] =
		React.useState<string>('#233d30');
	const [checkoutHoverFg, setCheckoutHoverFg] = React.useState<string>('#fff');
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
		headingBg,
		headingFg,
		bodyBg,
		bodyFg,
		removeFg,
		borderColor,
		qtyBg,
		qtyFg,
		footerBg,
		footerFg,
		checkoutBg,
		checkoutFg,
		checkoutHoverBg,
		checkoutHoverFg,
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
		darkLight,
		arrowBox,
		tagBg,
		scrollBar,
		warning,
	};
};

export default useColors;
