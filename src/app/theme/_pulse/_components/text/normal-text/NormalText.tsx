// import { useGetStoreQuery } from '@/store/services/storeApi';
import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type NormalTextProps = TextProps & {
	children: string | number;
	css?: any;
	basic: any;
};

const NormalText: FC<NormalTextProps> = ({
	children,
	css,
	basic,
	...props
}) => {
	return (
		<Text
			fontWeight='400'
			fontSize='1rem'
			fontFamily={css?.fontFamily || basic?.secondaryFont}
			color={css?.fgColor || basic?.secondaryTextColor}
			{...props}
		>
			{children}
		</Text>
	);
};

export default NormalText;
