import { Button, ButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type SearchButtonProps = ButtonProps & {
	header: any;
};

const SearchButton: FC<SearchButtonProps> = ({ header }) => {
	return (
		<Button
			w={`${header?.btnWidth}px`}
			h={`${header?.btnHeight}px`}
			color={header?.btnFg}
			bg={header?.btnBg}
			borderRadius={`${header?.btnRadius}px`}
			fontSize={header?.btnFontSize}
			fontWeight={header?.btnFontWeight}
			_hover={{
				bg: header?.btnHoverBg,
				color: header?.btnHoverFg,
			}}
		>
			{header?.btnText}
		</Button>
	);
};

export default SearchButton;